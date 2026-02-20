import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type UseParallaxProps = {
    ref: RefObject<HTMLElement | null>;
    speed?: number; // 0 (none) to 1 (max)
    scale?: number;
};

export function useParallax({ ref, speed = 0.5, scale = 1.1 }: UseParallaxProps) {
    useGSAP(() => {
        if (!ref.current) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return; // disable parallax

        // Start slightly scaled up
        gsap.set(ref.current, { scale });

        gsap.to(ref.current, {
            y: () => window.innerHeight * speed,
            scale: 1, // smoothly scale down to 1 while scrolling
            ease: "none",
            scrollTrigger: {
                trigger: ref.current.parentElement, // use parent as trigger to avoid jumping
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, { scope: ref });
}
