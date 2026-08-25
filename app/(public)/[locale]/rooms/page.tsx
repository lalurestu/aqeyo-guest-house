import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaCheckCircle, FaInfoCircle, FaStar, FaShieldAlt, FaHeart, FaWifi, FaTv, FaUtensils, FaParking, FaSnowflake, FaSwimmingPool } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function RoomsPage() {
    const t = useTranslations('Rooms');

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/img/rooms/space3.jpeg"
                        alt="Room Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white font-serif mb-4"
                        dangerouslySetInnerHTML={{ __html: t.raw('heroTitle') }}
                    />
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </div>


            {/* House Facilities Section - Non-Card Elegant Layout */}
            <ScrollReveal>
                <Section className="bg-subtle/5">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">{t('facilitiesOverline')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif">
                            {t('facilitiesTitle')}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            {t('facilitiesSubtitle')}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-24">
                        {[
                            {
                                title: t('fac1Title'),
                                desc: t('fac1Desc'),
                                image: "/assets/img/rooms/bed3.jpeg"
                            },
                            {
                                title: t('fac2Title'),
                                desc: t('fac2Desc'),
                                image: "/assets/img/rooms/pool4.jpeg"
                            },
                            {
                                title: t('fac3Title'),
                                desc: t('fac3Desc'),
                                image: "/assets/img/rooms/space2.jpeg"
                            },
                        ].map((item, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                                        {item.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-secondary rounded-full"></div>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </ScrollReveal>

            {/* Fasilitas Lengkap (Amenities) Section */}
            <ScrollReveal delay={0.1}>
                <Section className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">{t('amenitiesOverline')}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                                {t('amenitiesTitle')}
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 text-center">
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaWifi className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">{t('amenityWifi')}</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaSnowflake className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">{t('amenityAc')}</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaTv className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">{t('amenityTv')}</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaSwimmingPool className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">{t('amenityPool')}</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaUtensils className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">{t('amenityKitchen')}</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaParking className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">{t('amenityParking')}</h4>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* Pricelist & Paket Sewa */}
            <ScrollReveal delay={0.2}>
                <Section className="bg-background border-t border-subtle/10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">{t('priceOverline')}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                            {t('priceTitle')}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('priceSubtitle')}
                        </p>
                    </div>

                    {/* Paket Utama (2 Kolom) */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 mb-8">
                        {/* Opsi 1 */}
                        <div className="bg-primary border-2 border-primary rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute top-0 right-0 bg-secondary px-6 py-2 rounded-bl-3xl shadow-md">
                                <span className="text-primary font-bold text-sm">{t('recommendation')}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white font-serif mb-2 mt-2">{t('opt1Title')}</h3>
                            <div className="text-secondary text-3xl font-bold mb-6">IDR 1.500.000 <span className="text-sm text-gray-300 font-normal">{t('night')}</span></div>

                            <div className="space-y-4 mb-10 flex-grow">
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">{t('opt1Feat1')}</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">{t('opt1Feat2')}</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">{t('opt1Feat3')}</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">{t('opt1Feat4')}</p>
                                </div>
                                <div className="flex items-start bg-secondary/10 p-5 rounded-2xl mt-6 border-l-4 border-secondary">
                                    <FaShieldAlt className="text-secondary mt-0.5 mr-3 flex-shrink-0 text-xl" />
                                    <p className="text-white font-medium text-sm leading-relaxed">
                                        <strong>{t('opt1RegulTitle')}</strong> {t('opt1RegulDesc')}
                                    </p>
                                </div>
                            </div>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20booking%20Private%20Guest%20House." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full text-lg py-6 bg-secondary text-primary hover:bg-white transition-colors">{t('opt1Btn')}</Button>
                            </a>
                        </div>

                        {/* Opsi 2 */}
                        <div className="bg-white border border-subtle/20 rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col">
                            <h3 className="text-2xl font-bold text-primary font-serif mb-2">{t('opt2Title')}</h3>
                            <div className="text-primary text-3xl font-bold mb-6">IDR 1.200.000 <span className="text-sm text-gray-500 font-normal">{t('night')}</span></div>

                            <div className="space-y-4 mb-10 flex-grow">
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">{t('opt2Feat1')}</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">{t('opt2Feat2')}</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">{t('opt2Feat3')}</p>
                                </div>
                                <div className="flex items-start bg-subtle/10 p-5 rounded-2xl mt-6 border-l-4 border-primary">
                                    <FaInfoCircle className="text-primary mt-0.5 mr-3 flex-shrink-0 text-xl" />
                                    <p className="text-primary font-medium text-sm leading-relaxed">
                                        <strong>{t('opt2RegulTitle')}</strong> {t('opt2RegulDesc')}
                                    </p>
                                </div>
                            </div>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20tertarik%20dengan%20Non-Private%20Guest%20House." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full text-lg py-6" variant="outline">{t('opt2Btn')}</Button>
                            </a>
                        </div>
                    </div>

                    {/* Paket Alternatif (3 Kolom) */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {/* Opsi 3 */}
                        <div className="bg-white border border-subtle/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-primary mb-2">{t('opt3Title')}</h4>
                            <div className="text-primary text-2xl font-bold mb-4">IDR 280.000</div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-6">
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-secondary" /> {t('opt3Feat1')}</li>
                            </ul>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20tertarik%20dengan%20paket%20Berugak%20Only." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full" variant="outline" size="sm">{t('opt3Btn')}</Button>
                            </a>
                        </div>

                        {/* Opsi 4 */}
                        <div className="bg-white border border-subtle/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-primary mb-2">{t('opt4Title')}</h4>
                            <div className="text-primary text-2xl font-bold mb-4">IDR 600.000</div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-6">
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-secondary" /> {t('opt4Feat1')}</li>
                            </ul>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20tertarik%20dengan%20paket%20Room%20Only." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full" variant="outline" size="sm">{t('opt4Btn')}</Button>
                            </a>
                        </div>

                        {/* Opsi 5 */}
                        <div className="bg-white border border-subtle/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-primary mb-2">{t('opt5Title')}</h4>
                            <div className="text-primary text-2xl font-bold mb-4">IDR 50.000 <span className="text-xs text-gray-500 font-normal">{t('person')}</span></div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-6">
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-secondary" /> {t('opt5Feat1')}</li>
                            </ul>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20akses%20Swimming%20Pool." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full" variant="outline" size="sm">{t('opt5Btn')}</Button>
                            </a>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* House Rules Section */}
            <ScrollReveal delay={0.3}>
                <Section className="bg-background border-t border-subtle/10">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">{t('rulesOverline')}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                                {t('rulesTitle')}
                            </h2>
                            <p className="text-gray-600">
                                {t('rulesSubtitle')}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-subtle/5 p-8 rounded-3xl border border-subtle/10 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary mb-4 border-b border-subtle/20 pb-2">{t('opsTitle')}</h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center border-b border-subtle/10 pb-3 last:border-0 last:pb-0">
                                        <span className="text-gray-600 text-sm md:text-base font-medium">{t('booking')}</span>
                                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap">{t('bookingVal')}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-subtle/10 pb-3 last:border-0 last:pb-0">
                                        <span className="text-gray-600 text-sm md:text-base font-medium">{t('checkin')}</span>
                                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap">{t('checkinVal')}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-subtle/10 pb-3 last:border-0 last:pb-0">
                                        <span className="text-gray-600 text-sm md:text-base font-medium">{t('checkout')}</span>
                                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap">{t('checkoutVal')}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-subtle/5 p-8 rounded-3xl border border-subtle/10 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary mb-4 border-b border-subtle/20 pb-2">{t('rulesPropTitle')}</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('rule1') }} />
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed">{t('rule2')}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed">{t('rule3')}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed">{t('rule4')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* Why Choose Us / Trust Management Section */}
            <ScrollReveal delay={0.4}>
                <Section className="bg-subtle/5">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                                {t('whyTitle')}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t('whySubtitle')}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl text-center shadow-md">
                                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <FaStar className="text-3xl text-secondary" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif">{t('why1Title')}</h4>
                                <p className="text-gray-600 leading-relaxed">{t('why1Desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl text-center shadow-md">
                                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <FaHeart className="text-3xl text-secondary" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif">{t('why2Title')}</h4>
                                <p className="text-gray-600 leading-relaxed">{t('why2Desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl text-center shadow-md">
                                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <FaShieldAlt className="text-3xl text-secondary" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif">{t('why3Title')}</h4>
                                <p className="text-gray-600 leading-relaxed">{t('why3Desc')}</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* CTA Section */}
            <ScrollReveal delay={0.5}>
                <Section className="pb-16 pt-8">
                    <div className="bg-primary text-white text-center rounded-3xl mx-4 lg:mx-auto max-w-5xl p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mb-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">{t('ctaTitle')}</h2>
                            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                                {t('ctaSubtitle')}
                            </p>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20bertanya%20tentang%20ketersediaan%20Private%20Villa." target="_blank" rel="noopener noreferrer">
                                <Button className="bg-secondary text-primary font-bold px-8 py-6 text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    {t('ctaBtn')}
                                </Button>
                            </a>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>
        </div>
    );
}
