import { HTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={twMerge(clsx("py-16 md:py-24", className))}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = "Section";

export { Section };
