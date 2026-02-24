"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Users, TrendingDown, Clock } from "lucide-react";

const DESIGNER_COST_PER_DAY = 2500; // AED
const WORKING_DAYS_PER_MONTH = 22;
const SPACECRAFT_COST_PER_MONTH = 500; // AED
const EFFICIENCY_GAIN = 0.25; // 25% faster delivery

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const duration = 400;
    const steps = 24;
    const stepDuration = duration / steps;
    const startValue = displayValue;
    const diff = value - startValue;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setDisplayValue(Math.round(startValue + diff * eased));
      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span>{displayValue.toLocaleString()}{suffix}</span>;
}

export default function RoiCalculator() {
  const [designers, setDesigners] = useState(3);
  const [designerCost, setDesignerCost] = useState(DESIGNER_COST_PER_DAY);

  const monthlyCostWithout = designers * designerCost * WORKING_DAYS_PER_MONTH;
  const optimizedDesignerCost = Math.round(monthlyCostWithout * (1 - EFFICIENCY_GAIN));
  const monthlyCostWith = optimizedDesignerCost + SPACECRAFT_COST_PER_MONTH;
  const monthlySavings = monthlyCostWithout - monthlyCostWith;
  const savingsPercentage = monthlyCostWithout > 0 ? Math.round((monthlySavings / monthlyCostWithout) * 100) : 0;
  const daysSaved = Math.round(designers * WORKING_DAYS_PER_MONTH * EFFICIENCY_GAIN);

  return (
    <section className="py-16 lg:py-20 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Savings
            </span>
          </h2>
          <p className="text-base text-muted-foreground">
            See how much your team could save with Spacecraft.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Sliders — side by side on desktop */}
          <div className="grid gap-6 sm:grid-cols-2 mb-8">
            {/* Designer Count */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Designers</span>
                </div>
                <span className="text-2xl font-black text-primary tabular-nums">{designers}</span>
              </div>
              <Slider
                value={[designers]}
                onValueChange={(v) => setDesigners(v[0])}
                min={1}
                max={10}
                step={1}
                className="w-full [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:shadow-[0_0_10px_rgba(45,170,184,0.4)] [&_.relative]:bg-white/10 [&_[data-part=range]]:bg-primary"
              />
              <div className="flex justify-between mt-2 text-[11px] text-muted-foreground/60">
                <span>1</span><span>10</span>
              </div>
            </div>

            {/* Cost per Designer */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">Cost / Day</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-accent tabular-nums">{designerCost.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground">AED</span>
                </div>
              </div>
              <Slider
                value={[designerCost]}
                onValueChange={(v) => setDesignerCost(v[0])}
                min={500}
                max={5000}
                step={100}
                className="w-full [&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:shadow-[0_0_10px_rgba(249,161,28,0.4)] [&_.relative]:bg-white/10 [&_[data-part=range]]:bg-accent"
              />
              <div className="flex justify-between mt-2 text-[11px] text-muted-foreground/60">
                <span>500</span><span>5,000</span>
              </div>
            </div>
          </div>

          {/* Results — compact row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">Current Cost</p>
              <p className="text-xl sm:text-2xl font-black text-white tabular-nums">
                <AnimatedNumber value={monthlyCostWithout} />
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">AED/mo</p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-4 text-center">
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">With Spacecraft</p>
              <p className="text-xl sm:text-2xl font-black text-primary tabular-nums">
                <AnimatedNumber value={monthlyCostWith} />
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">AED/mo</p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent/[0.03] p-4 text-center">
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">You Save</p>
              <p className="text-xl sm:text-2xl font-black text-accent tabular-nums">
                <AnimatedNumber value={monthlySavings} />
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">AED/mo</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2 flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> Efficiency
              </p>
              <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">25%</p>
              <p className="text-[11px] text-muted-foreground mt-1">{daysSaved} days saved</p>
            </div>
          </div>

          {/* Savings highlight */}
          <div className="rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 px-6 py-4 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,161,28,0.08),transparent)]" />
            <p className="relative text-sm text-muted-foreground">
              Spacecraft saves your team{" "}
              <span className="font-bold text-accent"><AnimatedNumber value={savingsPercentage} suffix="%" /></span>{" "}
              of current design spend
            </p>
            <p className="relative text-2xl sm:text-3xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent tabular-nums whitespace-nowrap ml-4">
              <AnimatedNumber value={monthlySavings} /> <span className="text-sm">AED</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
