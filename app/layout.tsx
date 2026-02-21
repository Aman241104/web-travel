import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { GSAPProvider } from "@/components/motion/gsap-provider";
import { Navbar } from "@/components/navigation/navbar";
import { FloatingConcierge } from "@/components/ui/floating-concierge";
import { IntentSelectorModal } from "@/components/ui/intent-selector-modal";
import { ResumePlanningToast } from "@/components/ui/resume-planning-toast";
import { Footer } from "@/components/navigation/footer";
import { FloatingMobileNav } from "@/components/navigation/floating-mobile-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Universal Travel Planners",
  description: "Premium, high-conversion travel agency tailored for unforgettable experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-brand-bg text-brand-text selection:bg-brand-text selection:text-brand-bg">
        <LenisProvider>
          <GSAPProvider>
            <Navbar />

            <main className="flex min-h-screen flex-col">
              {children}
            </main>

            {/* Global Intent Qualification Modal */}
            <IntentSelectorModal />

            {/* Global Floating Action Button for Mobile / All Pages */}
            <FloatingConcierge />

            {/* Post-Visit Reactivation Nudge */}
            <ResumePlanningToast />

            <FloatingMobileNav />
            <Footer />
          </GSAPProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
