import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelance Time Theft Detector – Detect Time Tracking Fraud",
  description: "Analyze freelancer time logs for patterns indicating time theft or hour padding. Upload CSV/Excel files and get instant fraud risk scores."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a256662d-6ed9-4668-a8b2-4b59097cb496"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
