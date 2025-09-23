"use client";
import { useState } from "react";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <button
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      role="button"
      className="relative w-[50px] h-[12px] flex justify-center items-center cursor-pointer bg-transparent"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {/* Top line */}
      <svg
        width="50"
        height="2"
        viewBox="0 0 50 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute transition-all duration-300 ${
          menuOpen ? "rotate-45 top-[5px]" : "top-0"
        } mix-blend-difference`}
      >
        <rect width="50" height="2" fill="white" />
      </svg>

      {/* Bottom line */}
      <svg
        width="50"
        height="2"
        viewBox="0 0 50 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute transition-all duration-300 ${
          menuOpen ? "-rotate-45 top-[5px]" : "top-[10px]"
        } mix-blend-difference`}
      >
        <rect width="50" height="2" fill="white" />
      </svg>
    </button>
  );
};

export default Hamburger;
