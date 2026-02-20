import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ className, type = "text", icon, ...props }, ref) => {
        return (
            <div className="relative flex items-center w-full">
                {icon && (
                    <div className="absolute left-4 text-brand-text/50 pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-14 w-full rounded-xl bg-transparent px-4 py-2 text-base text-brand-text placeholder:text-brand-text/30 transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-white/50 disabled:cursor-not-allowed disabled:opacity-50",
                        icon && "pl-12",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
InputField.displayName = "InputField";

export { InputField };
