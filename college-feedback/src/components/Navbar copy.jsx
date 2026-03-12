import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "../context/RouterContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "sethu", label: "SIT" },
  { id: "saveetha-eng", label: "SSE" },
  { id: "saveetha-clg", label: "SEC" },
  { id: "feedback", label: "Feedback" },
];

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const { page, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md shadow-sm transition-colors duration-300
        ${dark ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className={`font-black text-lg tracking-tight ${dark ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: "'Georgia', serif" }}
        >
          🎓 TN<span className="text-indigo-500">Feedback</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer
                ${page === item.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : dark
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Dark/Light + Mobile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-200
              ${dark
                ? "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Hamburger */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-0.5 mb-1 last:mb-0 ${dark ? "bg-white" : "bg-gray-800"}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden px-4 pb-4 flex flex-col gap-1 ${dark ? "bg-gray-900" : "bg-white"}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { navigate(item.id); setMobileOpen(false); }}
              className={`text-left px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer
                ${page === item.id
                  ? "bg-indigo-600 text-white"
                  : dark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
