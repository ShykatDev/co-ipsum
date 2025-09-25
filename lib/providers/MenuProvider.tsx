"use client";

import { ReactNode, useEffect, useState } from "react";
import { MenuContext } from "../context";

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // for SSR
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <MenuContext.Provider value={{ theme, setTheme, menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
