import { createContext } from "react";

interface MenuContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export { MenuContext };
