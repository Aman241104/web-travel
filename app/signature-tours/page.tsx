"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeadingBlock } from "@/components/ui/heading-block";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { TourCategories } from "@/components/signature-tours/tour-categories";
import { SignatureExperienceCard, SignatureExperienceData } from "@/components/signature-tours/signature-experience-card";
import { HeartHandshake, ShieldCheck, Briefcase } from "lucide-react";

// Placeholder data - aligned with the content architecture blueprint
const EXPERIENCES: SignatureExperienceData[] = [
    {
        id: "exp-1",
        title: "Majestic Turkey",
        hookLine: "Hot air balloons over Cappadocia, with a dedicated chef providing specialized catering for the Jain and Swaminarayan communities.",
        sensoryCues: ["Private Chef", "Cave Hotel", "Bosphorus Cruise", "Jain/Swaminarayan Catering"],
        startingRange: "₹1,25,000 pp",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2899&auto=format&fit=crop",
        category: "kitchen-caravan",
        customizable: true,
    },
    {
        id: "exp-2",
        title: "Maldives Escapes",
        hookLine: "Your overwater villa awaits. We negotiate the upgrades you can't get online.",
        sensoryCues: ["Seaplane Transfer", "Private Pool", "Spa Credit", "Honeymoon Perks"],
        startingRange: "₹85,000 pp",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
        category: "honeymoon",
        customizable: true,
    },
    {
        id: "exp-3",
        title: "Corporate Bali",
        hookLine: "Moving 50 executives feels like moving two. Seamless logistics, powerful retreats.",
        sensoryCues: ["Charter Flights", "Conference Villa", "Team Building", "Gala Dinner"],
        startingRange: "Custom Quote",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop",
        category: "corporate",
        customizable: true,
    },
    {
        id: "exp-4",
        title: "Sri Lanka Heritage",
        hookLine: "Tea plantations, private train carriages, and boutique colonial stays for the whole family.",
        sensoryCues: ["Private Chauffeur", "Wildlife Safari", "Cooking Class", "Family Suites"],
        startingRange: "₹55,000 pp",
        image: "https://images.unsplash.com/photo-1588214979116-2fd1ff9a59b6?q=80&w=2940&auto=format&fit=crop",
        category: "family",
        customizable: true,
    },
    {
        id: "exp-5",
        title: "Sri Lanka Romance",
        hookLine: "Secluded beachfront villas and private rainforest treks. The ultimate romantic escape.",
        sensoryCues: ["Private Pool", "Spa Credit", "Candlelit Dinners", "Rainforest Trek"],
        startingRange: "₹65,000 pp",
        image: "https://images.unsplash.com/photo-1546708973-c152ab152f20?q=80&w=2940&auto=format&fit=crop",
        category: "honeymoon",
        customizable: true,
    }
];

export default function SignatureToursPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    // Filter logic
    const filteredExperiences = activeCategory === "all"
        ? EXPERIENCES
        : EXPERIENCES.filter(exp => exp.category === activeCategory);

    return (
        <main className="w-full bg-brand-bg relative pb-32">

            {/* Minimalist, Cinematic Hero */}
            <SectionWrapper spacing="hero" background="alt" className="pt-40 pb-24 border-b border-brand-text/5">
                <Container className="max-w-4xl max-auto text-center flex flex-col items-center">
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text mb-6">
                        Signature Experiences
                    </h1>
                    <p className="text-lg md:text-xl font-sans text-brand-text-muted max-w-2xl font-light leading-relaxed mb-10">
                        Starting points for the world’s most demanding travelers. Every detail, completely bespoke to your vision.
                    </p>
                    <div className="flex gap-4">
                        <WhatsAppCTA
                            message="Hi Heena/Team! I want to start with a blank canvas and build a luxury trip."
                            variant="premium"
                            className="h-14 px-8 text-base shadow-[0_15px_40px_rgba(0,82,255,0.2)] rounded-xl"
                        >
                            Start with a Blank Canvas
                        </WhatsAppCTA>
                    </div>
                </Container>
            </SectionWrapper>

            {/* Sticky Filtering Layer */}
            <TourCategories onSelect={setActiveCategory} />

            {/* The Aspirational Grid */}
            <SectionWrapper background="default" spacing="default" className="pt-16 md:pt-24 z-10 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {filteredExperiences.map((exp, idx) => (
                            <div key={exp.id} className={idx % 2 !== 0 ? "md:mt-24" : ""}>
                                <SignatureExperienceCard data={exp} />
                            </div>
                        ))}
                    </div>

                    {/* Empty State Fallback (If a Category has no items yet) */}
                    {filteredExperiences.length === 0 && (
                        <div className="w-full py-32 flex flex-col items-center text-center">
                            <h3 className="text-2xl font-display font-medium text-brand-text mb-2">Experiences in development</h3>
                            <p className="text-brand-text-muted mb-8">We are currently curating new signature itineraries for this category.</p>
                            <WhatsAppCTA variant="outline" message={`Hi! Do you have any upcoming trips planned for the ${activeCategory} category?`}>
                                Ask us on WhatsApp
                            </WhatsAppCTA>
                        </div>
                    )}
                </Container>
            </SectionWrapper>

            {/* Mid-Page Authority Injection */}
            <SectionWrapper background="alt" spacing="default" className="border-y border-brand-text/5 mt-16 md:mt-32">
                <Container className="max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start group">
                            <div className="h-14 w-14 rounded-full bg-brand-bg flex items-center justify-center text-brand-blue mb-6 border border-brand-text/10 shadow-sm group-hover:scale-110 transition-transform">
                                <ShieldCheck />
                            </div>
                            <h4 className="font-display font-semibold text-xl mb-3">The Bureaucracy Shield</h4>
                            <p className="text-brand-text-muted text-sm leading-relaxed">Visas, complex global forex, and travel insurance. We handle the friction so you never have to.</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start group">
                            <div className="h-14 w-14 rounded-full bg-brand-bg flex items-center justify-center text-brand-blue mb-6 border border-brand-text/10 shadow-sm group-hover:scale-110 transition-transform">
                                <Briefcase />
                            </div>
                            <h4 className="font-display font-semibold text-xl mb-3">The Group Advantage</h4>
                            <p className="text-brand-text-muted text-sm leading-relaxed">From 50-person corporate retreats to massive family reunions, our logistical scaling is flawless.</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start group">
                            <div className="h-14 w-14 rounded-full bg-brand-bg flex items-center justify-center text-brand-blue mb-6 border border-brand-text/10 shadow-sm group-hover:scale-110 transition-transform">
                                <HeartHandshake />
                            </div>
                            <h4 className="font-display font-semibold text-xl mb-3">The Kitchen Caravan</h4>
                            <p className="text-brand-text-muted text-sm leading-relaxed">Strict dietary requirements? We can bring the kitchen—and the chef—providing specialized catering for the Jain and Swaminarayan communities across the globe.</p>
                        </div>
                    </div>
                </Container>
            </SectionWrapper>

        </main>
    );
}
