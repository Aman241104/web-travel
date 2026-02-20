import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    elevation?: "none" | "sm" | "md" | "lg";
    interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, elevation = "sm", interactive = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl border border-black/5 bg-white overflow-hidden text-brand-text",
                    {
                        "shadow-none": elevation === "none",
                        "shadow-sm": elevation === "sm",
                        "shadow-md": elevation === "md",
                        "shadow-lg": elevation === "lg",
                        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(11,19,43,0.12)]": interactive,
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
