import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Guidelines({ guidelines }) {
  const { dark } = useTheme();
  const [tab, setTab] = useState("management");

  const activeList = guidelines[tab];

  return (
    <div className={`py-14 border-t ${dark ? "border-gray-800" : "border-gray-100"}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">🟢</span>
        <h2
          className="text-3xl font-black text-green-500"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Guidelines
        </h2>
      </div>
      <p className={`mb-6 max-w-xl text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
        Clear responsibilities for both management and students.
      </p>

      {/* Tab Switcher */}
      <div
        className={`inline-flex rounded-xl p-1 gap-1 mb-8
          ${dark ? "bg-gray-900 border border-gray-800" : "bg-gray-100"}`}
      >
        {[["management", "🏛️ Management"], ["students", "🎓 Students"]].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer
              ${tab === id
                ? "bg-green-600 text-white shadow-md"
                : dark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:bg-white"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Guideline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeList.map((item, i) => (
          <div
            key={i}
            className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300
              ${dark
                ? "bg-gray-900 border-gray-800 hover:border-green-700"
                : "bg-white border-gray-200 hover:border-green-400"
              }`}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white bg-green-600">
              {i + 1}
            </div>
            <p className={`text-sm leading-relaxed pt-1 ${dark ? "text-gray-300" : "text-gray-700"}`}>
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Pledge Banner */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`rounded-2xl p-5 border ${dark ? "bg-blue-900/20 border-blue-800" : "bg-blue-50 border-blue-200"}`}>
          <p className="text-blue-500 font-bold mb-2">🏛️ Management's Pledge</p>
          <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
            Commit to listening, acting, and reporting back. Students who give feedback deserve results — not silence.
          </p>
        </div>
        <div className={`rounded-2xl p-5 border ${dark ? "bg-green-900/20 border-green-800" : "bg-green-50 border-green-200"}`}>
          <p className="text-green-500 font-bold mb-2">🎓 Student's Pledge</p>
          <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
            Engage respectfully, follow up on submissions, and be the voice for students too hesitant to speak up.
          </p>
        </div>
      </div>
    </div>
  );
}
