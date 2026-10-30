import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oddrobin.co.uk"),
  title: {
    default: "Odd Robin | Get Seen in Gloucester",
    template: "%s | Odd Robin",
  },
  description:
    "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Odd Robin",
  category: "business",
  openGraph: {
    type: "website",
    url: "https://oddrobin.co.uk",
    siteName: "Odd Robin",
    title: "Odd Robin | Get Seen in Gloucester",
    description:
      "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odd Robin | Get Seen in Gloucester",
    description:
      "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] bg-primary px-5 py-3 font-semibold text-surface focus:not-sr-only">Skip to content</a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1} className="flex flex-1 flex-col">{children}</div>
        <SiteFooter year={new Date().getFullYear()} />
      </body>
    </html>
  );
}
