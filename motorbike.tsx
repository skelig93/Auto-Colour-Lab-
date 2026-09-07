import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/motorbike")({
  component: MotorbikePage,
  head: () => ({
    meta: [
      { title: "Motorbike Painting Auckland | Auto Paint Lab" },
      {
        name: "description",
        content:
          "Motorcycle resprays, tank and fairing paint, restorations in Auckland. Free motorcycle pickup included. Independent sole trader in Auckland.",
      },
      {
        name: "keywords",
        content: "motorbike painting Auckland, motorcycle respray, fuel tank paint, bike fairing paint",
      },
    ],
  }),
});

function MotorbikePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Motorcycle paint
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold">
        Motorbike resprays and restorations, done properly.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Tanks, fairings and plastics prepared and refinished at Auto Paint Lab. Free motorcycle
        pickup is included in the paint price. Minor scratches can be done at your home.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["Fuel tank respray", "From $400 for a standard single colour."],
          ["Free pickup", "Included in motorcycle paint pricing."],
          ["Same-week target", "For the agreed scope of work."],
        ].map(([t, d]) => (
          <article key={t} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-display text-2xl font-semibold">{t}</h2>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </article>
        ))}
      </div>
      <Button asChild className="mt-10">
        <Link to="/booking">Get a motorbike quote</Link>
      </Button>
    </main>
  );
}
