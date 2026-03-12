
import { useState } from "react";

const managementGuidelines = [
  {
    id: 1,
    icon: "📅",
    title: "Monthly Feedback Reviews",
    detail:
      "Conduct structured monthly review meetings where student feedback reports are formally discussed and action items are assigned to responsible staff members.",
  },
  {
    id: 2,
    icon: "📢",
    title: "Transparent Decision Making",
    detail:
      "All major decisions affecting students must be communicated clearly via official notice boards, the college app, and the website within 24 hours of the decision.",
  },
  {
    id: 3,
    icon: "⏱️",
    title: "48-Hour Complaint Response",
    detail:
      "Every student complaint submitted through any official channel must receive an acknowledgment within 48 hours and a resolution update within 7 working days.",
  },
  {
    id: 4,
    icon: "📊",
    title: "Public Progress Reports",
    detail:
      "Publish quarterly reports showing which student suggestions were implemented, which are in progress, and which were rejected — with clear reasons for each decision.",
  },
];

const studentGuidelines = [
  {
    id: 1,
    icon: "✍️",
    title: "Submit Constructive Feedback",
    detail:
      "Always frame feedback around specific issues with suggested solutions. Avoid vague complaints — be precise about the problem, location, and impact on students.",
  },
  {
    id: 2,
    icon: "🤝",
    title: "Join Improvement Committees",
    detail:
      "Actively participate in student council, class representative meetings, and any college committees that directly influence academic and campus decisions.",
  },
  {
    id: 3,
    icon: "📋",
    title: "Follow Campus Norms",
    detail:
      "While raising issues, continue to respect campus rules and community norms. Change happens through constructive engagement, not disruption.",
  },
  {
    id: 4,
    icon: "🔁",
    title: "Follow Up on Your Feedback",
    detail:
      "Don't just submit and forget — track the status of your complaints, attend feedback review meetings, and escalate through proper channels if no action is taken.",
  },
];

export default function Guidelines() {
  const [activeTab, setActiveTab] = useState("management");

  const tabs = [
    { id: "management", label: "For Management", emoji: "🏛️" },
    { id: "students", label: "For Students", emoji: "🎓" },
  ];

  const activeData =
    activeTab === "management" ? managementGuidelines : studentGuidelines;

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟢</span>
          <h2
            className="text-4xl font-extrabold tracking-tight text-green-400"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Guidelines
          </h2>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          Improvement requires commitment from both sides. These guidelines establish
          clear responsibilities for management and students alike.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="inline-flex bg-gray-900 border border-gray-800 rounded-2xl p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-green-600 text-white shadow-lg shadow-green-700/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <span>{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Guideline Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {activeData.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-600 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300 group"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Number + Icon */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-5xl font-black text-gray-800 group-hover:text-green-900 transition-colors select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              {item.title}
            </h3>

            {/* Divider */}
            <div className="w-full h-px bg-gray-800 mb-3" />

            {/* Detail */}
            <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>

            {/* Bottom accent */}
            <div className="mt-4 w-8 h-1 bg-green-600 rounded-full group-hover:w-20 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Shared Responsibility Banner */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-900/20 border border-blue-800 rounded-2xl p-5">
          <p className="text-blue-400 font-bold mb-2">🏛️ Management's Pledge</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Commit to listening, acting, and reporting back. Students who give feedback
            deserve to see results — not silence.
          </p>
        </div>
        <div className="bg-green-900/20 border border-green-800 rounded-2xl p-5">
          <p className="text-green-400 font-bold mb-2">🎓 Student's Pledge</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Engage respectfully, follow up on submissions, and be the voice for students
            who are too hesitant to speak up themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
