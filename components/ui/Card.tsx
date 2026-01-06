import { HTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    image?: string;
    imageAlt?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, image, imageAlt, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={twMerge(
                    clsx(
                        "group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-subtle/10",
                        className
                    )
                )}
                {...props}
            >
                {image && (
                    <div className="relative h-64 w-full overflow-hidden">
                        <Image
                            src={image}
                            alt={imageAlt || "Card image"}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
                <div className="p-6">{children}</div>
            </div>
        );
    }
);

Card.displayName = "Card";

export { Card };
