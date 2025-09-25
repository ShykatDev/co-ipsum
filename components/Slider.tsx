"use client";
import data from "@/constants/sliderData.json";
import { getMeasurements } from "@/lib/utils/index";
import type { SliderData } from "@/types";
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
  const headingRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return; // skip animations for motion-sensitive users

    const smoother = ScrollSmoother.create({
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

    // Cache measurements for performance
    const { baseScroll, extraSpace, viewport } = getMeasurements(panels);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: `+=${baseScroll + extraSpace + window.innerHeight}`,
      },
    });

    tl.to(horizontal, {
      x: -baseScroll,
      ease: "power2.inOut",
      duration: 1,
    });

    tl.to(
      lastPanel,
      {
        width: viewport,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    );

    tl.to(
      horizontal,
      {
        x: -(baseScroll + extraSpace),
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    const bottomSection = bottomRef.current;
    if (bottomSection) {
      gsap.from(bottomSection, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomSection,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    }

    const headingSection = headingRef.current;
    if (headingSection) {
      gsap.fromTo(
        headingSection,
        {
          y: 50,
          duration: 1,
          ease: "power2.out",
        },
        {
          y: 0,
        }
      );
    }

    // Cleanup on unmount
    return () => {
      tl.kill();
      smoother.kill();
    };
  }, []);

  return (
    <>
      <section
        aria-label="Horizontal product slider"
        ref={containerRef}
        className="h-screen overflow-hidden"
      >
        <div ref={horizontalRef} className="flex w-max">
          <div
            id="heading"
            role="group"
            aria-label="Slider Introduction"
            tabIndex={0}
            onFocus={(e) => {
              e.currentTarget.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="panel focus-style w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] xl:w-[50vw] flex-shrink-0 h-screen"
          >
            <div
              ref={headingRef}
              className="w-full pt-0 lg:pt-[20%] px-10 sm:pl-[10%] md:pl-[20%] h-full flex flex-col justify-center lg:justify-start "
            >
              <TextContent />
            </div>
          </div>

          {data.map((panel: SliderData, i) => (
            <div
              key={`slider-panel-${panel.id}`}
              role="group"
              aria-label={panel.title}
              className="panel w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[60vw] flex-shrink-0 flex items-center justify-center h-screen mr-6 md:mr-8 last:mr-0 last:w-[50vw] sm:last:w-[70vw] md:last:w-[50vw] lg:last:w-[60vw] focus:scale-105 focus-style"
            >
              <Image
                src={panel.imageUrl}
                alt={panel.title}
                width={1800}
                height={1440}
                quality={80}
                fetchPriority={i === 0 ? "high" : "auto"}
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 1800px"
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        tabIndex={0}
        onFocus={(e) => {
          e.currentTarget.scrollIntoView({
            behavior: "smooth",
          });
        }}
        aria-labelledby="slider-bottom-heading"
        className="w-full flex flex-col sm:items-end py-20 sm:py-[5%] md:py-[8%] px-10 sm:pr-[10%] md:pr-[20%] lg:pr-[10%] h-fit focus-style"
      >
        <div
          ref={bottomRef}
          className="w-full h-full flex flex-col items-start sm:items-end"
        >
          <TextContent
            title={
              <span id="slider-bottom-heading">
                Eros augue curabitur eu rutrum neque congue
              </span>
            }
            headingClassName="md:max-w-[560px]"
            breifClassName="md:max-w-[560px]"
          />
        </div>
      </section>
    </>
  );
}
