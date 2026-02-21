"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Users, Send } from "lucide-react";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";

export function GlassBookingWidget({ className }: { className?: string }) {
    const [destination, setDestination] = useState("");
    const [travelers, setTravelers] = useState("");

    const message = `Hi team! I'm interested in planning a trip${destination ? ` to ${destination}` : ''}${travelers ? ` for ${travelers} people` : ''}. Can you help me customize an itinerary?`;

    return (
        <div className={cn("bg-white/5 backdrop-blur-2xl border border-white/10 p-4 md:p-6 rounded-[2rem] md:rounded-full shadow-2xl w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-3 items-center justify-between relative overflow-hidden", className)}>

            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />

            {/* Input 1: Destination */}
            <div className="flex-1 w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-full px-6 py-4 flex items-center gap-4 transition-colors focus-within:bg-white/10 hover:bg-white/10 relative z-10 group">
                <MapPin className="text-white/60 w-5 h-5 group-hover:text-white/90 transition-colors" />
                <div className="flex-1">
                    <label className="text-white/50 text-[10px] font-semibold uppercase tracking-[0.15em] block mb-1">Where to?</label>
                    <input
                        type="text"
                        placeholder="Maldives, Turkey, Sri Lanka..."
                        className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full font-medium text-lg leading-tight"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-white/10 relative z-10"></div>

            {/* Input 2: Travelers */}
            <div className="flex-1 w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-full px-6 py-4 flex items-center gap-4 transition-colors focus-within:bg-white/10 hover:bg-white/10 relative z-10 group">
                <Users className="text-white/60 w-5 h-5 group-hover:text-white/90 transition-colors" />
                <div className="flex-1">
                    <label className="text-white/50 text-[10px] font-semibold uppercase tracking-[0.15em] block mb-1">Travelers</label>
                    <select
                        className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full font-medium text-lg appearance-none cursor-pointer leading-tight"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                    >
                        <option value="" disabled className="text-black">Select Guests</option>
                        <option value="1-2" className="text-black">1 - 2 Guests (Couple)</option>
                        <option value="3-5" className="text-black">3 - 5 Guests (Family)</option>
                        <option value="6+" className="text-black">6+ Guests (Group)</option>
                        <option value="Corporate" className="text-black">Corporate Team</option>
                    </select>
                </div>
            </div>

            {/* Action */}
            <div className="w-full md:w-auto relative z-10 shrink-0">
                <WhatsAppCTA
                    message={message}
                    className="w-full md:w-auto h-full px-8 py-5 md:py-0 md:h-[72px] rounded-2xl md:rounded-full bg-brand-accent hover:bg-brand-blue text-white transition-all shadow-lg hover:shadow-brand-accent/40 group flex !flex-row !items-center !justify-center gap-3 border border-brand-accent/50 hover:border-brand-blue"
                >
                    <span className="font-medium tracking-wide text-lg whitespace-nowrap leading-none mt-0.5">Inquire Now</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
                </WhatsAppCTA>
            </div>
        </div>
    );
}
