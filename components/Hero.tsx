import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                    alt="Bale Bangket Ambience"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 tracking-tight drop-shadow-md">
                    Experience Serenity & <br /> <span className="text-secondary">Savor Delights</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed shadow-sm">
                    A unique destination blending the comfort of a luxury guesthouse with the vibrant flavors of a public cafe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/rooms">
                        <Button size="lg" className="w-full sm:w-auto">
                            Book a Stay
                        </Button>
                    </Link>
                    <Link href="/cafe">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary-foreground">
                            Explore the Cafe
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
