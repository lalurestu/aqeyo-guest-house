import { Section } from "@/components/ui/Section";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { PrismaClient } from "@prisma/client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const prisma = new PrismaClient();

export default async function SocialSpacePage() {
    let menus: any[] = [];
    try {
        menus = await prisma.menu.findMany();
    } catch (error) {
        console.error("Failed to fetch menus from database:", error);
    }

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
            <div className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
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
                        Perjalanan kuliner yang menikmati hidangan lokal dengan cita rasa khas Lombok.
                    </p>
                </div>
            </div>

            {/* Promo Banner Section */}
            <Section className="bg-secondary/10 py-6 border-y border-secondary/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <span className="bg-secondary text-primary font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wider">Promo Khusus</span>
                        <p className="text-primary font-medium text-lg">
                            Diskon <strong className="text-xl text-secondary">10%</strong> untuk semua menu F&B bagi tamu yang menginap di AQEYO House!
                        </p>
                    </div>
                </div>
            </Section>

            {/* The Vibe Story Section */}
            <ScrollReveal delay={0.1}>
                <Section className="bg-subtle/10 border-b border-subtle/20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Lebih Dari Sekadar Cafe</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif leading-tight">
                            Tempat Dimana Rasa & Cerita Bertemu
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                            Di AQEYO Social Space, kami percaya bahwa makanan yang lezat terasa lebih nikmat saat dibagikan. Dengan arsitektur semi-terbuka yang menyatu dengan alam, seduhan kopi lokal pilihan, serta hembusan angin yang menenangkan, tempat ini dirancang sempurna untuk obrolan sore, bekerja dari jauh, atau sekadar merayakan kehidupan.
                        </p>
                        <div className="grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto border-t border-subtle/20 pt-10">
                            <div>
                                <h4 className="text-3xl font-bold text-secondary font-serif mb-1">100%</h4>
                                <p className="text-gray-500 text-sm">Masakan Lokal NTB</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-secondary font-serif mb-1">Semi</h4>
                                <p className="text-gray-500 text-sm">Outdoor Fresh Air</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-secondary font-serif mb-1">Free</h4>
                                <p className="text-gray-500 text-sm">High-Speed WiFi</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* Menu Section */}
            <div className="w-full">
                <ScrollReveal>
                    <Section className="bg-background pt-12 md:pt-16 pb-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
                                Signature & Menu Utama
                            </h2>
                            <p className="text-gray-600">
                                Dibuat dengan bahan segar, resep otentik, dan semangat lokal.
                            </p>
                        </div>

                        {/* Signature Highlight (Visual Redesign) */}
                        <div className="flex flex-col gap-8 md:gap-16 mb-20 px-4 md:px-8 max-w-5xl mx-auto">
                            {/* Highlight 1: Masakan Rumahan */}
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 shadow-md border border-subtle/10 hover:shadow-xl transition-all duration-500">
                                <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                                    <Image src="/assets/img/img3.jpeg" alt="Masakan Rumahan" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="w-full md:w-1/2 md:pl-6 lg:pl-10">
                                    <span className="text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-3 block">Masakan Rumahan</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">Cita Rasa Otentik</h3>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                        Nikmati kehangatan masakan rumahan khas nusantara. Mulai dari Nasi Rawon pekat nan gurih hingga Nasi Bakar Kemangi yang harum, semua diracik dengan bumbu rempah pilihan layaknya masakan ibu.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-px bg-secondary"></div>
                                        <span className="font-serif italic text-primary">Main Course</span>
                                    </div>
                                </div>
                            </div>

                            {/* Highlight 2: Begibung / Se-Sele */}
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-3xl p-6 shadow-md border border-subtle/10 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-6 py-2 rounded-bl-2xl shadow-sm z-10 text-sm md:text-base">
                                    Recommended for Family
                                </div>
                                <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                                    <Image src="/assets/img/menus/sesele.jpeg" alt="Gibung Special House" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="w-full md:w-1/2 md:pr-6 lg:pr-10 text-left pt-6 md:pt-0">
                                    <span className="text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-2 block mt-4 md:mt-0">Paket Se-Sele / Begibung</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">Gibung Special House</h3>
                                    <div className="text-2xl font-bold text-secondary mb-4">IDR 275.000</div>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        Pilihan terbaik untuk makan bersama keluarga atau rombongan. Disajikan lengkap (*Complete Meal Set*) dengan cita rasa Nusantara.
                                    </p>
                                    <ul className="space-y-2 mb-8 text-sm md:text-base text-gray-700">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Fish & Chicken</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Spinach / Moringa Clear Soup</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Beberoq / Pelecing Kangkung</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Tofu, Tempe & Rice</li>
                                    </ul>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-px bg-secondary"></div>
                                        <span className="font-serif italic text-primary">Tradisi Makan Bersama</span>
                                    </div>
                                </div>
                            </div>
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
                </ScrollReveal>

                {/* Atmosphere Gallery Mockup */}
                <ScrollReveal delay={0.2}>
                    <Section className="bg-subtle/5 pt-0 lg:pt-16">
                        <div className="text-center mb-12 max-w-3xl mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                                Suasana Tempat
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Kami mendesain AQEYO Social Space dengan perpaduan elemen industrial yang modern dan keasrian alam tropis. Semilir angin sepoi-sepoi, cahaya matahari alami, serta tata letak tempat duduk yang lapang memberikan Anda kebebasan bernapas yang sesungguhnya.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Baik Anda datang sendiri untuk fokus bekerja, maupun bersama rombongan untuk bersantai, ada sudut istimewa yang menanti Anda di sini.
                            </p>
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
                </ScrollReveal>

                {/* Private Event & Group Booking Banner */}
                <ScrollReveal delay={0.3}>
                    <Section className="bg-primary overflow-hidden relative py-16">
                        <div className="absolute inset-0 opacity-10"></div>
                        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div className="md:w-2/3">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                    <FaCalendarAlt className="text-secondary text-2xl" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">Private Event & Group Booking</h3>
                                </div>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    Butuh tempat untuk acara ulang tahun, arisan, meeting kecil, atau reuni? AQEYO Social Space menyediakan paket khusus untuk acara Anda.
                                </p>
                            </div>
                            <div className="md:w-1/3 text-center md:text-right">
                                <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20bertanya%20tentang%20booking%20cafe%20untuk%20acara." target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="w-full md:w-auto shadow-xl">
                                        Tanya Paket Acara
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Section>
                </ScrollReveal>

            </div>

            {/* Footer Info & Reservation Section (Full Width Split) */}
            <ScrollReveal delay={0.4}>
                <Section className="bg-subtle/10 border-t border-subtle/20">
                    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Location & Hours */}
                        <div>
                            <h3 className="text-3xl font-bold mb-8 font-serif text-primary border-b border-subtle/20 pb-4">Kunjungi Kami</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Berlokasi di Desa Kotaraja, Sikur, Lombok Timur. Kami menantikan kehadiran Anda untuk menikmati hidangan dan suasana khas AQEYO House.
                            </p>
                            <div className="space-y-8">
                                <div className="flex items-start bg-white p-6 rounded-2xl border border-subtle/10 hover:shadow-lg transition-shadow">
                                    <FaMapMarkerAlt className="text-3xl mt-1 mr-6 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary text-lg mb-2">Lokasi Kami</p>
                                        <p className="leading-relaxed text-gray-600">
                                            Kotaraja, Sikur,<br />
                                            Lombok Timur, NTB, Indonesia <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-white p-6 rounded-2xl border border-subtle/10 hover:shadow-lg transition-shadow">
                                    <FaClock className="text-3xl mt-1 mr-6 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary text-lg mb-2">Jam Operasional</p>
                                        <div className="text-gray-600 space-y-1">
                                            <p>Senin - Jumat: 10.00 - 22.00 WITA</p>
                                            <p>Sabtu - Minggu: 10.00 - 23.59 WITA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start bg-white p-6 rounded-2xl border border-subtle/10 hover:shadow-lg transition-shadow">
                                    <FaCreditCard className="text-3xl mt-1 mr-6 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary text-lg mb-2">Metode Pembayaran</p>
                                        <p className="leading-relaxed text-gray-600">
                                            Kami menerima pembayaran Tunai, QRIS (Semua E-Wallet/Mobile Banking), dan Transfer Bank.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reservation Form */}
                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-subtle/10 shadow-xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                            <h3 className="text-3xl font-bold mb-4 font-serif text-primary relative z-10">Reservasi Meja</h3>
                            <p className="mb-8 leading-relaxed text-gray-600 relative z-10">
                                Pastikan Anda mendapatkan tempat terbaik. Silakan isi form di bawah ini untuk melakukan reservasi.
                            </p>
                            <div className="relative z-10">
                                <ReservationForm />
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>
        </div>
    );
}
