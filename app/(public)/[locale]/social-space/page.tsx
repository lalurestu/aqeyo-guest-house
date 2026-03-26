import { Section } from "@/components/ui/Section";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function SocialSpacePage() {
    const menus = await prisma.menu.findMany();

    // Group menus by category
    const groupedMenus = menus.reduce((acc: Record<string, { name: string; price: string; desc: string }[]>, item: any) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push({
            name: item.name,
            price: item.price,
            desc: item.description
        });
        return acc;
    }, {});

    // Categories in display order
    const categoryOrder = ["Makanan", "Minuman", "Paket Se-Sele/Begibung", "Snack", "Dessert", "Tambahan"];
    const menuCategories = categoryOrder
        .filter(cat => groupedMenus[cat])
        .map(cat => ({
            title: cat,
            items: groupedMenus[cat]
        }));

    // Add any remaining categories not in the explicit order
    const remainingCategories = Object.keys(groupedMenus).filter(cat => !categoryOrder.includes(cat));
    remainingCategories.forEach(cat => {
        menuCategories.push({
            title: cat,
            items: groupedMenus[cat]
        });
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/img/img5.jpeg"
                        alt="Social Space Ambience"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">
                        Nikmati Setiap Sajian
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Perjalanan kuliner yang merayakan bahan-bahan lokal dengan cita rasa khas Lombok.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0">
                {/* Menu Section (2/3 width on large screens) */}
                <div className="lg:col-span-2">
                    <Section className="bg-background">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
                                Menu Kami
                            </h2>
                            <p className="text-gray-600">
                                Disiapkan segar setiap hari dengan penuh cinta dan semangat.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {menuCategories.map((category, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-subtle/10">
                                    <h3 className="text-2xl font-bold text-secondary-foreground mb-6 border-b border-subtle/10 pb-2">
                                        {category.title}
                                    </h3>
                                    <div className="space-y-6">
                                        {category.items.map((item: any, i: number) => (
                                            <div key={i} className="flex justify-between items-start group">
                                                <div>
                                                    <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                                </div>
                                                <span className="font-bold text-primary">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Atmosphere Gallery Mockup */}
                    <Section className="bg-subtle/5 pt-0 lg:pt-16">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-serif">
                                Suasana Tempat
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
                            <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden">
                                <Image src="/assets/img/img7.jpeg" alt="Social Space Interior" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image src="/assets/img/img8.jpeg" alt="Latte Art" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image src="/assets/img/img3.jpeg" alt="Food" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative col-span-2 rounded-xl overflow-hidden">
                                <Image src="/assets/img/img6.jpeg" alt="Outdoor Seating" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </Section>
                </div>

                {/* Sidebar Info & Reservation (1/3 width) */}
                <div className="lg:col-span-1 bg-success text-white p-8 lg:p-12 lg:min-h-screen">
                    <div className="sticky top-24 space-y-12">

                        {/* Location & Hours */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 font-serif text-secondary">Kunjungi Kami</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-xl mt-1 mr-4 text-secondary/80" />
                                    <p className="leading-relaxed text-white/90">
                                        Kotaraja, Sikur,<br />
                                        Lombok Timur, NTB, Indonesia <br />
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <FaClock className="text-xl mt-1 mr-4 text-secondary/80" />
                                    <div className="text-white/90">
                                        <p className="font-semibold mb-1">Jam Buka</p>
                                        <p>Senin - Jumat: 9.00 - 22.00</p>
                                        <p>Sabtu - Minggu: 9.00 - 23.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reservation Form */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 font-serif text-secondary">Reservasi</h3>
                            <p className="mb-6 leading-relaxed text-white/90">
                                Reservasi tempat duduk untuk pengalaman bersantap yang tak terlupakan. Untuk rombongan besar, hubungi kami langsung.
                            </p>
                            <ReservationForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
