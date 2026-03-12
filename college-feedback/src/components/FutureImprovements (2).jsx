import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { priorityDot } from "../data/collegeData.jsx";

export default function FutureImprovements({ improvements, collegeId }) {
  const { dark } = useTheme();
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={`py-14 border-t ${dark ? "border-gray-800" : "border-gray-100"}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">🟡</span>
        <h2
          className="text-3xl font-black text-yellow-500"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Future Improvements
        </h2>
      </div>
      <p className={`mb-6 max-w-xl text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
        What needs to be done — click a card to read more.
      </p>

      {/* Priority Legend */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {Object.entries(priorityDot).map(([label, dot]) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${dot}`} />
            <span className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>{label}</span>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {improvements.map((item, i) => {
          const key = `${collegeId}-${i}`;
          const isOpen = expanded === key;

          return (
            <div
              key={key}
              onClick={() => setExpanded(isOpen ? null : key)}
              className={`rounded-2xl p-5 border cursor-pointer transition-all duration-300
                ${isOpen
                  ? `border-yellow-500 shadow-lg scale-[1.02] ${dark ? "bg-gray-900" : "bg-yellow-50"}`
                  : dark
                  ? "bg-gray-900 border-gray-800 hover:border-yellow-700"
                  : "bg-white border-gray-200 hover:border-yellow-400"
                }`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-2xl">{item.icon}</span>
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold
                  ${dark ? "bg-gray-800" : "bg-gray-100"}`}
                >
                  <div className={`w-2 h-2 rounded-full ${priorityDot[item.priority]}`} />
                  <span className={dark ? "text-gray-400" : "text-gray-600"}>{item.priority}</span>
                </div>
              </div>

              <h3 className={`font-bold text-sm mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
                {item.title}
              </h3>

              {/* Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className={`h-px my-2 ${dark ? "bg-gray-800" : "bg-gray-200"}`} />
                <p className={`text-xs leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
                  {item.desc}
                </p>
              </div>

              <p className={`text-xs mt-2 ${dark ? "text-gray-600" : "text-gray-400"}`}>
                {isOpen ? "▲ Collapse" : "▼ Read more"}
              </p>
              <div
                className={`mt-2 h-1 rounded-full transition-all duration-300
                  ${priorityDot[item.priority]} ${isOpen ? "w-full" : "w-8"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
