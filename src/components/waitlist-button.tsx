"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

declare global {
    interface Window {
        showWaitlistModal?: () => void;
    }
}

export default function WaitlistButton({ variant = "hero" }: { variant?: "hero" | "cta" | "nav" }) {
    const handleClick = () => {
        if (typeof window !== "undefined" && window.showWaitlistModal) {
            window.showWaitlistModal();
        }
    };

    if (variant === "nav") {
        return (
            <Button size="sm" className="shadow-lg shadow-primary/20" onClick={handleClick}>
                Get Started
            </Button>
        );
    }

    if (variant === "cta") {
        return (
            <Button
                size="lg"
                className="px-10 h-14 text-lg shadow-xl shadow-primary/20 transition-transform hover:scale-105"
                onClick={handleClick}
            >
                Get Started Free
            </Button>
        );
    }

    return (
        <Button
            size="lg"
            className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(45,170,184,0.3)] transition-all hover:scale-105 active:scale-95"
            onClick={handleClick}
        >
            Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    );
}
