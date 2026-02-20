import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: "default" | "large" | "none" | "hero";
    background?: "default" | "alt" | "dark" | "transparent";
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
    ({ className, spacing = "default", background = "default", ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "relative w-full",
                    {
                        "py-16 md:py-24 lg:py-32": spacing === "default",
                        "py-24 md:py-32 lg:py-48": spacing === "large",
                        "pb-16 pt-32 md:pb-24 md:pt-48": spacing === "hero",
                        "py-0": spacing === "none",
                        "bg-brand-bg": background === "default",
                        "bg-brand-bg-alt": background === "alt",
                        "bg-brand-text text-brand-bg": background === "dark",
                        "bg-transparent": background === "transparent",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
