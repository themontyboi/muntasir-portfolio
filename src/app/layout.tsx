import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muntasir-hasan-portfolio.vercel.app"),
  title: "Muntasir Hasan | Cybersecurity and IT Portfolio",
  description:
    "Portfolio of Muntasir Hasan, a Melbourne-based Bachelor of Cybersecurity student interested in IT support, security operations, secure development and game technology.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    title: "Muntasir Hasan | Cybersecurity and IT Portfolio",
    description:
      "Portfolio of Muntasir Hasan, a Melbourne-based Bachelor of Cybersecurity student interested in IT support, security operations, secure development and game technology.",
    siteName: "Muntasir Hasan Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Muntasir Hasan | Cybersecurity and IT Portfolio",
    description:
      "Portfolio of Muntasir Hasan, a Melbourne-based Bachelor of Cybersecurity student interested in IT support, security operations, secure development and game technology.",
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
      </body>
    </html>
  );
}
