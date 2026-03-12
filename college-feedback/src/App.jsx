import { ThemeProvider } from "./context/ThemeContext";
import { RouterProvider, useRouter } from "./context/RouterContext";
import { colleges } from "./data/collegeData.jsx";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CollegePage from "./pages/CollegePage";
import FeedbackPage from "./pages/FeedbackPage";

// ── Route config — maps page ID → college + next page ──
const collegeRoutes = [
  { id: "sethu",        nextPage: "saveetha-eng", nextLabel: "Next: Saveetha School of Engineering →" },
  { id: "saveetha-eng", nextPage: "saveetha-clg", nextLabel: "Next: Saveetha Engineering College →" },
  { id: "saveetha-clg", nextPage: "feedback",     nextLabel: "Submit Your Feedback →" },
];

function AppRoutes() {
  const { page } = useRouter();

  if (page === "home") return <HomePage />;
  if (page === "feedback") return <FeedbackPage />;

  const route = collegeRoutes.find((r) => r.id === page);
  const college = colleges.find((c) => c.id === page);

  if (route && college) {
    return (
      <CollegePage
        college={college}
        nextPage={route.nextPage}
        nextLabel={route.nextLabel}
      />
    );
  }

  // Fallback
  return <HomePage />;
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <Navbar />
        <AppRoutes />
      </RouterProvider>
    </ThemeProvider>
  );
}
