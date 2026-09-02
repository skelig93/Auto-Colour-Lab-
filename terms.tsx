import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Auto Paint Lab" },
      {
        name: "description",
        content:
          "Terms for preliminary estimates, colour matching and booking with Auto Paint Lab, independent sole trader in Auckland.",
      },
    ],
  }),
});

function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold">Terms & Conditions</h1>
      <div className="mt-6 space-y-4 text-sm text-muted">
        <p>
          Estimates generated on this site are preliminary. Final pricing is confirmed after
          physical inspection. Hidden damage, extra preparation, blending or panel work can change
          the price.
        </p>
        <p>
          Vehicle details shown from a registration lookup are used to estimate colour and paint
          system. Colour is always verified on the car. Lookup data is indicative and may be
          derived from public NZ vehicle register style sources for estimation purposes only.
        </p>
        <p>
          Auto Paint Lab is an independent sole trader in Auckland, operated by Anthony. Pickup is
          optional and charged separately unless included in motorcycle paint pricing.
        </p>
        <p>
          By submitting a booking or quote request you agree that contact details may be used solely
          to respond to the enquiry. No marketing lists are maintained.
        </p>
        <p>
          Workmanship is carried out to a professional standard. Any warranty on materials and
          labour is confirmed in writing at the time of the final quote.
        </p>
      </div>
    </main>
  );
}
