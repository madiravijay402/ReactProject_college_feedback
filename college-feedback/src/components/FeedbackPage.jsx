import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { colleges } from "../data/collegeData.jsx";

export default function FeedbackPage() {
  const { dark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", college: "", category: "", rating: 0, remarks: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.college) e.college = "Please select a college";
    if (!form.remarks.trim()) e.remarks = "Remarks are required";
    if (form.rating === 0) e.rating = "Please select a rating";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", college: "", category: "", rating: 0, remarks: "" });
    setErrors({});
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2
    ${errors[field]
      ? "border-red-500 focus:ring-red-400"
      : dark
      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/30"
      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-400 focus:ring-indigo-400/20"
    }`;

  const update = (field, val) => {
    setForm({ ...form, [field]: val });
    setErrors({ ...errors, [field]: "" });
  };

  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${dark ? "bg-gray-950" : "bg-gray-50"}`}>

      {/* Hero */}
      <div className={`py-14 px-6 text-center ${dark ? "bg-gradient-to-b from-indigo-950 to-gray-950" : "bg-gradient-to-b from-indigo-50 to-gray-50"}`}>
        <span className="text-5xl mb-4 block">📝</span>
        <h1
          className={`text-4xl font-black mb-3 ${dark ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Share Your Feedback
        </h1>
        <p className={`text-lg max-w-lg mx-auto ${dark ? "text-gray-400" : "text-gray-500"}`}>
          Your voice matters. Help us build better colleges for every student in Tamil Nadu.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* ── Success State ── */}
        {submitted ? (
          <div className={`rounded-3xl p-10 text-center border shadow-xl
            ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className={`text-2xl font-black mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
              Thank You, {form.name}!
            </h2>
            <p className={`text-base mb-6 ${dark ? "text-gray-400" : "text-gray-500"}`}>
              Your feedback has been submitted. Together we make education better.
            </p>
            <button
              onClick={handleReset}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer"
            >
              Submit Another
            </button>
          </div>

        ) : (
          /* ── Form ── */
          <div className={`rounded-3xl p-8 border shadow-xl
            ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}
          >
            {/* Name */}
            <div className="mb-5">
              <label className={`block text-sm font-semibold mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                👤 Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputCls("name")}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className={`block text-sm font-semibold mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                ✉️ Email Address *
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls("email")}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* College */}
            <div className="mb-5">
              <label className={`block text-sm font-semibold mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                🏛️ College *
              </label>
              <select
                value={form.college}
                onChange={(e) => update("college", e.target.value)}
                className={inputCls("college")}
              >
                <option value="">Select your college</option>
                {colleges.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college}</p>}
            </div>

            {/* Category */}
            <div className="mb-5">
              <label className={`block text-sm font-semibold mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                📂 Category (optional)
              </label>
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className={inputCls("category")}
              >
                <option value="">Select a category</option>
                {["Infrastructure", "Academics", "Administration", "Canteen", "Placement", "Technology", "Sports", "Other"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Star Rating */}
            <div className="mb-5">
              <label className={`block text-sm font-semibold mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                ⭐ Overall Rating *
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => update("rating", n)}
                    className={`w-11 h-11 rounded-xl text-xl transition-all cursor-pointer
                      ${form.rating >= n
                        ? "bg-yellow-400 text-white scale-110 shadow-md"
                        : dark
                        ? "bg-gray-800 text-gray-500 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                  >
                    ★
                  </button>
                ))}
                {form.rating > 0 && (
                  <span className={`ml-2 text-sm font-medium ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][form.rating]}
                  </span>
                )}
              </div>
              {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
            </div>

            {/* Remarks */}
            <div className="mb-8">
              <label className={`block text-sm font-semibold mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                💬 Remarks *
              </label>
              <textarea
                rows={5}
                placeholder="Share your detailed feedback, suggestions, or concerns..."
                value={form.remarks}
                onChange={(e) => update("remarks", e.target.value)}
                className={`${inputCls("remarks")} resize-none`}
              />
              <div className="flex justify-between mt-1">
                {errors.remarks
                  ? <p className="text-red-500 text-xs">{errors.remarks}</p>
                  : <span />
                }
                <p className={`text-xs ${dark ? "text-gray-600" : "text-gray-400"}`}>
                  {form.remarks.length}/500
                </p>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold text-base
                transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              Submit Feedback →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
