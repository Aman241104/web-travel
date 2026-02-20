import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type UseStaggerProps = {
    containerRef: RefObject<HTMLElement | null>;
    selector: string;
    staggerTime?: number;
    yOffset?: number;
    duration?: number;
};

export function useStagger({
    containerRef,
    selector,
    staggerTime = 0.1,
    yOffset = 40,
    duration = 0.8
}: UseStaggerProps) {

    useGSAP(() => {
        if (!containerRef.current) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isMobile = window.innerWidth < 768;
        const elements = gsap.utils.toArray(selector, containerRef.current);

        if (prefersReducedMotion || isMobile) {
            gsap.set(elements, { opacity: 1, y: 0 });
            return;
        }

        gsap.fromTo(
            elements,
            { opacity: 0, y: yOffset },
            {
                opacity: 1,
                y: 0,
                stagger: staggerTime,
                duration: duration,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true,
                }
            }
        );
    }, { scope: containerRef });
}
