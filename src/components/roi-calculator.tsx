"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, TrendingDown, Sparkles, ArrowRight, Clock } from "lucide-react";

const DESIGNER_COST_PER_DAY = 2500; // AED
const WORKING_DAYS_PER_MONTH = 22;
const SPACECRAFT_COST_PER_MONTH = 500; // AED
const EFFICIENCY_GAIN = 0.25; // 25% faster delivery with Spacecraft

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const duration = 500;
    const steps = 30;
    const stepDuration = duration / steps;
    const startValue = displayValue;
    const diff = value - startValue;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(startValue + diff * eased));
      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
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
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Savings
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much your team could save by replacing manual design workflows with Spacecraft.
          </p>
        </div>

        {/* Calculator */}
        <div className="mx-auto max-w-4xl">
          {/* Inputs Card */}
          <Card className="border-white/10 bg-white/[0.03] shadow-none backdrop-blur-sm mb-10">
            <CardContent className="pt-8 pb-8 px-8 space-y-8">
              {/* Designer Count */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <label className="text-base font-semibold text-white">
                      Number of Designers
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-black text-primary tabular-nums">
                      {designers}
                    </span>
                    <span className="text-sm text-muted-foreground mt-1">
                      designer{designers !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <Slider
                  value={[designers]}
                  onValueChange={(v) => setDesigners(v[0])}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:shadow-[0_0_12px_rgba(45,170,184,0.4)] [&_.relative]:bg-white/10 [&_[data-part=range]]:bg-gradient-to-r [&_[data-part=range]]:from-primary [&_[data-part=range]]:to-accent"
                />
                <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5" />

              {/* Cost per Designer */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                      <TrendingDown className="h-5 w-5" />
                    </div>
                    <label className="text-base font-semibold text-white">
                      Cost per Designer / Day
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-black text-accent tabular-nums">
                      {designerCost.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground mt-1">AED</span>
                  </div>
                </div>
                <Slider
                  value={[designerCost]}
                  onValueChange={(v) => setDesignerCost(v[0])}
                  min={500}
                  max={5000}
                  step={100}
                  className="w-full [&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:shadow-[0_0_12px_rgba(249,161,28,0.4)] [&_.relative]:bg-white/10 [&_[data-part=range]]:bg-gradient-to-r [&_[data-part=range]]:from-accent [&_[data-part=range]]:to-primary"
                />
                <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                  <span>500</span>
                  <span>2,500</span>
                  <span>5,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Grid */}
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Current Cost */}
            <Card className="border-white/10 bg-white/[0.03] shadow-none backdrop-blur-sm group hover:border-destructive/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-red-400" />
                  Current Monthly Cost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl sm:text-4xl font-black text-white tabular-nums leading-tight">
                  <AnimatedNumber value={monthlyCostWithout} prefix="" suffix="" />
                  <span className="text-base font-normal text-muted-foreground ml-2">AED</span>
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  {designers} designer{designers !== 1 ? "s" : ""} × {designerCost.toLocaleString()} AED/day × {WORKING_DAYS_PER_MONTH} days
                </p>
              </CardContent>
            </Card>

            {/* Arrow indicator (desktop only) */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Switch to</span>
                <span className="text-sm font-bold text-primary">Spacecraft</span>
              </div>
            </div>

            {/* Spacecraft Cost */}
            <Card className="border-primary/20 bg-primary/[0.03] shadow-none backdrop-blur-sm group hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full" />
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary fill-primary/20" />
                  With Spacecraft
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl sm:text-4xl font-black text-primary tabular-nums leading-tight">
                  <AnimatedNumber value={monthlyCostWith} prefix="" suffix="" />
                  <span className="text-base font-normal text-muted-foreground ml-2">AED/mo</span>
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  Optimized team + 500 AED tool
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Savings Banner */}
          <div className="mt-8 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 via-accent/10 to-primary/5 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,161,28,0.1),transparent)]" />
            <div className="relative grid gap-8 sm:grid-cols-2">
              {/* Cost Savings */}
              <div className="text-center">
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
                  Potential Monthly Savings
                </p>
                <p className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent tabular-nums">
                  <AnimatedNumber value={monthlySavings} prefix="" suffix="" />
                  <span className="text-2xl ml-2">AED</span>
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  That&apos;s{" "}
                  <span className="font-bold text-accent">
                    <AnimatedNumber value={savingsPercentage} suffix="%" />
                  </span>{" "}
                  less than your current spend
                </p>
              </div>

              {/* Efficiency Savings */}
              <div className="text-center sm:border-l sm:border-accent/10 sm:pl-8">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  Efficiency Gain
                </p>
                <p className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  25%
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Faster delivery — save{" "}
                  <span className="font-bold text-primary">
                    <AnimatedNumber value={daysSaved} suffix="" />
                  </span>{" "}
                  designer-days/month
                </p>
              </div>
            </div>
          </div>

          {/* Fine print */}
          <p className="text-center text-xs text-muted-foreground/60 mt-6">
            Based on designer rate of {designerCost.toLocaleString()} AED/day, {WORKING_DAYS_PER_MONTH} working days/month.
          </p>
        </div>
      </div>
    </section>
  );
}
