import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
const fontSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title:
    "Systaliko UI AI Template",
  description:
    "Cognify delivers AI-powered knowledge automation for support and sales teams. Reduce response time, automate ticket triage, and unlock insights from your docs — secure and enterprise-ready.",
  keywords: [
    "AI customer support",
    "knowledge automation",
    "AI helpdesk",
    "support automation",
    "ticket triage AI",
    "agent assist",
    "enterprise AI assistant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${geist.className} ${geistMono.variable} ${fontSerif.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
