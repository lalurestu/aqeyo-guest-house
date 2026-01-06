import { Section } from "@/components/ui/Section";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const menuCategories = [
    {
        title: "Signature Coffee",
        items: [
            { name: "Gula Aren Latte", price: "$4", desc: "Local palm sugar, fresh milk, espresso" },
            { name: "Coconut Cold Brew", price: "$5", desc: "Cold brew coffee, coconut water, lime" },
            { name: "Avocado Espresso", price: "$6", desc: "Creamy avocado blend topped with espresso" },
        ],
    },
    {
        title: "Main Courses",
        items: [
            { name: "Nasi Goreng Special", price: "$8", desc: "Fried rice with chicken satay, fried egg, and crackers" },
            { name: "Beef Rendang", price: "$12", desc: "Slow-cooked beef in rich coconut spice paste" },
            { name: "Grilled Fish Jimbaran", price: "$14", desc: "Fresh catch with Balinese spices and sambal" },
        ],
    },
    {
        title: "Desserts",
        items: [
            { name: "Pisang Goreng Cheese", price: "$4", desc: "Fried banana with cheese and chocolate drizzle" },
            { name: "Dadar Gulung", price: "$3", desc: "Green pancake rolls with sweet coconut filling" },
        ],
    },
];

export default function CafePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                        alt="Cafe Ambience"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">
                        Savor the Flavor
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        A culinary journey celebrating local ingredients and global tastes.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0">
                {/* Menu Section (2/3 width on large screens) */}
                <div className="lg:col-span-2">
                    <Section className="bg-background">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
                                Our Menu
                            </h2>
                            <p className="text-gray-600">
                                Freshly prepared with love and passion.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {menuCategories.map((category, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-subtle/10">
                                    <h3 className="text-2xl font-bold text-secondary-foreground mb-6 border-b border-subtle/10 pb-2">
                                        {category.title}
                                    </h3>
                                    <div className="space-y-6">
                                        {category.items.map((item, i) => (
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
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-serif">
                                The Atmosphere
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
                            <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1466978913421-dad938661248?q=80&w=2070&auto=format&fit=crop" alt="Cafe Interior" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" alt="Latte Art" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" alt="Food" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative col-span-2 rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" alt="Outdoor Seating" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </Section>
                </div>

                {/* Sidebar Info & Reservation (1/3 width) */}
                <div className="lg:col-span-1 bg-primary text-white p-8 lg:p-12 lg:min-h-screen">
                    <div className="sticky top-24 space-y-12">

                        {/* Location & Hours */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 font-serif text-secondary">Visit Us</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-xl mt-1 mr-4 text-secondary/80" />
                                    <p className="leading-relaxed text-white/90">
                                        123 Serenity Lane,<br />
                                        Nature Valley, Lombok,<br />
                                        Indonesia
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <FaClock className="text-xl mt-1 mr-4 text-secondary/80" />
                                    <div className="text-white/90">
                                        <p className="font-semibold mb-1">Opening Hours</p>
                                        <p>Mon - Fri: 8am - 10pm</p>
                                        <p>Sat - Sun: 8am - 11pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reservation Form */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 font-serif text-secondary">Reservations</h3>
                            <p className="mb-6 text-white/80 text-sm">
                                Reserve your spot for an unforgettable dining experience. For larger parties, please contact us directly.
                            </p>
                            <ReservationForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
