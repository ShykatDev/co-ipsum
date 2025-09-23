"use client";
import { sliderData } from "@/constants/sliderData";
import { getMeasurements } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import TextContent from "./TextContent";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    if (!container || !horizontal) return;

    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    if (panels.length === 0) return;

    const lastPanel = panels[panels.length - 1];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => {
          const { baseScroll, delta } = getMeasurements(panels);
          return `+=${baseScroll + delta + window.innerHeight}`;
        },
      },
    });

    tl.to(horizontal, {
      x: () => -getMeasurements(panels).baseScroll,
      ease: "power2.inOut",
      duration: 1,
    });

    tl.to(
      lastPanel,
      {
        width: () => `${getMeasurements(panels).viewport}px`,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    );

    tl.to(
      horizontal,
      {
        x: () =>
          -(getMeasurements(panels).baseScroll + getMeasurements(panels).delta),
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );
  }, []);

  return (
    <>
      <div ref={containerRef} className="h-screen overflow-hidden">
        <div ref={horizontalRef} className="flex w-max">
          <div
            id="heading"
            className="panel w-screen sm:w-[80vw] md:[70vw] lg:w-[50vw] flex-shrink-0 h-screen bg-[#F2F0ED]"
          >
            <div className="w-full lg:w-4/5 pt-20 sm:pt-0 lg:pt-[20%] px-10 sm:pl-[10%] md:pl-[20%] h-full flex flex-col justify-center lg:justify-start ">
              <TextContent />
            </div>
          </div>

          {sliderData.map((panel, i) => (
            <div
              key={i}
              className="panel w-[90vw] sm:w-[70vw] lg:w-[60vw] flex-shrink-0 flex items-center justify-center h-screen mr-6 md:mr-8 last:mr-0"
            >
              <Image
                src={panel.imageUrl}
                alt={panel.title}
                width={2000}
                height={2000}
                quality={100}
                fetchPriority="high"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-auto flex sm:justify-end bg-white relative">
        <div className="w-full lg:w-2/4 py-20 sm:py-[5%] md:py-[8%] px-10 sm:pr-[10%] md:pr-[20%] h-fit">
          <TextContent
            title={
              <span>
                Eros augue curabitur eu <br /> rutrum neque congue
              </span>
            }
          />
        </div>
      </div>
    </>
  );
}
