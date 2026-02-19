import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Figma,
  Palette,
  GitBranch,
  MessageSquare,
  MonitorSmartphone,
  Pencil,
  Wand2,
  Share2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Screen Generation",
    description:
      "Describe any screen in natural language. Spacecraft generates production-ready JSX components instantly.",
  },
  {
    icon: Figma,
    title: "Figma Sync",
    description:
      "Two-way sync between your prototypes and Figma. Generate high-fidelity designs directly from your workspace.",
  },
  {
    icon: Palette,
    title: "Design System Management",
    description:
      "Import tokens, variables, and components from Figma. Keep your design system in sync automatically.",
  },
  {
    icon: GitBranch,
    title: "User Flow Diagrams",
    description:
      "AI-generated interactive flow graphs. Visualize your entire app architecture at a glance.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description:
      "Multi-provider LLM support — OpenAI, Gemini, Claude, and OpenRouter. Your AI co-pilot for rapid prototyping.",
  },
  {
    icon: MonitorSmartphone,
    title: "Live Device Preview",
    description:
      "Render generated screens in a realistic device frame. See exactly how your app will look and feel.",
  },
];

const steps = [
  {
    icon: Pencil,
    step: "01",
    title: "Describe",
    description:
      "Tell Spacecraft what you want to build. A screen, a flow, or an entire app — in your own words.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "Generate",
    description:
      "AI builds interactive prototypes with real components, proper design tokens, and native feel.",
  },
  {
    icon: Share2,
    step: "03",
    title: "Export",
    description:
      "Sync to Figma, preview on device, or hand off production-ready code to your development team.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_oklch(0.55_0.2_195)_0%,_transparent_70%)] opacity-20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,_oklch(0.55_0.15_280)_0%,_transparent_70%)] opacity-15 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Spacecraft Logo"
              width={36}
              height={36}
              className="drop-shadow-lg"
            />
            <span className="text-lg font-bold tracking-tight">
              Spacecraft
            </span>
          </div>
          <Button size="sm" className="gap-2" asChild>
            <a href="https://github.com/Bigmints-com/spacecraft" target="_blank" rel="noopener noreferrer">
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28">
        <Badge
          variant="secondary"
          className="mb-6 gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
        >
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Prototyping Tool
        </Badge>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          From idea to{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            interactive prototype
          </span>{" "}
          in seconds
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          Spacecraft uses AI to turn your product ideas into fully interactive
          prototypes — complete with real components, design tokens, and Figma
          sync.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 text-base" asChild>
            <a href="https://github.com/Bigmints-com/spacecraft" target="_blank" rel="noopener noreferrer">
              <Rocket className="h-5 w-5" />
              Get Started Free
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 text-base" asChild>
            <a href="https://github.com/Bigmints-com/spacecraft" target="_blank" rel="noopener noreferrer">
              View on GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Floating logo hero illustration */}
        <div className="relative mt-16">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-400/20 blur-3xl" />
          <Image
            src="/logo.png"
            alt="Spacecraft"
            width={280}
            height={280}
            className="relative animate-float drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-sm">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to prototype fast
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A complete toolkit for turning ideas into interactive,
            production-quality prototypes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/80 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-400/10 text-teal-400 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 text-sm">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Three steps to your next prototype
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {steps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-400/10 text-teal-400">
                  <step.icon className="h-7 w-7" />
                </div>
                <p className="mb-2 text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Step {step.step}
                </p>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <div className="relative mx-auto max-w-2xl rounded-3xl border border-border/50 bg-card/50 p-12 backdrop-blur-sm md:p-16">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-teal-500/5 to-cyan-400/5" />
          <Rocket className="mx-auto mb-6 h-10 w-10 text-teal-400" />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to launch?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Start building interactive prototypes today. Open source, free
            forever, and powered by AI.
          </p>
          <Button size="lg" className="mt-8 gap-2 text-base" asChild>
            <a href="https://github.com/Bigmints-com/spacecraft" target="_blank" rel="noopener noreferrer">
              <Sparkles className="h-5 w-5" />
              Get Started
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Spacecraft"
              width={20}
              height={20}
              className="opacity-60"
            />
            <span>
              © {new Date().getFullYear()} Spacecraft by{" "}
              <a
                href="https://www.bigmints.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Bigmints
              </a>
            </span>
          </div>
          <a
            href="https://github.com/Bigmints-com/spacecraft"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
