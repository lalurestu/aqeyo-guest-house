"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate submission
        setTimeout(() => {
            setStatus("success");
            alert("Message sent! We will get back to you soon.");
        }, 1000);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/img/img4.jpeg"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        We'd love to hear from you.
                    </p>
                </div>
            </div>

            <Section className="bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Contact Information</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Have questions about booking a room or our cafe menu? Reach out to us via phone, email, or visit us directly.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-secondary text-xl mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Address</h4>
                                    <p className="text-gray-600">Kotaraja, Sikur, East Lombok, NTB, Indonesia</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-secondary text-xl mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Phone</h4>
                                    <a href="tel:+6285333000452" className="text-gray-600 hover:text-primary transition-colors">+62 853-3300-0452</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-secondary text-xl mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Email</h4>
                                    <a href="mailto:info@balebangket.com" className="text-gray-600 hover:text-primary transition-colors">info@balebangket.com</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaWhatsapp className="text-secondary text-xl mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                                    <a href="https://wa.me/6285333000452" className="text-gray-600 hover:text-primary transition-colors">Chat with us</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-subtle/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                    <FaInstagram className="text-xl" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-subtle/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                    <FaFacebook className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-subtle/10">
                        <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" id="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" />
                            </div>
                            <Button type="submit" className="w-full" disabled={status === "submitting"}>
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>

            {/* Map Section */}
            <section className="h-96 w-full relative bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.568779776953!2d116.3245465!3d-8.5089531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb4e47602334b%3A0x62804574944d186!2sLombok%2C%20West%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1714880000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </section>
        </div>
    );
}
