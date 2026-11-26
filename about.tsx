import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/Skills";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Machot Kol Wuor" },
      { name: "description", content: "Background and mission of Machot Kol Wuor in legal, regulatory and financial access." },
      { property: "og:title", content: "About — Machot Kol Wuor" },
      { property: "og:description", content: "Background and mission in legal, regulatory and financial access." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="fade-up pt-20">
      <h1 className="text-4xl md:text-5xl">About me</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_2fr]">
        <p className="font-display text-xl text-primary">
          Talent is everywhere. Legal and financial access is not.
        </p>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm Machot Kol Wuor, a developer and advocate working where law, regulation and finance meet everyday
            work. I've seen skilled people lose opportunities not because of ability, but because of a missing
            permit, a confusing compliance form or a bank account they couldn't open.
          </p>
          <p>
            My work supports decent work and economic growth (SDG 8), reduced inequalities (SDG 10) and strong,
            fair institutions (SDG 16). I design clear guides, compliance checklists and software that turn
            complex rules into simple next steps for candidates and employers alike.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}
