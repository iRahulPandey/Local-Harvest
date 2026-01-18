"use client";

import { motion, useScroll, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const SECTIONS = [
    { id: 1, label: "Intro", target: 0.05 },
    { id: 2, label: "Farmers", target: 0.22 },
    { id: 3, label: "Values", target: 0.39 },
    { id: 4, label: "Direct", target: 0.59 },
    { id: 5, label: "Table", target: 0.79 },
];

export default function ScrollNavigation() {
    const [activeSection, setActiveSection] = useState(1);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const unsub = scrollYProgress.on("change", (latest) => {
            // Determine active section based on scroll position
            if (latest < 0.15) setActiveSection(1);
            else if (latest < 0.35) setActiveSection(2);
            else if (latest < 0.55) setActiveSection(3);
            else if (latest < 0.75) setActiveSection(4);
            else setActiveSection(5);
        });
        return () => unsub();
    }, [scrollYProgress]);

    const scrollToSection = (targetProgress: number) => {
        // Calculate total scrollable height
        // We assume the parent container is 800vh, so scrollable area is approx 700vh (window height)
        // But exact pixel calculation is safer: document.body.scrollHeight - window.innerHeight
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetY = totalHeight * targetProgress;

        window.scrollTo({
            top: targetY,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-end">
            {SECTIONS.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.target)}
                    className="group flex items-center gap-4 focus:outline-none"
                >
                    {/* Label (slides in on hover or active) */}
                    <span
                        className={`text-sm font-medium tracking-wider transition-all duration-300 ${activeSection === section.id
                            ? "text-white opacity-100 translate-x-0"
                            : "text-gray-400 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                    >
                        {section.label}
                    </span>

                    {/* Indicator Dot */}
                    <div className="relative flex items-center justify-center w-4 h-4">
                        {/* Active Ring */}
                        {activeSection === section.id && (
                            <motion.div
                                layoutId="activeRing"
                                className="absolute inset-0 rounded-full border border-green-400"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}

                        {/* Center Dot */}
                        <div
                            className={`rounded-full transition-all duration-300 ${activeSection === section.id
                                ? "w-1.5 h-1.5 bg-green-400"
                                : "w-1 h-1 bg-white/30 group-hover:bg-white group-hover:scale-125"
                                }`}
                        />
                    </div>
                </button>
            ))}

            {/* Progress Line */}
            <div className="absolute right-[7px] top-0 bottom-0 w-[1px] bg-white/10 -z-10 rounded-full">
                {/* We could add a progress fill bar here if desired */}
            </div>
        </div>
    );
}
