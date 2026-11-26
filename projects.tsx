import { createFileRoute } from "@tanstack/react-router";
import { Progress, Reveal } from "@/components/motion";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Machot Kol Wuor" },
      { name: "description", content: "Project gallery: work authorization, compliance and payment access tools." },
      { property: "og:title", content: "Projects — Machot Kol Wuor" },
      { property: "og:description", content: "Work authorization, compliance and payment access tools." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const featured = [
  { tag: "Legal aid", title: "Digital Legal Aid Navigator", text: "Guides candidates through permits and documents with lawyer-reviewed steps.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", alt: "Lawyer helping sign legal documents", progress: 88 },
  { tag: "Banking", title: "FinAccess API & Registry", text: "A registry of banks and payment providers that accept alternative ID.", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", alt: "Paying with a mobile phone", progress: 94 },
  { tag: "Compliance", title: "FairWage Compliance Matrix", text: "Checks pay against wage rules so every paycheck is fair and lawful.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80", alt: "Pay documents and calculator", progress: 75 },
];

const more = [
  { tag: "Payments", title: "Fair Payout Calculator", text: "Compares cross-border payout fees so contractors keep more of what they earn." },
  { tag: "Contracting", title: "Plain-Language Contracts", text: "Contract templates explained clause by clause in simple language." },
  { tag: "Advocacy", title: "Friction Report 2026", text: "Research on the top administrative barriers facing qualified migrant workers." },
];

function Projects() {
  return (
    <div className="fade-up pt-20">
      <h1 className="text-4xl md:text-5xl">Project gallery</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Selected work removing barriers to legal work and fair pay.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.alt} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-primary">{p.tag}</span>
                <h2 className="mt-2 text-xl">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.text}</p>
                <div className="mt-5"><Progress value={p.progress} label="Progress" /></div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <h2 className="mt-16 text-2xl">More work</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {more.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">{p.tag}</span>
              <h3 className="mt-2 text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
