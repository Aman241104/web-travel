import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "default" | "narrow" | "wide" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "w-full mx-auto px-4 sm:px-6 lg:px-8",
                    {
                        "max-w-[var(--container-max)]": size === "default",
                        "max-w-4xl": size === "narrow",
                        "max-w-7xl": size === "wide",
                        "max-w-full px-0 sm:px-0 lg:px-0": size === "full",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Container.displayName = "Container";

export { Container };
