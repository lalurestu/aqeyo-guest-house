import { Section } from "@/components/ui/Section";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { PrismaClient } from "@prisma/client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

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

    const t = useTranslations('SocialSpace');

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
                        {t('heroTitle')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </div>

            {/* Promo Banner Section */}
            <Section className="bg-secondary/10 py-6 border-y border-secondary/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <span className="bg-secondary text-primary font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wider">{t('promoBadge')}</span>
                        <p className="text-primary font-medium text-lg" dangerouslySetInnerHTML={{ __html: t.raw('promoText') }} />
                    </div>
                </div>
            </Section>

            {/* The Vibe Story Section */}
            <ScrollReveal delay={0.1}>
                <Section className="bg-subtle/10 border-b border-subtle/20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">{t('vibeOverline')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif leading-tight">
                            {t('vibeTitle')}
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                            {t('vibeDesc')}
                        </p>
                        <div className="grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto border-t border-subtle/20 pt-10">
                            <div>
                                <h4 className="text-3xl font-bold text-secondary font-serif mb-1">{t('stat1Val')}</h4>
                                <p className="text-gray-500 text-sm">{t('stat1Desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-secondary font-serif mb-1">{t('stat2Val')}</h4>
                                <p className="text-gray-500 text-sm">{t('stat2Desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-secondary font-serif mb-1">{t('stat3Val')}</h4>
                                <p className="text-gray-500 text-sm">{t('stat3Desc')}</p>
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
                                {t('menuTitle')}
                            </h2>
                            <p className="text-gray-600">
                                {t('menuSubtitle')}
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
                                    <span className="text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-3 block">{t('high1Badge')}</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">{t('high1Title')}</h3>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                        {t('high1Desc')}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-px bg-secondary"></div>
                                        <span className="font-serif italic text-primary">{t('high1Footer')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Highlight 2: Begibung / Se-Sele */}
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-3xl p-6 shadow-md border border-subtle/10 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-6 py-2 rounded-bl-2xl shadow-sm z-10 text-sm md:text-base">
                                    {t('high2Tag')}
                                </div>
                                <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                                    <Image src="/assets/img/menus/sesele.jpeg" alt="Gibung Special House" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="w-full md:w-1/2 md:pr-6 lg:pr-10 text-left pt-6 md:pt-0">
                                    <span className="text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-2 block mt-4 md:mt-0">{t('high2Badge')}</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">{t('high2Title')}</h3>
                                    <div className="text-2xl font-bold text-secondary mb-4">IDR 275.000</div>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        {t('high2Desc')}
                                    </p>
                                    <ul className="space-y-2 mb-8 text-sm md:text-base text-gray-700">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {t('high2List1')}</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {t('high2List2')}</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {t('high2List3')}</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {t('high2List4')}</li>
                                    </ul>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-px bg-secondary"></div>
                                        <span className="font-serif italic text-primary">{t('high2Footer')}</span>
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
                                {t('atmosTitle')}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {t('atmosDesc1')}
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t('atmosDesc2')}
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
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">{t('eventTitle')}</h3>
                                </div>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    {t('eventDesc')}
                                </p>
                            </div>
                            <div className="md:w-1/3 text-center md:text-right">
                                <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20bertanya%20tentang%20booking%20cafe%20untuk%20acara." target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="w-full md:w-auto shadow-xl">
                                        {t('eventBtn')}
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
                            <h3 className="text-3xl font-bold mb-8 font-serif text-primary border-b border-subtle/20 pb-4">{t('visitTitle')}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                {t('visitDesc')}
                            </p>
                            <div className="space-y-8">
                                <div className="flex items-start bg-white p-6 rounded-2xl border border-subtle/10 hover:shadow-lg transition-shadow">
                                    <FaMapMarkerAlt className="text-3xl mt-1 mr-6 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary text-lg mb-2">{t('locTitle')}</p>
                                        <p className="leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('locDesc') }} />
                                    </div>
                                </div>
                                <div className="flex items-start bg-white p-6 rounded-2xl border border-subtle/10 hover:shadow-lg transition-shadow">
                                    <FaClock className="text-3xl mt-1 mr-6 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary text-lg mb-2">{t('hoursTitle')}</p>
                                        <div className="text-gray-600 space-y-1">
                                            <p>{t('hoursDesc1')}</p>
                                            <p>{t('hoursDesc2')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start bg-white p-6 rounded-2xl border border-subtle/10 hover:shadow-lg transition-shadow">
                                    <FaCreditCard className="text-3xl mt-1 mr-6 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary text-lg mb-2">{t('payTitle')}</p>
                                        <p className="leading-relaxed text-gray-600">
                                            {t('payDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reservation Form */}
                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-subtle/10 shadow-xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                            <h3 className="text-3xl font-bold mb-4 font-serif text-primary relative z-10">{t('resTitle')}</h3>
                            <p className="mb-8 leading-relaxed text-gray-600 relative z-10">
                                {t('resDesc')}
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
