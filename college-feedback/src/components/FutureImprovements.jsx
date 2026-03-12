// components/FutureImprovements.jsx
import { useState } from "react";

const improvements = [
  {
    id: 1,
    title: "Smart Classrooms",
    icon: "🖥️",
    description:
      "Install projectors, smart boards, and stable high-speed WiFi in every classroom for a modern learning environment.",
    category: "Infrastructure",
    priority: "Immediate",
  },
  {
    id: 2,
    title: "Updated Curriculum",
    icon: "📖",
    description:
      "Revamp the syllabus to align with current industry standards, adding hands-on projects and real-world case studies.",
    category: "Academics",
    priority: "Immediate",
  },
  {
    id: 3,
    title: "Student Grievance Portal",
    icon: "📬",
    description:
      "Build a formal digital complaint system where students can submit, track, and follow up on their issues transparently.",
    category: "Administration",
    priority: "Short-term",
  },
  {
    id: 4,
    title: "Better Canteen",
    icon: "🥗",
    description:
      "Introduce subsidized, hygienically prepared meals with a varied menu that caters to different dietary needs.",
    category: "Facilities",
    priority: "Short-term",
  },
  {
    id: 5,
    title: "Industry Tie-ups",
    icon: "🤝",
    description:
      "Partner with leading companies for internships, live projects, and regular guest lecture sessions by industry experts.",
    category: "Placement",
    priority: "Immediate",
  },
  {
    id: 6,
    title: "Mental Health Support",
    icon: "🧠",
    description:
      "Establish a dedicated counseling center with qualified counselors and run regular stress management and wellness programs.",
    category: "Wellness",
    priority: "Short-term",
  },
  {
    id: 7,
    title: "Sports & Extracurriculars",
    icon: "⚽",
    description:
      "Build and maintain proper sports grounds, fund student-led clubs, and organize annual inter-college cultural and sports events.",
    category: "Campus Life",
    priority: "Long-term",
  },
];

const priorityConfig = {
  Immediate: { dot: "bg-green-400", badge: "bg-green-900/50 text-green-400 border-green-700" },
  "Short-term": { dot: "bg-yellow-400", badge: "bg-yellow-900/50 text-yellow-400 border-yellow-700" },
  "Long-term": { dot: "bg-blue-400", badge: "bg-blue-900/50 text-blue-400 border-blue-700" },
};

export default function FutureImprovements() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟡</span>
          <h2
            className="text-4xl font-extrabold tracking-tight text-yellow-400"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Future Improvements
          </h2>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          A clear roadmap of what needs to change. These improvements, when implemented,
          will transform the student experience from the ground up.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6">
          {Object.entries(priorityConfig).map(([label, cfg]) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
              <span className="text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {improvements.map((item, index) => {
          const cfg = priorityConfig[item.priority];
          const isOpen = selected === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setSelected(isOpen ? null : item.id)}
              className={`bg-gray-900 border rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                isOpen
                  ? "border-yellow-500 shadow-lg shadow-yellow-900/30 scale-[1.02]"
                  : "border-gray-800 hover:border-yellow-700 hover:shadow-md hover:shadow-yellow-900/10"
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{item.icon}</span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${cfg.badge}`}
                >
                  {item.priority}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
                {item.category}
              </p>

              {/* Expandable description */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-full h-px bg-gray-800 mb-3" />
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Expand hint */}
              <div className="mt-3 flex items-center gap-1 text-xs text-gray-600">
                <span>{isOpen ? "▲ Collapse" : "▼ Read more"}</span>
              </div>

              {/* Bottom bar */}
              <div
                className={`mt-3 h-1 rounded-full transition-all duration-300 ${cfg.dot} ${
                  isOpen ? "w-full" : "w-8"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Summary Banner */}
      <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-yellow-900/30 to-gray-900 border border-yellow-800 rounded-2xl p-6">
        <p className="text-yellow-400 font-bold text-lg mb-1">📢 Our Demand</p>
        <p className="text-gray-300 text-sm leading-relaxed">
          We urge the college management to address all{" "}
          <strong className="text-white">{improvements.length} improvement areas</strong> above.
          Students are ready to collaborate — we just need action, accountability, and transparency.
        </p>
      </div>
    </section>
  );
}
