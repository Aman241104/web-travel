import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-brand-text text-white hover:bg-brand-text/90 shadow-sm",
                outline: "border border-brand-text/20 bg-transparent hover:bg-brand-text hover:text-white text-brand-text",
                ghost: "hover:bg-brand-text/5 text-brand-text",
                premium: "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-[0_8px_20px_rgba(0,82,255,0.25)] hover:shadow-[0_12px_30px_rgba(0,82,255,0.4)] hover:-translate-y-0.5",
                link: "text-brand-text underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-4",
                lg: "h-14 rounded-md px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        if (asChild && React.isValidElement(props.children)) {
            const child = props.children as React.ReactElement<any>;
            return React.cloneElement(child, {
                className: cn(buttonVariants({ variant, size }), child.props.className, className),
                ref,
                ...props,
                children: child.props.children
            });
        }

        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
