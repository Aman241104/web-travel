"use client";

import { useEffect, useState } from "react";
import { ArrowRight, PlaneTakeoff, X } from "lucide-react";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { cn } from "@/lib/utils";

// Types matching Signature Tours
export type ViewedTour = {
    title: string;
    timestamp: number;
};

const VIEWED_TOUR_KEY = "utp_last_viewed_tour";
const TOAST_COOLDOWN_MS = 1000 * 60 * 60 * 12; // 12 hours before showing again if dismissed
const DISMISS_KEY = "utp_resume_toast_dismissed";

export function ResumePlanningToast() {
    const [isVisible, setIsVisible] = useState(false);
    const [tourName, setTourName] = useState<string | null>(null);

    useEffect(() => {
        // Run only on client after mount
        const checkReturnVisitor = () => {
            try {
                const dismissedAtStr = localStorage.getItem(DISMISS_KEY);
                if (dismissedAtStr) {
                    const dismissedAt = parseInt(dismissedAtStr, 10);
                    if (Date.now() - dismissedAt < TOAST_COOLDOWN_MS) {
                        return; // Cooldown active, don't show
                    }
                }

                const lastViewedStr = localStorage.getItem(VIEWED_TOUR_KEY);
                if (lastViewedStr) {
                    const lastViewed: ViewedTour = JSON.parse(lastViewedStr);
                    // Only show if the view was at least 5 minutes ago (implying a return session or long pause)
                    // and less than 7 days ago.
                    const timeDiff = Date.now() - lastViewed.timestamp;
                    const fiveMinutes = 5 * 60 * 1000;
                    const sevenDays = 7 * 24 * 60 * 60 * 1000;

                    if (timeDiff > fiveMinutes && timeDiff < sevenDays) {
                        setTourName(lastViewed.title);
                        // Delay appearance slightly so it doesn't jump at them instantly
                        setTimeout(() => setIsVisible(true), 2500);
                    }
                }
            } catch (e) {
                console.error("Error reading viewing history", e);
            }
        };

        checkReturnVisitor();
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem(DISMISS_KEY, Date.now().toString());
    };

    if (!isVisible || !tourName) return null;

    return (
        <div
            className={cn(
                "fixed bottom-24 right-4 md:bottom-28 md:right-10 z-[55] w-[calc(100vw-2rem)] md:w-80 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-brand-text/10 p-4 transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
            )}
        >
            <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 text-brand-text-muted hover:text-brand-text hover:bg-brand-bg rounded-md p-1 transition-colors"
                aria-label="Close"
            >
                <X size={16} />
            </button>

            <div className="flex gap-3 items-start mb-3 pr-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <PlaneTakeoff size={18} />
                </div>
                <div>
                    <h4 className="font-sans font-semibold text-brand-text text-sm mb-0.5">Continuing your research?</h4>
                    <p className="text-xs text-brand-text-muted line-clamp-2">
                        Heena is available to answer quick questions about the <strong>{tourName}</strong> tour.
                    </p>
                </div>
            </div>

            <WhatsAppCTA
                intentCategory="general"
                message={`Hi Heena, I was previously looking at the ${tourName} tour and had a quick question.`}
                className="w-full h-10 text-sm font-medium bg-brand-bg-alt text-brand-text hover:bg-brand-accent hover:text-white border border-brand-text/5 shadow-none"
            >
                Ask Heena a quickly <ArrowRight size={14} className="ml-1.5" />
            </WhatsAppCTA>
        </div>
    );
}

// Helper to be called from the Signature Tour cards
export const trackTourView = (title: string) => {
    try {
        const viewedData: ViewedTour = {
            title,
            timestamp: Date.now()
        };
        localStorage.setItem(VIEWED_TOUR_KEY, JSON.stringify(viewedData));
    } catch (e) {
        // Silently fail if localStorage is blocked
    }
};
