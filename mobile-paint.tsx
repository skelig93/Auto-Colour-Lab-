import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mobile-paint")({
  component: MobilePaintPage,
  head: () => ({
    meta: [
      { title: "Mobile Car Painting Auckland | Auto Paint Lab" },
      {
        name: "description",
        content:
          "Mobile paint support across Auckland. On-site touch-ups, scratch repairs and colour work from a fully equipped support van. Independent sole trader.",
      },
      {
        name: "keywords",
        content:
          "mobile car painting Auckland, on-site paint repair, mobile scratch repair, Auto Paint Lab van, mobile automotive paint NZ",
      },
    ],
  }),
});

function MobilePaintPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <img
            src="/logo.jpg"
            alt="Auto Paint Lab Auckland logo"
            className="h-16 w-auto rounded bg-white object-contain sm:h-20"
          />
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Mobile paint support
            </p>
            <h1 className="font-display text-3xl font-bold sm:text-4xl">Support vehicle.</h1>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <img
              src="/van.jpg"
              alt="Auto Paint Lab Ford Transit support vehicle — Auckland mobile paint"
              className="w-full rounded-xl object-cover shadow-lg"
            />
            <p className="mt-3 text-center text-xs text-muted">
              Auto Paint Lab support van — fully equipped for on-site paint work across Auckland
            </p>
          </div>
          <div>
            <p className="text-muted">
              The van is a rolling paint shop for on-site touch-ups, scratch repairs and colour-coat
              work. It is not used to cart customer cars.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Compressors on board for professional spray equipment</li>
              <li>All tools required to complete any job</li>
              <li>Preparation, masking, primers, colour and clear</li>
              <li>Auckland coverage — Ellerslie, Penrose, Onehunga, West, North Shore and beyond</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Operated as a sole trader. You deal directly with the person doing the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/booking">Book mobile paint</Link>
              </Button>
              <Button asChild variant="secondary">
                <a href="tel:+642041104094">Call 020 411 04094</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
