"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GSAPProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Configure default GSAP settings for the premium cinematic feel
        gsap.defaults({
            ease: "power2.out", // Softer, more organic deceleration
            duration: 1.2,      // Slower, intentional movements
        });

        // Refresh ScrollTrigger when route changes or DOM stabilizes
        ScrollTrigger.refresh();
    }, []);

    return <>{children}</>;
}
