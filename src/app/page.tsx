import { Button } from "@/components/ui/button";
import ScrollVideo from "@/components/scroll-video";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Figma,
  Palette,
  LayoutTemplate,
  Workflow,
  Zap,
  CheckCircle2,
  ArrowRight,
  Github,
  LucideIcon
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#030303] bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/5 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Spacecraft Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold tracking-tight text-lg text-white">Spacecraft</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <a
                href="https://github.com/Bigmints-com/spacecraft"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button size="sm" className="shadow-lg shadow-primary/20" asChild>
              <a href="#get-started">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-20 text-center sm:px-8 lg:py-32 relative">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50" />

        <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          <Sparkles className="mr-2 h-3.5 w-3.5 fill-primary/20" />
          Ship validated ideas faster
        </Badge>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white">
          From backlog to <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-[#2DAAB8] to-accent bg-clip-text text-transparent">Figma-ready prototypes</span>
          <br className="hidden sm:block" /> in minutes.
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          Paste a user story. Get <strong>production-quality</strong> Figma designs and an interactive prototype
          you can test with users immediately.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row mt-4">
          <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(45,170,184,0.3)] transition-all hover:scale-105 active:scale-95">
            Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 bg-transparent hover:bg-white/5 text-white" asChild>
            <a
              href="https://github.com/Bigmints-com/spacecraft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>

        <ScrollVideo />
      </section>

      {/* ── Social Proof / Metrics ── */}
      <section className="w-full py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4">
            {[
              { label: "Idea to Prototype", value: "< 3 min" },
              { label: "Design Output", value: "Figma-Native" },
              { label: "Brand Consistent", value: "100%" },
              { label: "Design Debt", value: "Zero" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-3 text-center group cursor-default">
                <span className="text-4xl font-black tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">{stat.value}</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Features Grid ── */}
      <section className="container mx-auto px-4 py-24 sm:px-8 lg:py-32">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground">Everything you need to go from raw idea to validated design, without strictly defined wireframes.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={LayoutTemplate}
            title="Backlog to Prototype"
            description="Paste a user story or feature brief. Get a fully interactive prototype with real components in minutes."
          />
          <FeatureCard
            icon={Figma}
            title="Figma-Native Output"
            description="Generate high-fidelity designs—not wireframes. Ready for handoff to your engineering team."
          />
          <FeatureCard
            icon={Palette}
            title="Design System Aware"
            description="Import your tokens, typography, and components. Every generated screen matches your brand."
          />
          <FeatureCard
            icon={Workflow}
            title="Auto User Flows"
            description="Describe a feature and we map the complete user flow, decision points, and screen transitions."
          />
          <FeatureCard
            icon={Zap}
            title="Bring Your Own LLM"
            description="Use OpenAI, Gemini, or Claude. Choose the model that fits your team's needs and budget."
          />
          <FeatureCard
            icon={CheckCircle2}
            title="Human in the Loop"
            description="AI proposes, you decide. Review and refine every screen before finalizing the prototype."
          />
        </div>
      </section>

      {/* ── How it Works Step List ── */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How it Works</h2>
            <p className="text-muted-foreground text-lg">Three simple steps to accelerate your workflow.</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-16">
            {[
              { step: "01", title: "Describe", desc: "Paste your user story or feature brief. Spacecraft understands product context." },
              { step: "02", title: "Generate", desc: "AI builds interactive prototypes and high-fidelity Figma screens using your system." },
              { step: "03", title: "Ship", desc: "Hand off polished Figma files to designers and testable prototypes to stakeholders." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 sm:gap-10 relative">
                {i !== 2 && <div className="absolute left-6 top-16 bottom-[-64px] w-px bg-border/50 border-l border-dashed border-muted-foreground/30"></div>}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 font-bold text-xl text-primary shadow-sm z-10">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="container mx-auto px-4 py-24 text-center sm:px-8 lg:py-32">
        <div className="rounded-3xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent p-12 shadow-2xl shadow-primary/5 sm:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />

          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to accelerate your team?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-xl text-muted-foreground">
            Stop waiting weeks for prototypes. Give your product and design teams the toolkit that ships validated ideas faster.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <Button size="lg" className="px-10 h-14 text-lg shadow-xl shadow-primary/20 transition-transform hover:scale-105">Get Started Free</Button>
          </div>
        </div>
      </section>


      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Spacecraft Logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-foreground text-lg">Spacecraft</span>
            <span className="ml-4 border-l border-white/10 pl-4">© {new Date().getFullYear()} Bigmints</span>
          </div>
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) {
  return (
    <Card className="border-white/10 bg-white/5 shadow-none transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(45,170,184,0.1)] group backdrop-blur-sm">
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary group-hover:text-accent transition-colors duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
