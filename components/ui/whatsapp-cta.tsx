import React from "react";
import { MessageCircle } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type IntentCategory =
    | "general"
    | "honeymoon"
    | "corporate"
    | "kitchen-caravan"
    | "family"
    | "visa-inquiry"
    | "sample-request"
    | "direct";

interface WhatsAppCTAProps extends ButtonProps {
    phoneNumber?: string; // e.g. "919876543210" without '+'
    message?: string;
    isFloating?: boolean;
    intentCategory?: IntentCategory;
}

export const WhatsAppCTA = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, WhatsAppCTAProps>(
    (
        {
            phoneNumber = "919000000000", // Default placeholder
            message = "Hello! I am interested in planning a trip.",
            isFloating = false,
            intentCategory = "direct",
            className,
            children,
            variant = "premium",
            size = "default",
            ...props
        },
        ref
    ) => {
        // URL Encode the message
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        const handleClick = (e: React.MouseEvent) => {
            if (intentCategory === "general") {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-intent-modal"));
            }
        };

        if (isFloating) {
            if (intentCategory === "general") {
                return (
                    <button
                        ref={ref as React.Ref<HTMLButtonElement>}
                        onClick={handleClick}
                        className={cn(
                            "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 group",
                            className
                        )}
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle size={28} />
                    </button>
                );
            }
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95",
                        className
                    )}
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle size={28} />
                </a>
            );
        }

        if (intentCategory === "general") {
            return (
                <Button
                    ref={ref as React.Ref<HTMLButtonElement>}
                    variant={variant}
                    size={size}
                    className={cn("gap-2", className)}
                    onClick={handleClick}
                    {...props}
                >
                    <MessageCircle size={18} />
                    {children || "Chat on WhatsApp"}
                </Button>
            );
        }

        return (
            <Button
                asChild
                variant={variant}
                size={size}
                className={cn("gap-2", className)}
                {...props}
            >
                <a ref={ref as React.Ref<HTMLAnchorElement>} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    {children || "Chat on WhatsApp"}
                </a>
            </Button>
        );
    }
);

WhatsAppCTA.displayName = "WhatsAppCTA";
