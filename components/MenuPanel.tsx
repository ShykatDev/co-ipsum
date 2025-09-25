"use client";
import { useMenu } from "@/lib/hooks/useMenu";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

const MenuPanel = () => {
  const { menuOpen, setMenuOpen, theme, setTheme } = useMenu();
  return (
    <div
      className={cn(
        "text-amber-50 fixed bottom-0 md:top-0 right-4 rounded-t-2xl md:rounded-t-none md:rounded-b-2xl sm:right-8 md:right-14 z-40 bg-black/50 md:bg-black/30 border-2 border-white/5 border-b-0 w-fit h-fit flex flex-col gap-y-1 md:pt-18 transition-all duration-300 ease-in-out backdrop-blur-2xl divide-y divide-white/10",
        menuOpen ? "translate-y-0" : "translate-y-full md:-translate-y-full"
      )}
    >
      <div className="p-1.5 w-full">
        <button
          aria-label="Theme toggler"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
            setMenuOpen(false);
          }}
          className="bg-black/30 w-full py-2 px-4 rounded-xl cursor-pointer flex items-center gap-4"
        >
          {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </div>
  );
};

export default MenuPanel;
