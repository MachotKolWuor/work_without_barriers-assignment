import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Banknote, FileCheck2, Scale } from "lucide-react";
import { Skills } from "@/components/Skills";
import { SdgBadges } from "@/components/SdgBadges";
import { Counter, Reveal } from "@/components/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Machot Kol Wuor — Legal, Regulatory & Financial Access" },
      { name: "description", content: "Helping qualified candidates legally work, get paid and contract smoothly." },
      { property: "og:title", content: "Machot Kol Wuor — Legal, Regulatory & Financial Access" },
      { property: "og:description", content: "Helping qualified candidates legally work, get paid and contract smoothly." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: Scale, title: "Work authorization", text: "Clear paths through permits, visas and right-to-work checks." },
  { icon: FileCheck2, title: "Employer compliance", text: "Simple tools that help employers hire lawfully and confidently." },
  { icon: Banknote, title: "Banking & payments", text: "Opening doors to accounts and payouts so people get paid." },
];

const goals = [
  { sdg: "SDG 8", title: "Decent work & economic growth", text: "Getting qualified people into lawful, paid jobs faster.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80", alt: "People working together at a table" },
  { sdg: "SDG 10", title: "Reduced inequalities", text: "Equal access to work and banking regardless of origin.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80", alt: "Diverse group of friends together" },
  { sdg: "SDG 16", title: "Peace, justice & strong institutions", text: "Transparent, fair processes people can trust.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80", alt: "Scales of justice and law books" },
];

function Index() {
  return (
    <>
      <section className="fade-up grid items-center gap-10 pt-20 pb-12 md:grid-cols-[1fr_auto] md:pt-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">SDGs 8 · 10 · 16</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
            Hi, I'm Machot. I clear the paperwork that stands between talent and work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I build tools and processes that remove friction around work authorization, employer compliance and
            banking access — so qualified candidates can legally work, get paid and contract smoothly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="lift inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
              See my work <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="lift rounded-md border border-border bg-card px-5 py-3 text-sm font-medium">
              Get in touch
            </Link>
          </div>
        </div>
        <SdgBadges />
      </section>

      <section className="grid gap-6 border-t border-border pt-12 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 120}>
            <Icon className="text-primary" size={24} strokeWidth={1.5} />
            <h3 className="mt-3 text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </section>

      <section className="mt-20">
        <Reveal><h2 className="text-3xl">Strategic goal alignment</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {goals.map((g, i) => (
            <Reveal key={g.sdg} delay={i * 120}>
              <div className="overflow-hidden rounded-2xl">
                <img src={g.img} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-widest text-primary">{g.sdg}</p>
              <h3 className="mt-1 text-xl">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mt-20 grid gap-6 rounded-2xl bg-secondary p-10 text-center sm:grid-cols-2">
        <div>
          <p className="font-display text-5xl text-primary"><Counter to={14200} suffix="+" /></p>
          <p className="mt-2 text-sm text-muted-foreground">Cases resolved</p>
        </div>
        <div>
          <p className="font-display text-5xl text-primary"><Counter to={88} decimals={1} /></p>
          <p className="mt-2 text-sm text-muted-foreground">Metric index</p>
        </div>
      </Reveal>

      <Reveal><Skills /></Reveal>
    </>
  );
}
