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
                        "group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-subtle/20",
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
                            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
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
