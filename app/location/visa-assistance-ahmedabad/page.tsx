import { LocalLandingProps, LocalLandingTemplate } from "@/components/local-search/local-landing-template";
import { Metadata } from "next";

const pageData: LocalLandingProps = {
    pageTitle: "Visa Assistance in Ahmedabad | Universal Travel Planners",
    heroTagline: "Ahmedabad, Gujarat",
    heroHeadline: "Expert Visa Assistance in Ahmedabad. Don't let paperwork ruin your trip.",
    painAcknowledgement: "The smallest documentation error can lead to a devastating visa rejection. We eliminate the guesswork, handle the embassy bureaucracy, and secure your travel dates with flawless precision.",
    heroImage: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2600&auto=format&fit=crop", // Passport/Travel prep image

    authorityStats: [
        { label: "High Success Rate", value: "98%" },
        { label: "Schengen & US Experts", value: "Complex" },
        { label: "Local Planners", value: "100%" }
    ],

    reliefFeatures: [
        {
            title: "Flawless Documentation",
            description: "An internal team dedicated purely to auditing your paperwork against the strictest embassy requirements before submission."
        },
        {
            title: "Appointment Acquisition",
            description: "Securing VFS / Embassy slots is a nightmare. Our operation monitors and acquires the earliest possible slots for your itinerary."
        },
        {
            title: "End-to-End Tracking",
            description: "From the moment you hand us the documents until the stamped passport arrives at your door in Ahmedabad, we manage the entire chain."
        }
    ],

    ctaIntent: "visa-inquiry",
    ctaMessage: "Hi Heena/Team! I found you through local search in Ahmedabad. I need urgent help with a visa application.",
    ctaButtonText: "Message the Visa Team",

    faqItems: [
        {
            question: "What if I have been rejected for a visa previously?",
            answer: "Previous rejections complicate the process, but they are rarely definitive. We conduct a thorough audit of your previous application to understand exactly why it was rejected, and construct a robust new file that directly addresses the embassy's prior concerns."
        },
        {
            question: "Do you only handle tourist visas or business & corporate as well?",
            answer: "We handle all categories. Corporate and MICE visas are a specialized pillar of our operation. We frequently coordinate bulk visa processing for large corporate delegations departing from Gujarat."
        },
        {
            question: "How long does the entire process take from Ahmedabad?",
            answer: "It depends entirely on the destination country and current appointment backlogs at local VFS centers. However, engaging us early guarantees you secure the fastest available track without losing time to paperwork errors."
        }
    ]
};

export const metadata: Metadata = {
    title: pageData.pageTitle,
    description: "Expert Visa Assistance & Schengen Visa Travel Agency in Ahmedabad. We handle logistics, appointments, and flawless documentation. Start a WhatsApp chat today.",
};

export default function VisaAssistancePage() {
    return (
        <>
            {/* Inject FAQ Schema for this specific landing page to dominate local SERP */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": pageData.faqItems.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
            <LocalLandingTemplate data={pageData} />
        </>
    );
}
