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
      { title: "Car Spray Painting Auckland | Paint Repairs | Auto Paint Lab" },
      {
        name: "description",
        content:
          "Car spray painting, scratch and paint repairs, bumper painting, colour matching, panel refinishing and full resprays across Auckland. Free quote and instant preliminary estimate.",
      },
      {
        name: "keywords",
        content:
          "car spray painting Auckland, car paint repairs Auckland, spray painter Auckland, car respray Auckland, bumper painting Auckland, scratch repair Auckland, colour matching Auckland, panel refinishing Auckland",
      },
      { name: "theme-color", content: "#0B1F3A" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "Auto Paint Lab" },
      { property: "og:site_name", content: "Auto Paint Lab" },
      { property: "og:locale", content: "en_NZ" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://autopaintlab.co.nz/" },
      { property: "og:title", content: "Car Spray Painting Auckland | Paint Repairs & Resprays | Auto Paint Lab" },
      {
        property: "og:description",
        content:
          "Professional car spray painting, paint repairs and vehicle resprays across Auckland. Get a free quote or instant preliminary estimate.",
      },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Auto Paint Lab | Auckland Car Spray Painting" },
      {
        name: "twitter:description",
        content: "Professional car paint repairs and resprays across Auckland. Get a free quote or instant preliminary estimate.",
      },
      { name: "twitter:image", content: "/og.jpg" },
      { name: "twitter:url", content: "https://autopaintlab.co.nz/" },
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
