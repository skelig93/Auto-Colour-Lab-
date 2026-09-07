import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog | Auto Paint Lab — Paint Tips & Auckland Car Care" },
      {
        name: "description",
        content:
          "Practical advice on car paint care, colour matching, scratch repair and choosing a painter in Auckland from Auto Paint Lab, independent sole trader in Auckland.",
      },
      {
        name: "keywords",
        content: "car paint tips, scratch repair guide, colour match advice, Auckland paint blog",
      },
    ],
  }),
});

const posts = [
  {
    slug: "why-colour-match-matters",
    title: "Why colour match matters more than the paint code",
    date: "2026-08-12",
    excerpt:
      "Factory codes are a starting point. Fade, metallic orientation and previous repairs mean the only reliable match is mixed to the car in front of you.",
  },
  {
    slug: "when-to-repair-vs-replace",
    title: "Repair vs replace a panel — a practical guide",
    date: "2026-07-28",
    excerpt:
      "If the metal or plastic is sound, a proper repair and blend is usually cheaper and keeps original body lines. Here is how the decision is made.",
  },
  {
    slug: "mobile-paint-when-it-works",
    title: "When mobile paint makes sense (and when it does not)",
    date: "2026-07-05",
    excerpt:
      "On-site touch-ups and light scratch work are ideal for the support van. Full panel refinishes and multi-stage pearls still need controlled conditions.",
  },
  {
    slug: "sole-trader-advantage",
    title: "Dealing with a sole trader painter",
    date: "2026-06-18",
    excerpt:
      "You speak to the person who will spray the car. Quotes stay consistent because the same person inspects, prepares and finishes the job.",
  },
];

function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Blog
      </p>
      <h1 className="mt-2 font-display text-5xl font-bold">Paint notes from the workshop.</h1>
      <p className="mt-4 text-muted">
        Short, practical articles on automotive paint, repairs and working with a sole-trader
        painter in Auckland.
      </p>
      <div className="mt-12 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <p className="text-xs text-muted">{post.date}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <p className="mt-4 text-sm text-accent">
              Full article available on request — call or message for the latest advice.
            </p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted">
        Need a quote instead?{" "}
        <Link to="/booking" className="text-accent hover:underline">
          Start a booking
        </Link>{" "}
        or{" "}
        <Link to="/contact" className="text-accent hover:underline">
          contact us
        </Link>
        .
      </p>
    </main>
  );
}
