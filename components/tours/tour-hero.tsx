"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Star, Clock, CalendarHeart, ArrowLeft } from "lucide-react";

interface TourHeroProps {
    destination: string;
    title: string;
    image: string;
    duration: string;
    bestTime: string;
    cities: string[];
}

export function TourHero({ destination, title, image, duration, bestTime, cities }: TourHeroProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // FIX: Don't start from opacity:0 for hero content — causes blank page if timing is off.
        // Instead animate FROM a slight y-offset only, opacity stays 1 (no invisible flash).
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(contentRef.current, { y: 35, duration: 1.1, delay: 0.15 })
            .from(rightRef.current, { x: 25, duration: 1 }, "-=0.8");

        return () => { tl.kill(); };
    }, []);

    return (
        <section className="relative w-full min-h-[100vh] md:h-[100vh] flex flex-col md:flex-row bg-brand-blue">
            {/* LEFT: Cinematic image + content */}
            <div className="relative w-full md:w-[62%] h-[65vh] md:h-full isolate flex flex-col justify-end p-6 sm:p-12 lg:p-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={image}
                        alt={destination}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 62vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>

                {/* FIX: Back button moved to top-24 (96px) to clear the floating navbar height */}
                <Link
                    href="/signature-tours"
                    className="absolute top-24 left-6 md:left-8 z-20 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/20 transition-all"
                >
                    <ArrowLeft size={14} />
                    All Experiences
                </Link>

                {/* Hero content — always visible, only subtle y-slide animation */}
                <div ref={contentRef} className="relative z-10 w-full max-w-2xl text-white">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest uppercase">
                            {destination} · Curated by Universal Travel Planners
                        </span>
                    </div>

                    <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] drop-shadow-xl mb-8">
                        {title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-white/90">
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-brand-accent" />
                            {duration}
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarHeart size={16} className="text-brand-accent" />
                            Best: {bestTime}
                        </div>
                        <div className="flex items-center gap-1 text-amber-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                            <span className="text-white/70 ml-1.5 text-xs">VIP Rated</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: Route panel — solid dark brand blue */}
            <div
                ref={rightRef}
                className="w-full md:w-[38%] h-auto md:h-full bg-brand-blue flex flex-col justify-center p-8 sm:p-12 lg:p-16 border-l border-white/10"
            >
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-10">
                    Route Visualization
                </h3>

                <div className="relative pl-6 border-l border-white/10 space-y-10">
                    {cities.map((city, idx) => (
                        <div key={idx} className="relative">
                            <div className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 ${idx === 0
                                    ? "border-brand-accent bg-brand-accent shadow-[0_0_10px_rgba(0,82,255,0.7)]"
                                    : idx === cities.length - 1
                                        ? "border-emerald-400 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                                        : "border-white/40 bg-transparent"
                                }`} />
                            <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-1">{city}</h4>
                            <p className="text-sm text-white/35 font-light">
                                {idx === 0 ? "Touchdown & VIP Transfer"
                                    : idx === cities.length - 1 ? "Farewell Protocol"
                                        : "Immersive Exploration"}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-[10px] text-brand-accent font-bold uppercase tracking-[0.25em] mt-12 pt-8 border-t border-white/10">
                    Scroll to explore the experience ↓
                </p>
            </div>
        </section>
    );
}
