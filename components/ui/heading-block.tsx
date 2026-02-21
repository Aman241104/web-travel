import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    alignment?: "left" | "center" | "right";
    size?: "default" | "large" | "hero" | "editorial";
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
                        "font-display tracking-tight text-brand-text",
                        {
                            "font-semibold text-3xl md:text-4xl lg:text-5xl": size === "default",
                            "font-semibold text-4xl md:text-5xl lg:text-6xl": size === "large",
                            "font-bold text-5xl md:text-7xl lg:text-8xl": size === "hero",
                            "font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05]": size === "editorial",
                        }
                    )}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p
                        className={cn(
                            "text-brand-text-muted max-w-2xl font-sans",
                            {
                                "text-base md:text-lg font-light leading-relaxed": size === "default",
                                "text-lg md:text-xl font-light leading-relaxed": size === "large" || size === "hero",
                                "text-lg md:text-xl font-light leading-relaxed tracking-wide": size === "editorial",
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
