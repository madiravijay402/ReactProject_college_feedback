
import { useState } from "react";

const problems = [
  {
    id: 1,
    area: "Infrastructure",
    icon: "🏫",
    problem: "Poor classroom maintenance, broken facilities, and unhygienic washrooms affect daily student life.",
    severity: "High",
  },
  {
    id: 2,
    area: "Technology",
    icon: "📶",
    problem: "Slow or no WiFi access, outdated computer labs, and non-functional projector systems hinder learning.",
    severity: "High",
  },
  {
    id: 3,
    area: "Academics",
    icon: "📚",
    problem: "Outdated syllabus with minimal practical exposure and inconsistent teaching quality across departments.",
    severity: "High",
  },
  {
    id: 4,
    area: "Canteen",
    icon: "🍽️",
    problem: "Unhygienic food preparation, very limited menu options, and overpriced meals for students.",
    severity: "Medium",
  },
  {
    id: 5,
    area: "Administration",
    icon: "🕐",
    problem: "Extremely slow response to student complaints and a complete lack of transparency in decisions.",
    severity: "High",
  },
  {
    id: 6,
    area: "Campus",
    icon: "🌿",
    problem: "Poor cleanliness standards, absence of green spaces, and inadequate lighting in key areas.",
    severity: "Medium",
  },
  {
    id: 7,
    area: "Placement",
    icon: "🎓",
    problem: "Very few companies visit for recruitment and there is no structured mock interview preparation program.",
    severity: "High",
  },
];

const severityStyles = {
  High: "bg-red-100 text-red-700 border border-red-300",
  Medium: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  Low: "bg-green-100 text-green-700 border border-green-300",
};

export default function CurrentProblems() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "High", "Medium"];

  const filtered =
    activeFilter === "All"
      ? problems
      : problems.filter((p) => p.severity === activeFilter);

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔴</span>
          <h2
            className="text-4xl font-extrabold tracking-tight text-red-400"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Current Problems
          </h2>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          These are the real, ongoing issues faced by students every day. Acknowledging
          them is the first step toward meaningful change.
        </p>

        {/* Stats bar */}
        <div className="flex gap-6 mt-6">
          <div className="bg-red-900/30 border border-red-800 rounded-xl px-5 py-3 text-center">
            <p className="text-2xl font-bold text-red-400">{problems.length}</p>
            <p className="text-xs text-gray-400 mt-1">Total Issues</p>
          </div>
          <div className="bg-red-900/30 border border-red-800 rounded-xl px-5 py-3 text-center">
            <p className="text-2xl font-bold text-red-400">
              {problems.filter((p) => p.severity === "High").length}
            </p>
            <p className="text-xs text-gray-400 mt-1">High Severity</p>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-800 rounded-xl px-5 py-3 text-center">
            <p className="text-2xl font-bold text-yellow-400">
              {problems.filter((p) => p.severity === "Medium").length}
            </p>
            <p className="text-xs text-gray-400 mt-1">Medium Severity</p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-4xl mx-auto flex gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === f
                ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Problem Cards Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 group"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                  {item.area}
                </h3>
              </div>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${severityStyles[item.severity]}`}
              >
                {item.severity}
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-800 mb-3" />

            {/* Problem Text */}
            <p className="text-gray-400 text-sm leading-relaxed">{item.problem}</p>

            {/* Bottom accent */}
            <div className="mt-4 w-8 h-1 bg-red-600 rounded-full group-hover:w-16 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
