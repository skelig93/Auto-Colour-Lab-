import { createFileRoute, Link } from "@tanstack/react-router";
import { EstimateTool } from "@/components/EstimateTool";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Auto Paint Lab | Auckland Car Spray Painting & Paint Repairs" },
      {
        name: "description",
        content:
          "Independent car spray painting, scratch repairs, bumper painting and mobile paint in Auckland. Instant estimate from your NZ rego. Professional colour matching and panel refinishing.",
      },
      {
        name: "keywords",
        content:
          "car spray painting Auckland, paint repair Auckland, bumper painting, mobile car paint, colour matching, respray Auckland, Auto Paint Lab, automotive refinishing NZ",
      },
      { property: "og:title", content: "Auto Paint Lab | Auckland Car Spray Painting" },
      {
        property: "og:description",
        content: "Professional paint repairs and resprays in Auckland. Instant rego estimate. Independent sole trader.",
      },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PRODUCTS = [
  {
    cat: "Basecoats & colour",
    items: [
      "PPG Deltron / Envirobase waterborne systems",
      "Spies Hecker Permacron & Permahyd",
      "Glasurit 90 Line waterborne",
      "Nexa Autocolor Aquabase Plus",
      "Standox Xtreme System",
    ],
  },
  {
    cat: "Clearcoats & primers",
    items: [
      "2K HS clearcoats (PPG, Spies Hecker, Glasurit)",
      "Wet-on-wet and standard primers",
      "Plastic adhesion promoters",
      "Epoxy and etch primers for bare metal",
      "UV-resistant clear systems",
    ],
  },
  {
    cat: "Solvents & reducers",
    items: [
      "Standard, medium and slow reducers",
      "Gun wash and panel wipe",
      "Silicone removers",
      "Pre-cleaner and degreasers",
      "Compatible thinners for each brand system",
    ],
  },
  {
    cat: "Polishes & finishing",
    items: [
      "Compound and polish systems (3M, Meguiar’s professional)",
      "Fine cut and ultra-fine polishes",
      "Glaze and sealant for final protection",
      "Sanding abrasives (P80–P3000)",
      "Masking tapes and films rated for automotive paint",
    ],
  },
];

function Home() {
  return (
    <main>
      {/* Hero — upper background image kept */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Professional automotive paint finish — Auto Paint Lab Auckland"
          className="absolute inset-0 size-full object-cover object-[20%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-4 py-20">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Independent automotive spray painting · Auckland
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-6xl font-extrabold leading-[0.9] sm:text-7xl">
            Paintwork.
            <br />
            <span className="text-accent">Done properly.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Enter your vehicle rego, compare colour paint prices, and get a preliminary repair
            estimate. 632 cm² of solid paint is $300 — scaled to your repair.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#estimate">Get instant estimate</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/booking">Free quote</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:+642041104094">Call 020 411 04094</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {[
            ["Colour matching", "Accurate blend"],
            ["Panel refinishing", "Single panel up"],
            ["Full resprays", "Complete projects"],
            ["Auckland", "Central & wider"],
          ].map(([t, s]) => (
            <div key={t} className="border-border px-5 py-6 md:border-r md:last:border-r-0">
              <p className="font-display text-lg font-semibold">{t}</p>
              <p className="text-sm text-muted">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          What is offered
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold">Automotive paint, without the guesswork.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Car spray painting", "Professional refinishing for damaged or faded paintwork."],
            ["Scratch & scuff repairs", "Repair and blend rather than replace the panel."],
            ["Bumper painting", "Plastic prep, refinish and colour match."],
            ["Colour matching", "Blend into the existing finish, not just a code."],
            ["Mobile paint touch-ups", "On-site clear and colour work where the car sits."],
            ["Full vehicle resprays", "Restorations, fade correction and colour changes."],
          ].map(([t, d], i) => (
            <article key={t} className="rounded-xl border border-border bg-surface p-6">
              <p className="font-display text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="estimate" className="mx-auto w-full max-w-6xl px-4 py-20">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Instant preliminary estimate
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
          Rego in. Colour compared. Price out.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Enter your NZ plate. Vehicle details are matched for accurate paint-system pricing.
          Measure the damaged area, optionally attach a photo, then book.
        </p>
        <div className="mt-10">
          <EstimateTool />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <img
            src="/van.jpg"
            alt="Auto Paint Lab mobile paint support vehicle Auckland"
            className="w-full rounded-xl object-cover shadow-md"
          />
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Support vehicle
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold">
              Fully equipped mobile paint support.
            </h2>
            <p className="mt-4 text-muted">
              This is the Auto Paint Lab support vehicle. It is set up to bring the job to you for
              on-site paint support. It is not used to transport customer vehicles.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>On-board compressors for professional spray equipment</li>
              <li>All tools required to complete any job on the van</li>
              <li>Paint, preparation materials and masking gear on board</li>
              <li>Ready for mobile touch-ups and scratch repairs across Auckland</li>
            </ul>
            <Button asChild className="mt-8">
              <Link to="/mobile-paint">Mobile paint details</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Products & materials
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold">
          Professional NZ automotive paints, solvents and polishes.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Industry-standard systems available in New Zealand — matched to the job, not the
          cheapest tin on the shelf. Exact product is confirmed after colour and panel inspection.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PRODUCTS.map((block) => (
            <article key={block.cat} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-display text-xl font-semibold text-accent">{block.cat}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-subtle">
          Brand names are examples of professional systems commonly used in NZ refinishing. Final
          selection depends on the vehicle colour, panel type and job scope.
        </p>
      </section>

      <section className="border-y border-border bg-navy py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold">Ready to book the repair?</h2>
            <p className="mt-2 text-silver">Show the damage. Final quote confirmed after inspection.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/booking">Start booking</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+642041104094">020 411 04094</a>
            </Button>
          </div>
        </div>
      </section>

      {/* LocalBusiness JSON-LD for SEO — invisible, no layout impact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            name: "Auto Paint Lab",
            description:
              "Independent car spray painting, paint repairs, bumper painting and mobile paint in Auckland.",
            url: "https://autopaintlab.nz",
            telephone: "+642041104094",
            areaServed: { "@type": "City", name: "Auckland" },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Auckland",
              addressCountry: "NZ",
            },
            priceRange: "$$",
            openingHours: "Mo-Sa 08:00-17:00",
          }),
        }}
      />
    </main>
  );
}
