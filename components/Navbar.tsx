"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const t = useTranslations('Navbar');


    const navLinks = [
        { name: t('home'), href: "/" },
        { name: t('rooms'), href: "/rooms" },
        { name: t('socialSpace'), href: "/social-space" },
        { name: t('gallery'), href: "/gallery" },
        { name: t('contact'), href: "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-subtle/20 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <span className="text-2xl font-bold text-primary font-serif tracking-wide">
                            AQEYO
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={twMerge(
                                        clsx(
                                            "text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                            pathname === link.href && "text-primary font-bold"
                                        )
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/rooms"
                                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                {t('bookNow')}
                            </Link>
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <FaTimes className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FaBars className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-subtle/20 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={twMerge(
                                        clsx(
                                            "text-foreground hover:text-primary hover:bg-subtle/10 block px-3 py-2 rounded-md text-base font-medium",
                                            pathname === link.href && "text-primary font-bold bg-subtle/5"
                                        )
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/rooms"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 block px-3 py-3 rounded-full text-base font-semibold shadow-md"
                            >
                                {t('bookNow')}
                            </Link>
                            <div className="px-3 py-3">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
