import { createFileRoute } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import { Check, Sparkles, Star } from "lucide-react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hairqare — Science-Backed Haircare for Women in Their 30s" },
      { name: "description", content: "Science-backed haircare for women in their 30s and beyond — from the team behind the 14-Day Haircare Challenge." },
      { property: "og:title", content: "Hairqare — Science-Backed Haircare for Women in Their 30s" },
      { property: "og:description", content: "Science-backed haircare for women in their 30s and beyond — from the team behind the 14-Day Haircare Challenge." },
      { name: "twitter:title", content: "Hairqare — Science-Backed Haircare for Women in Their 30s" },
      { name: "twitter:description", content: "Science-backed haircare for women in their 30s and beyond — from the team behind the 14-Day Haircare Challenge." },
    ],
  }),
  component: Index,
});

const slides = [
  { title: "Module 01", caption: "Foundations", tone: "from-[oklch(0.88_0.08_55)] to-[oklch(0.82_0.12_40)]" },
  { title: "Module 02", caption: "Practice", tone: "from-[oklch(0.86_0.07_70)] to-[oklch(0.78_0.13_45)]" },
  { title: "Module 03", caption: "Mastery", tone: "from-[oklch(0.84_0.09_50)] to-[oklch(0.74_0.15_35)]" },
  { title: "Bonus", caption: "Community", tone: "from-[oklch(0.9_0.05_60)] to-[oklch(0.8_0.1_50)]" },
];

function Index() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  return (
    <main className="min-h-screen" style={{ background: "var(--hero-gradient)" }}>
      {/* Section 1 — Hero with carousel + above-the-fold CTA */}
      <section className="px-5 pt-8 pb-12 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>New Cohort · 14 Days</span>
        </div>

        <Carousel
          opts={{ loop: true, align: "center" }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((s) => (
              <CarouselItem key={s.title} className="basis-[85%]">
                <div
                  className={`aspect-[4/5] rounded-3xl bg-gradient-to-br ${s.tone} shadow-xl flex flex-col justify-end p-6 text-primary-foreground`}
                >
                  <span className="text-xs uppercase tracking-widest opacity-80">{s.caption}</span>
                  <h3 className="font-display text-3xl mt-1">{s.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <h1 className="mt-8 text-4xl leading-[1.05] text-foreground text-center">
          Transform your craft in just <em className="italic">14 days.</em>
        </h1>

        <p className="mt-4 text-center text-muted-foreground text-[15px] leading-relaxed">
          Join the course and get a clear, step-by-step path — designed to fit
          into your daily routine.
        </p>

        <ul className="mt-6 space-y-3">
          {[
            "Daily lessons you can finish in 15 minutes",
            "Templates, workbooks & a private community",
            "Lifetime access — go at your own pace",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[15px] text-foreground">
              <Check className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button
          size="lg"
          className="w-full mt-7 h-14 rounded-full text-base font-semibold uppercase tracking-wider shadow-lg shadow-primary/30"
        >
          Start the Challenge
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-3">
          100% Satisfaction Guaranteed · 0% Hassle
        </p>
      </section>

      {/* Section 2 — Social proof */}
      <section className="bg-card px-5 py-14">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Loved by 50,000+ students
          </p>
          <div className="flex justify-center gap-1 mt-3 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground">
            “This is the only course I've ever actually finished. It changed
            how I work — and how I feel about it.”
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">— Sarah K., Cohort 12</p>
        </div>
      </section>

      {/* Section 3 — Closing CTA */}
      <section className="px-5 py-16 max-w-xl mx-auto text-center">
        <h2 className="text-3xl text-foreground">
          Your next 14 days could change everything.
        </h2>
        <p className="mt-4 text-muted-foreground text-[15px]">
          Cohort starts soon. Seats are limited to keep the community tight-knit.
        </p>
        <Button
          size="lg"
          className="w-full mt-7 h-14 rounded-full text-base font-semibold uppercase tracking-wider shadow-lg shadow-primary/30"
        >
          Join the Challenge
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          One-time payment · Lifetime access
        </p>
      </section>
    </main>
  );
}
