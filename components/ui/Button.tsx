import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "secondary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={twMerge(
                    clsx(
                        "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                        {
                            "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg": variant === "secondary",
                            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground": variant === "outline",
                            "hover:bg-subtle/10 text-foreground": variant === "ghost",

                            "h-9 px-4 text-sm": size === "sm",
                            "h-11 px-6 text-base": size === "md",
                            "h-14 px-8 text-lg": size === "lg",
                        },
                        className
                    )
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
