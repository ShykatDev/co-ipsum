import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMeasurements(panels: HTMLElement[]) {
  const viewport = window.innerWidth;

  const lastPanel: HTMLElement = panels[panels.length - 1];

  // total width of all panels (including margins)
  let wrapperWidth = 0;

  panels.forEach((p, i) => {
    wrapperWidth += p.offsetWidth;

    if (i !== panels.length - 1) {
      const st = getComputedStyle(p);
      wrapperWidth += parseFloat(st.marginRight || "0") || 0;
    }
  });

  const baseScroll = wrapperWidth - viewport;
  const lastPanelWidth = lastPanel.offsetWidth;
  const extraSpace = viewport - lastPanelWidth;

  return { viewport, baseScroll, extraSpace };
}
