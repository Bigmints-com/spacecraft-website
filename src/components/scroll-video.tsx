"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate how far the element is through the viewport
            // When element center is at viewport center, progress = 0.5
            const elementCenter = rect.top + rect.height / 2;

            // Normalize: 0 when element enters viewport, 1 when it leaves
            const rawProgress = 1 - (elementCenter / viewportHeight);

            // Clamp between 0 and 1
            const progress = Math.max(0, Math.min(1, rawProgress));

            // Create a bell curve: scale peaks at progress=0.5 (element centered)
            // Using sin curve for smooth effect
            const bellProgress = Math.sin(progress * Math.PI);

            // Scale from 0.85 to 1.0
            const minScale = 0.85;
            const maxScale = 1.0;
            const scale = minScale + (maxScale - minScale) * bellProgress;

            container.style.transform = `scale(${scale})`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="mt-16 w-full px-4 sm:px-0">
            <div
                ref={containerRef}
                className="overflow-hidden rounded-2xl will-change-transform"
                style={{ transform: "scale(0.85)" }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto shadow-2xl shadow-primary/20"
                >
                    <source src="/spacecraft-final.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
