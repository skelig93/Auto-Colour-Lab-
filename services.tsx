import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Auto Paint Lab Auckland — Spray Painting & Paint Repairs" },
      {
        name: "description",
        content:
          "Car spray painting, scratch repair, bumper painting, colour matching, panel refinishing and full resprays in Auckland. Independent sole trader — you deal directly with the person spraying the car.",
      },
      {
        name: "keywords",
        content: "car spray painting Auckland, scratch repair, bumper painting, colour matching, full respray Auckland",
      },
    ],
  }),
});

const items = [
  {
    title: "Car spray painting",
    body: "Factory-quality basecoat and clearcoat on prepared panels. Colour matched to the existing finish.",
  },
  {
    title: "Scratch and scuff repair",
    body: "Where paint is damaged but the panel is sound, the area is repaired, primed, painted and blended rather than replaced.",
  },
  {
    title: "Bumper painting",
    body: "Plastic bumper prep, adhesion promoter, colour and clear. Parking scuffs through to full bumper resprays.",
  },
  {
    title: "Colour matching",
    body: "Mixed to the vehicle, not only the paint code — fade, metallic lay and pearl flop are accounted for.",
  },
  {
    title: "Panel refinishing",
    body: "Doors, guards, bonnets, boots and sills. Adjacent panels blended so the repair disappears.",
  },
  {
    title: "Full resprays",
    body: "Complete exterior colour change or restoration resprays, quoted after inspection.",
  },
];

function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Services
      </p>
      <h1 className="mt-2 font-display text-5xl font-bold">Automotive paint, panel by panel.</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Independent sole-trader refinishing. You deal with the person spraying the car.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </article>
        ))}
      </div>
      <Button asChild className="mt-10">
        <Link to="/booking">Request a quote</Link>
      </Button>
    </main>
  );
}
