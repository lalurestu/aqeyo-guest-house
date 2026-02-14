import { Section } from "@/components/ui/Section";
import GalleryGrid from "@/components/GalleryGrid";
import Image from "next/image";

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/img/img7.jpeg"
                        alt="Gallery"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">
                        Moments Captured
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        A visual journey through the serenity and vibrancy of Bale Bangket.
                    </p>
                </div>
            </div>

            <Section className="bg-background">
                <GalleryGrid />
            </Section>
        </div>
    );
}
