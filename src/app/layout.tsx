import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://signvivid.com"),
  title: "Sign Vivid | Design, Print & Sign",
  description: "Professional signage solutions, design, print, and installation across the UK.",
  openGraph: {
    title: "Sign Vivid | Design, Print & Sign",
    description: "Custom neon, letters, lightboxes, moss signs, and professional signage installation across the UK.",
    url: "https://signvivid.com",
    siteName: "Sign Vivid",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sign Vivid signage preview card",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Vivid | Design, Print & Sign",
    description: "Custom signage design, print, and installation across the UK.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
