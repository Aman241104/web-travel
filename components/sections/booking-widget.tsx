"use client";

import { useRef, useState } from "react";
import { useFadeIn } from "@/lib/animations/use-fade-in";
import { Container } from "@/components/ui/container";
import { InputField } from "@/components/ui/input-field";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { MapPin, Calendar, Users } from "lucide-react";

export function BookingWidget() {
    const widgetRef = useRef<HTMLDivElement>(null);
    const [destination, setDestination] = useState("");
    const [dates, setDates] = useState("");
    const [guests, setGuests] = useState("");

    // Slide up entry animation as it enters viewport
    useFadeIn({ ref: widgetRef, delay: 0.4, duration: 1, yOffset: 60 });

    // Generate dynamic WhatsApp message based on input fields "Fake Search"
    const generateMessage = () => {
        let msg = "Hi! I'm interested in planning a trip.";
        if (destination) msg += `\nDestination: ${destination}`;
        if (dates) msg += `\nPreferred Dates: ${dates}`;
        if (guests) msg += `\nTravelers: ${guests}`;
        return msg;
    };

    return (
        <Container className="relative z-20 -mt-24 md:-mt-32 mb-16 px-4">
            <div
                ref={widgetRef}
                className="glass-panel w-full max-w-5xl mx-auto rounded-[2rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 bg-white/90 backdrop-blur-2xl"
            >
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center w-full">

                    <div className="flex-1 w-full relative">
                        <span className="text-xs font-medium text-brand-text/60 pl-4 mb-1 block uppercase tracking-wider">Where to?</span>
                        <InputField
                            icon={<MapPin size={20} />}
                            placeholder="e.g. Swiss Alps, Maldives..."
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="bg-brand-bg-alt border-transparent focus:bg-white"
                        />
                    </div>

                    <div className="w-px h-12 bg-brand-text/10 hidden lg:block" />

                    <div className="flex-1 w-full relative">
                        <span className="text-xs font-medium text-brand-text/60 pl-4 mb-1 block uppercase tracking-wider">When?</span>
                        <InputField
                            icon={<Calendar size={20} />}
                            placeholder="e.g. October 2026"
                            value={dates}
                            onChange={(e) => setDates(e.target.value)}
                            className="bg-brand-bg-alt border-transparent focus:bg-white"
                        />
                    </div>

                    <div className="w-px h-12 bg-brand-text/10 hidden lg:block" />

                    <div className="flex-[0.8] w-full relative">
                        <span className="text-xs font-medium text-brand-text/60 pl-4 mb-1 block uppercase tracking-wider">Who?</span>
                        <InputField
                            icon={<Users size={20} />}
                            placeholder="e.g. 2 Adults, 1 Child"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="bg-brand-bg-alt border-transparent focus:bg-white"
                        />
                    </div>

                    <div className="flex-shrink-0 w-full lg:w-auto mt-2 lg:mt-0 lg:ml-2">
                        <WhatsAppCTA
                            className="w-full h-14 rounded-xl font-medium tracking-wide shadow-[0_8px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all ease-out duration-500"
                            message={generateMessage()}
                            variant="premium"
                        >
                            Check Availability
                        </WhatsAppCTA>
                    </div>

                </div>
            </div>
        </Container>
    );
}
