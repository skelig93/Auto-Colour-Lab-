import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <img
            src="/logo.jpg"
            alt="Auto Paint Lab Auckland"
            className="mb-4 h-14 w-auto rounded bg-white object-contain p-1"
          />
          <p className="max-w-sm text-sm text-silver">
            Independent automotive spray painting, paint repairs and resprays across Auckland.
            Owner / operator — sole trader.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold">Services</h3>
          <div className="flex flex-col gap-2 text-sm text-silver">
            <Link to="/services">Spray painting & repairs</Link>
            <Link to="/mobile-paint">Mobile car painting</Link>
            <Link to="/motorbike">Motorbike painting</Link>
            <a href="/#estimate">Instant estimate</a>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold">Contact</h3>
          <div className="flex flex-col gap-2 text-sm text-silver">
            <Link to="/booking">Get a quote</Link>
            <Link to="/contact">Contact us</Link>
            <a href="tel:+642041104094">020 411 04094</a>
            <span>Auckland, New Zealand</span>
            <Link to="/terms">Terms & conditions</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-silver">
        © 2026 Auto Paint Lab · Independent sole trader · Auckland
      </div>
    </footer>
  );
}
