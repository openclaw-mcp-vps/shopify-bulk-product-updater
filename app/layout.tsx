import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Bulk Product Updater — Update Thousands of Products Instantly",
  description: "Bulk edit Shopify product prices, descriptions, tags, and variants via CSV upload with real-time validation and one-click rollback."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="28427ed5-b410-4f2e-956d-44b1c7e9d789"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
