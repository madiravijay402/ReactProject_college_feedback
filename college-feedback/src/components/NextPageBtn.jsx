import { useTheme } from "../context/ThemeContext";
import { useRouter } from "../context/RouterContext";

export default function NextPageBtn({ to, label }) {
  const { dark } = useTheme();
  const { navigate } = useRouter();

  return (
    <div className={`flex justify-center py-16 ${dark ? "bg-gray-950" : "bg-gray-50"}`}>
      <button
        onClick={() => navigate(to)}
        className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white
          px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-indigo-500/30
          hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        {label || "Next Page"}
        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </button>
    </div>
  );
}
