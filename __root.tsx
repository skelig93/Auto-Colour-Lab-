import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Auto Paint Lab | Auckland Car Spray Painting & Paint Repairs" },
      {
        name: "description",
        content:
          "Professional car spray painting, paint repairs, bumper painting, colour matching and mobile paint in Auckland. Instant estimate from your NZ rego. Independent sole trader.",
      },
      {
        name: "keywords",
        content:
          "car spray painting Auckland, paint repair Auckland, bumper painting Auckland, mobile car painting, colour matching, vehicle respray Auckland, automotive paint NZ, Auto Paint Lab",
      },
      { name: "theme-color", content: "#0B1F3A" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:site_name", content: "Auto Paint Lab" },
      { property: "og:locale", content: "en_NZ" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Auto Paint Lab | Auckland Car Spray Painting & Paint Repairs" },
      {
        property: "og:description",
        content:
          "Professional car spray painting, paint repairs and mobile paint in Auckland. Instant rego estimate. Independent sole trader.",
      },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Auto Paint Lab | Auckland Car Spray Painting" },
      {
        name: "twitter:description",
        content: "Professional paint repairs and resprays in Auckland. Instant estimate from your rego.",
      },
      { name: "twitter:image", content: "/og.jpg" },
      { name: "geo.region", content: "NZ-AUK" },
      { name: "geo.placename", content: "Auckland" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en-NZ" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteHeader />
          <Outlet />
          <SiteFooter />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
