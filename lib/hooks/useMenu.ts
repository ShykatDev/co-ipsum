"use client";

import { useContext } from "react";
import { MenuContext } from "../context";

export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error("useMenu must be used inside a MenuProvider");
  }
  return ctx;
}
