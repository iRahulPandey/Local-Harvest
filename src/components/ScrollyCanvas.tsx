"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";
import ScrollNavigation from "./ScrollNavigation";

interface ScrollyCanvasProps {
    frames: string[];
}

export default function ScrollyCanvas({ frames }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        if (frames.length === 0) return;

        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = new Array(frames.length);

        frames.forEach((src, index) => {
            const img = new Image();
            img.src = `/sequence/${src}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frames.length) {
                    setIsLoaded(true);
                }
            };
            loadedImages[index] = img;
        });

        setImages(loadedImages);
    }, [frames]);

    // Render logic
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const img = images[index];

        if (!canvas || !img) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Canvas dimensions
        const cw = canvas.width;
        const ch = canvas.height;

        // Image dimensions
        const iw = img.width;
        const ih = img.height;

        // Object-fit: cover logic
        const scale = Math.max(cw / iw, ch / ih);
        const scaledWidth = iw * scale;
        const scaledHeight = ih * scale;
        const x = (cw - scaledWidth) / 2;
        const y = (ch - scaledHeight) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
    };

    // Initial setup and resize
    useEffect(() => {
        if (!isLoaded || !canvasRef.current) return;

        const handleResize = () => {
            if (canvasRef.current) {
                // Set canvas internal resolution to match window size for sharpness
                // Optionally multiply by window.devicePixelRatio for retina
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;

                // Re-render current frame
                const currentProgress = scrollYProgress.get();
                const frameIndex = Math.min(
                    frames.length - 1,
                    Math.floor(currentProgress * frames.length)
                );
                renderFrame(frameIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size set

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, frames.length, scrollYProgress]); // Dependencies

    // Scroll listener
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || !images.length) return;

        const frameIndex = Math.min(
            frames.length - 1,
            Math.floor(latest * (frames.length - 1)) // Use length-1 to map 1.0 to last index
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div ref={containerRef} className="h-[800vh] relative bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />

                {/* Cinematic Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

                <Overlay scrollYProgress={scrollYProgress} />
                <ScrollNavigation />

                {/* Loading State */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-[#121212] z-50">
                        <span className="animate-pulse">Loading Harvest...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
