import { createContext, useContext, useState } from "react";

const RouterContext = createContext();

export const useRouter = () => useContext(RouterContext);

export function RouterProvider({ children }) {
  const [page, setPage] = useState("home");

  const navigate = (to) => {
    setPage(to);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

