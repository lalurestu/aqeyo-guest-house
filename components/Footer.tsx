import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    const t = useTranslations('Footer');
    const tNav = useTranslations('Navbar');
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Stats */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold font-serif text-secondary tracking-wide">
                                AQEYO
                            </span>
                        </Link>
                        <p className="text-background mb-6 leading-relaxed">
                            {t('description')}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-background hover:text-secondary transition-colors">
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-background hover:text-secondary transition-colors">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-background hover:text-secondary transition-colors">
                                <FaWhatsapp className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2 inline-block">{t('quickLinks')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/rooms" className="text-background hover:text-secondary transition-colors">
                                    {tNav('rooms')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/social-space" className="text-background hover:text-secondary transition-colors">
                                    {tNav('socialSpace')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-background hover:text-secondary transition-colors">
                                    {tNav('gallery')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-background hover:text-secondary transition-colors">
                                    {tNav('contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2 inline-block">{t('contactUs')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="h-5 w-5 text-background mt-1 mr-3 flex-shrink-0" />
                                <span className="text-background">Kotaraja, Sikur, East Lombok, NTB, Indonesia</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="h-4 w-4 text-background mr-3 flex-shrink-0" />
                                <a href="tel:+6285333000452" className="text-background hover:text-secondary transition-colors">
                                    +62 853-3300-0452
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="h-4 w-4 text-background mr-3 flex-shrink-0" />
                                <a href="mailto:info@balebangket.com" className="text-background hover:text-secondary transition-colors">
                                    info@balebangket.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2 inline-block">{t('openingHours')}</h3>
                        <ul className="space-y-2 text-background">
                            <li className="flex justify-between">
                                <span>Mon - Fri:</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sat - Sun:</span>
                                <span>8:00 AM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-background text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('rightsReserved')}</p>
                </div>
            </div>
        </footer>
    );
}
