import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary-foreground text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Stats */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold font-serif text-secondary tracking-wide">
                                Bale Bangket
                            </span>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Experience the perfect blend of serenity and flavor. A unique guesthouse and cafe destination designed for your comfort and delight.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                                <FaWhatsapp className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/rooms" className="text-gray-300 hover:text-secondary transition-colors">
                                    The Rooms
                                </Link>
                            </li>
                            <li>
                                <Link href="/cafe" className="text-gray-300 hover:text-secondary transition-colors">
                                    The Cafe
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-300 hover:text-secondary transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">Kotaraja, Sikur, East Lombok, NTB, Indonesia</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                                <a href="tel:+6285333000452" className="text-gray-300 hover:text-secondary transition-colors">
                                    +62 853-3300-0452
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                                <a href="mailto:info@balebangket.com" className="text-gray-300 hover:text-secondary transition-colors">
                                    info@balebangket.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2 inline-block">Opening Hours</h3>
                        <ul className="space-y-2 text-gray-300">
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

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Bale Bangket. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
