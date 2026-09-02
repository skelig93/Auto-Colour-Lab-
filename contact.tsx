import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Auto Paint Lab Auckland" },
      {
        name: "description",
        content:
          "Contact Auto Paint Lab for car spray painting, paint repairs and mobile paint in Auckland. Phone 020 411 04094.",
      },
      {
        name: "keywords",
        content: "contact Auto Paint Lab, car painter Auckland phone, paint quote Auckland, sole trader painter",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const existing = JSON.parse(localStorage.getItem("apl-contacts") || "[]") as unknown[];
    localStorage.setItem(
      "apl-contacts",
      JSON.stringify([{ ...data, submittedAt: new Date().toISOString() }, ...existing].slice(0, 20)),
    );
    setSent(true);
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Contact
      </p>
      <h1 className="mt-2 font-display text-5xl font-bold">Talk to Anthony.</h1>
      <p className="mt-4 max-w-xl text-muted">
        Sole trader, owner-operator. Call, text or send a message for quotes, mobile paint or
        motorbike work across Auckland.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href="tel:+642041104094"
          className="rounded-xl border border-border bg-surface p-5 text-center hover:border-accent"
        >
          <p className="font-display text-xs tracking-[0.16em] text-accent">Phone / Text</p>
          <p className="mt-1 font-display text-2xl font-semibold">020 411 04094</p>
        </a>
        <div className="rounded-xl border border-border bg-surface p-5 text-center">
          <p className="font-display text-xs tracking-[0.16em] text-accent">Area</p>
          <p className="mt-1 font-display text-2xl font-semibold">Auckland, NZ</p>
        </div>
      </div>

      {sent ? (
        <div className="mt-10 rounded-xl border border-border bg-elevated p-8">
          <h2 className="font-display text-3xl font-bold">Message received.</h2>
          <p className="mt-3 text-muted">
            Anthony will get back to you as soon as possible. For urgent jobs call 020 411 04094.
          </p>
          <Button asChild className="mt-6">
            <Link to="/booking">Or start a booking</Link>
          </Button>
        </div>
      ) : (
        <form className="mt-10 space-y-5 rounded-xl border border-border bg-surface p-6" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} required placeholder="Describe the damage, vehicle and preferred time..." />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      )}
    </main>
  );
}
