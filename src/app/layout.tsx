import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const portfolioTitle = "Muntasir Hasan | Cybersecurity, Local AI & Software Engineering";
const portfolioDescription =
  "Portfolio of Muntasir Hasan, a Melbourne-based Bachelor of Cybersecurity student building local AI systems, cybersecurity projects and software applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: portfolioTitle,
  description: portfolioDescription,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    title: portfolioTitle,
    description: portfolioDescription,
    siteName: "Muntasir Hasan Portfolio",
  },
  twitter: {
    card: "summary",
    title: portfolioTitle,
    description: portfolioDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050806",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--accent-primary)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#041006]"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <ResumeModal />
      </body>
    </html>
  );
}
