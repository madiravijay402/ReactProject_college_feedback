import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { severityStyle } from "../data/collegeData.jsx";

export default function CurrentProblems({ problems }) {
  const { dark } = useTheme();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? problems : problems.filter((p) => p.severity === filter);

  return (
    <div className="py-14">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">🔴</span>
        <h2
          className="text-3xl font-black text-red-500"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Current Problems
        </h2>
      </div>
      <p className={`mb-6 max-w-xl text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
        Honest issues reported by students — unfiltered and direct.
      </p>

      {/* Stats */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {[
          { label: "Total Issues", val: problems.length, color: "text-red-500" },
          { label: "High Severity", val: problems.filter((p) => p.severity === "High").length, color: "text-red-500" },
          { label: "Medium Severity", val: problems.filter((p) => p.severity === "Medium").length, color: "text-yellow-500" },
        ].map((s) => (
          <div
            key={s.label}
            className={`px-5 py-3 rounded-xl border text-center ${dark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}`}
          >
            <p className={`text-2xl font-black ${s.color}`}>{s.val}</p>
            <p className={`text-xs mt-0.5 ${dark ? "text-gray-400" : "text-gray-500"}`}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {["All", "High", "Medium"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer
              ${filter === f
                ? "bg-red-500 text-white"
                : dark
                ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <div
            key={item.area}
            className={`group rounded-2xl p-5 border transition-all duration-300 hover:shadow-lg
              ${dark
                ? "bg-gray-900 border-gray-800 hover:border-red-700"
                : "bg-white border-gray-200 hover:border-red-400"
              }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <h3
                  className={`font-bold transition-colors
                    ${dark ? "text-white group-hover:text-red-300" : "text-gray-900 group-hover:text-red-600"}`}
                >
                  {item.area}
                </h3>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${severityStyle[item.severity]}`}>
                {item.severity}
              </span>
            </div>
            <div className={`h-px mb-3 ${dark ? "bg-gray-800" : "bg-gray-100"}`} />
            <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {item.problem}
            </p>
            <div className="mt-3 w-8 h-1 bg-red-500 rounded-full group-hover:w-16 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
