import { useTheme } from "../context/ThemeContext";
import { accentClasses } from "../data/collegeData.jsx";
import CurrentProblems from "../components/CurrentProblems";
import FutureImprovements from "../components/FutureImprovements";
import Guidelines from "../components/Guidelines";
import NextPageBtn from "../components/NextPageBtn";

export default function CollegePage({ college, nextPage, nextLabel }) {
  const { dark } = useTheme();
  const ac = accentClasses[college.accent];

  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>

      {/* ── Hero Banner ── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-10 max-w-5xl mx-auto left-0 right-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl">{college.emoji}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${ac.bg}`}>
              {college.short}
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-black text-white mb-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {college.name}
          </h1>
          <p className="text-gray-300 text-sm">
            📍 {college.location} &nbsp;·&nbsp; Est. {college.established}
          </p>
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="max-w-5xl mx-auto px-6">
        <CurrentProblems problems={college.problems} />
        <FutureImprovements improvements={college.improvements} collegeId={college.id} />
        <Guidelines guidelines={college.guidelines} />
      </div>

      <NextPageBtn to={nextPage} label={nextLabel} />
    </div>
  );
}
