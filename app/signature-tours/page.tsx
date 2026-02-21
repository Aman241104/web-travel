"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const gridRef = useRef<HTMLDivElement>(null);
    const trustBlocksRef = useRef<HTMLDivElement>(null);

    // Initial GSAP registration
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    // Sync state with Navbar CustomEvent
    useEffect(() => {
        const handleCategoryChange = (e: any) => {
            if (e.detail) setActiveCategory(e.detail);
        };
        window.addEventListener('categoryChange', handleCategoryChange);
        return () => window.removeEventListener('categoryChange', handleCategoryChange);
    }, []);

    // Filter logic
    const filteredExperiences = activeCategory === "all"
        ? EXPERIENCES
        : EXPERIENCES.filter(exp => exp.category === activeCategory);

    // GSAP Grid Stagger Animation
    useEffect(() => {
        if (!gridRef.current) return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('.tour-card-wrapper');
            gsap.set(cards, { opacity: 0, y: 50 });

            ScrollTrigger.batch(cards, {
                onEnter: (elements) => {
                    gsap.to(elements, {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "power3.out",
                        overwrite: "auto" // Pre-empts conflicts to ensure smooth updates
                    });
                },
                once: true // Ensure it only animates in once
            });
        }, gridRef);

        return () => ctx.revert();
    }, [filteredExperiences]); // Re-run when filter changes

    // GSAP Trust Blocks Animation
    useEffect(() => {
        if (!trustBlocksRef.current) return;

        const ctx = gsap.context(() => {
            const blocks = gsap.utils.toArray<HTMLElement>('.trust-block');
            gsap.fromTo(blocks,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: trustBlocksRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, trustBlocksRef);

        return () => ctx.revert();
    }, []);

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
            <SectionWrapper background="default" spacing="default" className="pt-24 md:pt-24 z-10 relative">
                <Container>
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {filteredExperiences.map((exp, idx) => (
                            <div key={exp.id} className={`tour-card-wrapper ${idx % 2 !== 0 ? "md:mt-24" : ""}`}>
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
            <SectionWrapper background="alt" spacing="default" className="border-t border-brand-text/5 mt-16 md:mt-32 pb-32">
                <Container className="max-w-6xl">
                    <div ref={trustBlocksRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
                        {/* Beautiful background accent */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-gradient-to-b from-brand-accent/5 via-brand-accent/5 to-transparent blur-3xl -z-10 rounded-full" />

                        <div className="trust-block flex flex-col items-center md:items-start group p-8 md:p-10 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-brand-text/5">
                            <div className="h-16 w-16 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-blue mb-8 border border-brand-text/10 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <h4 className="font-display font-semibold text-2xl mb-4 text-brand-text">The Bureaucracy Shield</h4>
                            <p className="text-brand-text-muted text-base leading-relaxed font-light">Visas, complex global forex, and travel insurance. We handle the friction so you never have to.</p>
                        </div>

                        <div className="trust-block flex flex-col items-center md:items-start group p-8 md:p-10 bg-brand-blue rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,82,255,0.2)] transition-all duration-500 transform md:-translate-y-4">
                            <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-8 border border-white/20 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                <Briefcase className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <h4 className="font-display font-semibold text-2xl mb-4 text-white">The Group Advantage</h4>
                            <p className="text-white/80 text-base leading-relaxed font-light">From 50-person corporate retreats to massive family reunions, our logistical scaling is flawless.</p>
                        </div>

                        <div className="trust-block flex flex-col items-center md:items-start group p-8 md:p-10 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-brand-text/5">
                            <div className="h-16 w-16 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-blue mb-8 border border-brand-text/10 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <HeartHandshake className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <h4 className="font-display font-semibold text-2xl mb-4 text-brand-text">The Kitchen Caravan</h4>
                            <p className="text-brand-text-muted text-base leading-relaxed font-light">Strict dietary requirements? We can bring the kitchen—and the chef—providing specialized catering for the Jain and Swaminarayan communities across the globe.</p>
                        </div>
                    </div>
                </Container>
            </SectionWrapper>

        </main>
    );
}
