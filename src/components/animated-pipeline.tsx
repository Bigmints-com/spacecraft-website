"use client";

import { useEffect, useRef, useState } from "react";

/* ── Mini SVG screen illustrations ── */

function BacklogScreen({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="6" width="40" height="36" rx="3" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <rect x="4" y="6" width="40" height="8" rx="3" fill={color} opacity="0.08" />
      <circle cx="9" cy="10" r="1.2" fill={color} opacity="0.4" />
      <circle cx="13" cy="10" r="1.2" fill={color} opacity="0.4" />
      <circle cx="17" cy="10" r="1.2" fill={color} opacity="0.4" />
      <rect x="9" y="18" width="20" height="3" rx="1.5" fill={color} opacity="0.5" />
      <rect x="9" y="24" width="16" height="3" rx="1.5" fill={color} opacity="0.3" />
      <rect x="9" y="30" width="24" height="3" rx="1.5" fill={color} opacity="0.2" />
      <rect x="9" y="36" width="12" height="3" rx="1.5" fill={color} opacity="0.15" />
      <rect x="32" y="18" width="8" height="3" rx="1.5" fill={color} opacity="0.15" />
      <rect x="32" y="24" width="8" height="3" rx="1.5" fill={color} opacity="0.1" />
    </svg>
  );
}

function UserFlowScreen({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="6" width="40" height="36" rx="3" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <rect x="10" y="12" width="10" height="7" rx="2" fill={color} opacity="0.3" />
      <rect x="28" y="12" width="10" height="7" rx="2" fill={color} opacity="0.3" />
      <rect x="10" y="30" width="10" height="7" rx="2" fill={color} opacity="0.2" />
      <rect x="28" y="30" width="10" height="7" rx="2" fill={color} opacity="0.2" />
      <polygon points="24,21 28,25 24,29 20,25" fill={color} opacity="0.25" />
      <line x1="20" y1="15.5" x2="28" y2="15.5" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="15" y1="19" x2="15" y2="30" stroke={color} strokeWidth="1" opacity="0.2" />
      <line x1="33" y1="19" x2="33" y2="30" stroke={color} strokeWidth="1" opacity="0.2" />
      <line x1="24" y1="29" x2="28" y2="33.5" stroke={color} strokeWidth="1" opacity="0.2" />
      <line x1="24" y1="29" x2="20" y2="33.5" stroke={color} strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

function FigmaScreen({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="6" width="40" height="36" rx="3" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <rect x="8" y="10" width="32" height="4" rx="1" fill={color} opacity="0.1" />
      <rect x="10" y="11" width="8" height="2" rx="1" fill={color} opacity="0.3" />
      <circle cx="36" cy="12" r="1.5" fill={color} opacity="0.2" />
      <rect x="8" y="17" width="32" height="10" rx="2" fill={color} opacity="0.12" />
      <rect x="12" y="19" width="14" height="2" rx="1" fill={color} opacity="0.4" />
      <rect x="12" y="23" width="10" height="2" rx="1" fill={color} opacity="0.2" />
      <rect x="8" y="30" width="9" height="9" rx="1.5" fill={color} opacity="0.15" />
      <rect x="19.5" y="30" width="9" height="9" rx="1.5" fill={color} opacity="0.15" />
      <rect x="31" y="30" width="9" height="9" rx="1.5" fill={color} opacity="0.15" />
    </svg>
  );
}

function PrototypeScreen({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="6" width="40" height="36" rx="3" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <rect x="4" y="6" width="40" height="8" rx="3" fill={color} opacity="0.08" />
      <rect x="9" y="9" width="20" height="3" rx="1.5" fill={color} opacity="0.12" />
      <rect x="8" y="17" width="14" height="3" rx="1" fill={color} opacity="0.4" />
      <rect x="8" y="22" width="10" height="2" rx="1" fill={color} opacity="0.2" />
      <rect x="8" y="27" width="22" height="4" rx="2" stroke={color} strokeWidth="1" opacity="0.3" />
      <rect x="10" y="28.5" width="8" height="1" rx="0.5" fill={color} opacity="0.2" />
      <rect x="8" y="33" width="12" height="4" rx="2" fill={color} opacity="0.5" />
      <rect x="10" y="34.5" width="8" height="1" rx="0.5" fill="white" opacity="0.6" />
      <rect x="33" y="17" width="7" height="20" rx="1.5" stroke={color} strokeWidth="0.8" opacity="0.2" />
      <rect x="34" y="19" width="5" height="1.5" rx="0.75" fill={color} opacity="0.3" />
      <rect x="34" y="22" width="5" height="1.5" rx="0.75" fill={color} opacity="0.2" />
      <rect x="34" y="25" width="5" height="1.5" rx="0.75" fill={color} opacity="0.15" />
      <polygon points="25,30 25,37 28,34" fill={color} opacity="0.6" />
    </svg>
  );
}

/* ── Node Component ── */
function PipelineNode({
  title,
  desc,
  icon,
  color = "white",
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color?: "white" | "primary" | "accent";
}) {
  const isPrimary = color === "primary";
  const isAccent = color === "accent";

  const colorClass = isPrimary
    ? "border-primary/30 shadow-[0_0_24px_rgba(45,170,184,0.15)] bg-primary/5"
    : isAccent
    ? "border-accent/30 shadow-[0_0_24px_rgba(249,161,28,0.15)] bg-accent/5"
    : "border-white/20 bg-white/[0.03]";

  return (
    <div className="flex flex-col items-center text-center w-full px-2 group cursor-default">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border p-2.5 sm:p-3 flex items-center justify-center mb-4 transition-all duration-500 hover:scale-105 ${colorClass}`}
      >
        {icon}
      </div>
      <h3
        className={`text-sm sm:text-base font-bold mb-1 ${
          isPrimary ? "text-primary" : isAccent ? "text-accent" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug max-w-[140px]">
        {desc}
      </p>
    </div>
  );
}

export default function AnimatedPipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Two Powerful{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Outcomes
            </span>
          </h2>
          <p className="text-base text-muted-foreground">
            A single unified workflow that branches into exactly what your team needs.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* ── DESKTOP FLOW (md and up) ── */}
          <div className="hidden md:flex items-center justify-center max-w-5xl mx-auto w-full px-4">
            
            {/* 1. Backlog */}
            <div className="w-48 z-10 shrink-0">
              <PipelineNode
                title="Backlog"
                desc="Connect your product backlog"
                icon={<BacklogScreen color="#ffffff" />}
                color="white"
              />
            </div>

            {/* Line straight */}
            <div className="flex-1 -mx-8 relative z-0 h-24 flex items-center">
              <div className="absolute left-[24px] right-[-4px] h-[2px] bg-white/10" />
              {/* Arrow */}
              <svg width="12" height="12" className="absolute right-[-16px] top-1/2 -translate-y-1/2 text-white/30" viewBox="0 0 10 10" fill="currentColor">
                <path d="M0,0 L10,5 L0,10Z" />
              </svg>
            </div>

            {/* 2. User Flows */}
            <div className="w-48 z-10 shrink-0">
              <PipelineNode
                title="User Flows"
                desc="Generate and verify user flows"
                icon={<UserFlowScreen color="#ffffff" />}
                color="white"
              />
            </div>

            {/* Branching SVG */}
            <div className="flex-1 -mx-8 h-[320px] relative z-0">
              <svg className="absolute inset-y-0 left-[24px] w-[calc(100%-20px)] h-full" viewBox="0 0 100 320" preserveAspectRatio="none">
                {/* Top branch to Figma */}
                <path
                  d="M 0,160 C 50,160 50,60 100,60"
                  fill="none"
                  stroke="#2DAAB8"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Bottom branch to Prototype */}
                <path
                  d="M 0,160 C 50,160 50,260 100,260"
                  fill="none"
                  stroke="#F9A11C"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              {/* Top arrow */}
              <svg width="12" height="12" className="absolute right-[-16px] top-[60px] -translate-y-1/2 text-primary z-10" viewBox="0 0 10 10" fill="currentColor">
                <path d="M0,0 L10,5 L0,10Z" />
              </svg>
              {/* Bottom arrow */}
              <svg width="12" height="12" className="absolute right-[-16px] top-[260px] -translate-y-1/2 text-accent z-10" viewBox="0 0 10 10" fill="currentColor">
                <path d="M0,0 L10,5 L0,10Z" />
              </svg>
            </div>

            {/* 3. Outcomes Stacked */}
            <div className="w-48 z-10 flex flex-col justify-between h-[320px] shrink-0">
              <div className="flex items-center justify-center h-[120px]">
                <PipelineNode
                  title="Figma Designs"
                  desc="High-fidelity screens for designers"
                  icon={<FigmaScreen color="#2DAAB8" />}
                  color="primary"
                />
              </div>
              <div className="flex items-center justify-center h-[120px]">
                <PipelineNode
                  title="Coded Prototype"
                  desc="Interactive web app with mock data"
                  icon={<PrototypeScreen color="#F9A11C" />}
                  color="accent"
                />
              </div>
            </div>

          </div>

          {/* ── MOBILE FLOW (below md) ── */}
          <div className="flex md:hidden flex-col items-center max-w-sm mx-auto w-full px-4 pt-4">
            
            <PipelineNode
              title="Backlog"
              desc="Connect your backlog"
              icon={<BacklogScreen color="#ffffff" />}
              color="white"
            />

            <div className="h-10 border-l-[2px] border-white/10 my-2 relative">
              <svg width="10" height="10" className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-white/30 rotate-90" viewBox="0 0 10 10" fill="currentColor">
                <path d="M0,0 L10,5 L0,10Z" />
              </svg>
            </div>

            <PipelineNode
              title="User Flows"
              desc="Generate and verify"
              icon={<UserFlowScreen color="#ffffff" />}
              color="white"
            />

            {/* Mobile fork */}
            <div className="w-full relative mt-6 pt-16 flex justify-between gap-2">
              <svg className="absolute top-0 left-0 w-full h-[80px] -z-10" viewBox="0 0 100 80" preserveAspectRatio="none">
                <path
                  d="M 50,0 C 50,40 25,40 25,80"
                  fill="none"
                  stroke="#2DAAB8"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="animate-[flow_1.5s_linear_infinite]"
                />
                <path
                  d="M 50,0 C 50,40 75,40 75,80"
                  fill="none"
                  stroke="#F9A11C"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="animate-[flow_1.5s_linear_infinite]"
                />
              </svg>
              {/* Mobile Arrows */}
              <svg width="10" height="10" className="absolute top-[80px] left-[25%] -translate-x-1/2 -translate-y-1 text-primary rotate-90 z-10" viewBox="0 0 10 10" fill="currentColor">
                <path d="M0,0 L10,5 L0,10Z" />
              </svg>
              <svg width="10" height="10" className="absolute top-[80px] left-[75%] -translate-x-1/2 -translate-y-1 text-accent rotate-90 z-10" viewBox="0 0 10 10" fill="currentColor">
                <path d="M0,0 L10,5 L0,10Z" />
              </svg>

              <div className="w-1/2 flex justify-center">
                <PipelineNode
                  title="Figma"
                  desc="High-fidelity screens"
                  icon={<FigmaScreen color="#2DAAB8" />}
                  color="primary"
                />
              </div>
              <div className="w-1/2 flex justify-center">
                <PipelineNode
                  title="Prototype"
                  desc="Interactive web app"
                  icon={<PrototypeScreen color="#F9A11C" />}
                  color="accent"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          from {
            stroke-dashoffset: 12;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
