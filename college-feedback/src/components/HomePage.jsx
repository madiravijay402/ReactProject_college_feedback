import { useTheme } from "../context/ThemeContext";
import { useRouter } from "../context/RouterContext";
import { colleges, accentClasses } from "../data/collegeData.jsx";
import NextPageBtn from "../components/NextPageBtn";

export default function HomePage() {
  const { dark } = useTheme();
  const { navigate } = useRouter();

  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 ${dark ? "bg-gradient-to-br from-indigo-950 via-gray-950 to-gray-900" : "bg-gradient-to-br from-indigo-50 via-white to-blue-50"}`} />
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6
            ${dark ? "bg-indigo-900/50 text-indigo-300 border border-indigo-700" : "bg-indigo-100 text-indigo-700 border border-indigo-200"}`}
          >
            📍 Tamil Nadu, India
          </div>

          <h1
            className={`text-5xl md:text-6xl font-black leading-tight mb-6 ${dark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Feedback of{" "}
            <span className="text-indigo-500">Top Colleges</span>
            <br />of Tamil Nadu
          </h1>

          <p className={`text-xl leading-relaxed max-w-2xl mx-auto mb-10 ${dark ? "text-gray-400" : "text-gray-600"}`}>
            An honest, student-driven report — exposing real problems, demanding real change,
            and charting the path forward for engineering education in Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("sethu")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-indigo-500/40 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Explore Feedback →
            </button>
            <button
              onClick={() => navigate("feedback")}
              className={`px-8 py-4 rounded-xl font-bold border-2 transition-all duration-200 hover:scale-105 cursor-pointer
                ${dark ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white" : "border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-600"}`}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>

     
      <div className={`py-20 px-6 ${dark ? "bg-gray-950" : "bg-gray-50"}`}>
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-3xl font-black text-center mb-3 ${dark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Colleges Under Review
          </h2>
          <p className={`text-center mb-12 ${dark ? "text-gray-400" : "text-gray-500"}`}>
            Click any college to explore its detailed feedback report
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colleges.map((clg) => {
              const ac = accentClasses[clg.accent];
              return (
                <button
                  key={clg.id}
                  onClick={() => navigate(clg.id)}
                  className={`group rounded-2xl overflow-hidden border-2 text-left transition-all duration-300
                    hover:scale-105 hover:shadow-2xl cursor-pointer
                    ${dark ? `border-gray-800 bg-gray-900 hover:${ac.border}` : `border-gray-200 bg-white hover:${ac.border}`}`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={clg.image}
                      alt={clg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${ac.bg}`}>
                        {clg.short}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-2xl mb-2">{clg.emoji}</div>
                    <h3 className={`font-bold text-base mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
                      {clg.name}
                    </h3>
                    <p className={`text-xs mb-3 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                      📍 {clg.location} · Est. {clg.established}
                    </p>
                    <p className={`text-xs leading-relaxed ${dark ? "text-gray-500" : "text-gray-600"}`}>
                      {clg.tagline}
                    </p>
                    <div className={`mt-4 flex items-center gap-1 text-sm font-semibold ${ac.text}`}>
                      View Report
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

     
      <div className={`py-16 px-6 border-t ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"}`}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "3", label: "Colleges Reviewed" },
            { n: "20+", label: "Issues Identified" },
            { n: "15+", label: "Improvements Proposed" },
            { n: "100%", label: "Student Driven" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-black text-indigo-500 mb-1">{s.n}</p>
              <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <NextPageBtn to="sethu" label="Start with Sethu Institute →" />
    </div>
  );
}
