import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});
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
    "Cognify — AI Customer Experience Platform | Knowledge Automation for Support Teams",
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
    <html lang="en">
      <body
        className={`${geist.className} ${geistMono.variable} ${fontSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
