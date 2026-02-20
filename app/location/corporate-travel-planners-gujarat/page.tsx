import { LocalLandingProps, LocalLandingTemplate } from "@/components/local-search/local-landing-template";
import { Metadata } from "next";

const pageData: LocalLandingProps = {
    pageTitle: "Corporate Travel Planners in Gujarat | Universal Travel Planners",
    heroTagline: "Gujarat & Across India",
    heroHeadline: "Corporate Travel Planners in Gujarat. Flawless Mass Logistics.",
    painAcknowledgement: "Moving a delegation of 50+ employees internationally is a logistical nightmare. Fragmented bookings across OTAs lead to missed connections, stranded transfers, and immense cognitive load for HR and founders.",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop", // Corporate / Mass movement image

    authorityStats: [
        { label: "Largest Single Movement", value: "100+" },
        { label: "Crisis Evacuations", value: "7 Hrs" },
        { label: "Corporate Partners", value: "HDFC | Sonata" }
    ],

    reliefFeatures: [
        {
            title: "Chronologically Engineered Planning",
            description: "We synchronize every flight, bespoke stay, and ground transfer into a single, flawless timeline for your entire delegation."
        },
        {
            title: "Strategic Charter Coordination",
            description: "From synchronized mass ticketing to precise rally points, we handle the heavy lifting of moving large numbers of people."
        },
        {
            title: "Dedicated Remote Management",
            description: "You receive a dedicated operational line, acting as your remote command center to intercept any crises before they affect your team."
        }
    ],

    ctaIntent: "corporate",
    ctaMessage: "Hello! I am looking for a corporate travel planner in Gujarat to handle logistics for our upcoming business/MICE trip.",
    ctaButtonText: "Discuss Your Corporate Logistics",

    faqItems: [
        {
            question: "Do you provide on-site managers for large corporate groups?",
            answer: "While we can provide on-site management, our operational system is designed to execute flawlessly even without one. We recently managed a complex, 100-member domestic tour with zero on-site staff, utilizing precise remote command protocols."
        },
        {
            question: "How do you handle sudden flight cancellations for large groups?",
            answer: "We act as your immediate, 24/7 safety net. During a recent airline strike, our crisis command center successfully re-routed 70 stranded corporate passengers across 3 new flights within 7 hours, entirely bypassing the airline's chaotic automated systems."
        },
        {
            question: "Can you manage complex, multi-city itineraries for senior executives?",
            answer: "Absolutely. In addition to mass employee movement, we provide concierge-level logistical planning for senior executives, handling all VIP transfers, private aviation coordination, and high-security hotel placements."
        }
    ]
};

export const metadata: Metadata = {
    title: pageData.pageTitle,
    description: "Expert Corporate Travel Planners in Gujarat. We handle mass employee movement, MICE logistics, and crisis command. Direct WhatsApp routing to Heena Poriya.",
};

export default function CorporateTravelPage() {
    return (
        <>
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
