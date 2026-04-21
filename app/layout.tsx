import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "YAML to JSON Converter - Convert YAML to JSON Online | yaml-to-json",
  description:
    "Free online YAML to JSON converter. Paste YAML and get JSON instantly. Bidirectional conversion, validation, formatting, and one-click copy. No signup required.",
  keywords: [
    "yaml to json",
    "json to yaml",
    "yaml converter",
    "yaml json online",
    "yaml parser",
    "convert yaml",
  ],
  authors: [{ name: "yaml-to-json" }],
  openGraph: {
    title: "YAML to JSON Converter - Convert YAML to JSON Online",
    description:
      "Free online tool to convert between YAML and JSON. Bidirectional conversion with validation and formatting.",
    url: "https://yaml-to-json.vercel.app",
    siteName: "yaml-to-json",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "YAML to JSON Converter - Convert YAML to JSON Online",
    description:
      "Free online tool to convert between YAML and JSON. Bidirectional conversion with validation and formatting.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yaml-to-json.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "YAML to JSON Converter",
              description:
                "Free online YAML to JSON converter with bidirectional conversion, validation, and formatting.",
              url: "https://yaml-to-json.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "YAML to JSON conversion",
                "JSON to YAML conversion",
                "Bidirectional real-time conversion",
                "YAML and JSON validation",
                "Format and beautify",
                "One-click copy to clipboard",
                "Download as file",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
