import { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useMagneticButton(ref: RefObject<HTMLElement | null>, strength: number = 20) {
    const { contextSafe } = useGSAP({ scope: ref });

    const onMouseMove = contextSafe((e: MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(ref.current, {
            x: (x / rect.width) * strength,
            y: (y / rect.height) * strength,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    const onMouseLeave = contextSafe(() => {
        if (!ref.current) return;
        gsap.to(ref.current, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)",
        });
    });

    useGSAP(() => {
        if (!ref.current) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const el = ref.current;
        el.addEventListener("mousemove", onMouseMove);
        el.addEventListener("mouseleave", onMouseLeave);

        return () => {
            el.removeEventListener("mousemove", onMouseMove);
            el.removeEventListener("mouseleave", onMouseLeave);
        };
    }, { scope: ref });
}
