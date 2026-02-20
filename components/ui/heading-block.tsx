import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    alignment?: "left" | "center" | "right";
    size?: "default" | "large" | "hero";
}

const HeadingBlock = React.forwardRef<HTMLDivElement, HeadingBlockProps>(
    ({ className, title, subtitle, alignment = "left", size = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-col gap-4",
                    {
                        "items-start text-left": alignment === "left",
                        "items-center text-center": alignment === "center",
                        "items-end text-right": alignment === "right",
                    },
                    className
                )}
                {...props}
            >
                <h2
                    className={cn(
                        "font-display font-semibold tracking-tight text-brand-text",
                        {
                            "text-3xl md:text-4xl lg:text-5xl": size === "default",
                            "text-4xl md:text-5xl lg:text-6xl": size === "large",
                            "text-5xl md:text-7xl lg:text-8xl": size === "hero",
                        }
                    )}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p
                        className={cn(
                            "text-brand-text/70 max-w-2xl font-sans",
                            {
                                "text-base md:text-lg": size === "default",
                                "text-lg md:text-xl": size === "large" || size === "hero",
                            }
                        )}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        );
    }
);
HeadingBlock.displayName = "HeadingBlock";

export { HeadingBlock };
