import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
                        Susasana Yang Nyaman Menanti Anda
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Rasakan kenyamanan, gaya, dan ketenangan di kamar kami yang dirancang dengan penuh perhatian.
                    </p>
                </div>
            </div>

            {/* Room List Section */}
            <Section className="bg-background">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
                        Kamar Kami
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Setiap kamar dirancang untuk kenyamanan Anda, memadukan fasilitas modern dengan estetika lokal yang khas.
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
                                <p className="text-primary font-bold text-lg mb-4">{room.price} <span className="text-sm text-gray-500 font-normal">/ malam</span></p>

                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {room.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-primary mb-2">Fasilitas Unggulan:</h4>
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
                                    href={`https://wa.me/6285253357789?text=Halo Aqeyo, saya tertarik untuk booking kamar: *${room.name}*. Mohon info ketersediaannya.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <Button className="w-full">
                                        Pesan via WhatsApp
                                    </Button>
                                </a>
                            </Card>
                        );
                    })}
                </div>
            </Section>

            {/* House Facilities Section (Data dari Admin) */}
            <Section className="bg-subtle/5">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Paket Eksklusif</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif">
                        Fasilitas Sewa Satu Rumah
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Kami menawarkan paket penyewaan satu rumah utuh yang sudah mencakup berbagai fasilitas eksklusif untuk memberikan kenyamanan dan privasi maksimal bagi keluarga Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto px-4">
                    {/* Data mock (nanti diisi dari database yang diinput admin) */}
                    {[
                        { title: "2 Kamar Tidur Utama", image: "/assets/img/img1.jpeg" },
                        { title: "Kamar Mandi Semi Terbuka", image: "/assets/img/img2.jpeg" },
                        { title: "Dapur Lengkap", image: "/assets/img/img3.jpeg" },
                        { title: "Ruang Keluarga Luas", image: "/assets/img/img4.jpeg" },
                        { title: "Teras Santai View Alam", image: "/assets/img/img5.jpeg" },
                        { title: "Area Parkir Pribadi", image: "/assets/img/img6.jpeg" },
                    ].map((item, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-6 md:p-8 flex-grow flex items-center justify-center">
                                <h3 className="text-xl md:text-2xl font-bold text-primary font-serif text-center group-hover:text-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
