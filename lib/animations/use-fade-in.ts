import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type UseFadeInProps = {
    ref: RefObject<HTMLElement | null>;
    delay?: number;
    duration?: number;
    yOffset?: number;
    stagger?: number;
    once?: boolean;
};

export function useFadeIn({
    ref,
    delay = 0,
    duration = 0.8,
    yOffset = 30,
    stagger = 0,
    once = true
}: UseFadeInProps) {

    useGSAP(() => {
        if (!ref.current) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isMobile = window.innerWidth < 768;
        if (prefersReducedMotion || isMobile) {
            gsap.set(ref.current, { opacity: 1, y: 0 });
            return;
        }

        gsap.fromTo(
            ref.current,
            { opacity: 0, y: yOffset },
            {
                opacity: 1,
                y: 0,
                delay,
                duration,
                stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    once: once,
                }
            }
        );
    }, { scope: ref });
}
