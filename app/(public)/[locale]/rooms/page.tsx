import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { FaWifi, FaCoffee, FaShower, FaTv, FaSwimmingPool, FaParking } from "react-icons/fa";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const amenities = [
    { icon: FaWifi, label: "Free High-Speed Wi-Fi" },
    { icon: FaSwimmingPool, label: "Swimming Pool Access" },
    { icon: FaCoffee, label: "Breakfast Included" },
    { icon: FaParking, label: "Free Parking" },
    { icon: FaTv, label: "Smart TV in Rooms" },
    { icon: FaShower, label: "Hot & Cold Shower" },
];

// Helper to safe parse amenities
const parseAmenities = (jsonString: string) => {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return [];
    }
}

export default async function RoomsPage() {
    const rooms = await prisma.room.findMany({
        orderBy: { createdAt: 'asc' }
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/img/img8.jpeg"
                        alt="Room Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">
                        Your Sanctuary Awaits
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Experience comfort, style, and tranquility in our carefully appointed rooms.
                    </p>
                </div>
            </div>

            {/* Room List Section */}
            <Section className="bg-background">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
                        Our Rooms
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Each room is designed with your relaxation in mind, blending modern amenities with local aesthetics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room: any) => {
                        const roomAmenities = parseAmenities(room.amenities);
                        return (
                            <Card key={room.id} image={room.image} imageAlt={room.name} className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-primary font-serif">
                                        {room.name}
                                    </h3>
                                </div>
                                <p className="text-primary font-bold text-lg mb-4">{room.price} <span className="text-sm text-gray-500 font-normal">/ night</span></p>

                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {room.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-primary mb-2">Highlights:</h4>
                                    <ul className="text-sm text-gray-500 grid grid-cols-2 gap-x-2 gap-y-1">
                                        {roomAmenities.map((item: string, i: number) => (
                                            <li key={i} className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={`https://wa.me/6285333000452?text=Halo Aqeyo, saya tertarik untuk booking kamar: *${room.name}*. Mohon info ketersediaannya.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <Button className="w-full">
                                        Book via WhatsApp
                                    </Button>
                                </a>
                            </Card>
                        );
                    })}
                </div>
            </Section>

            {/* General Amenities Section */}
            <Section className="bg-subtle/5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
                        Included Amenities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need for a comfortable and convenient stay.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-subtle/10 text-center hover:shadow-md transition-shadow">
                            <item.icon className="text-3xl text-primary mb-3" />
                            <span className="text-sm font-medium text-foreground">{item.label}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
