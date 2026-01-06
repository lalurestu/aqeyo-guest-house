"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["All", "Guesthouse", "Cafe", "Events"];

const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop", category: "Guesthouse", alt: "Guesthouse Exterior" },
    { id: 2, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop", category: "Cafe", alt: "Cafe Interior" },
    { id: 3, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", category: "Events", alt: "Wedding Event" },
    { id: 4, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop", category: "Guesthouse", alt: "Luxury Room" },
    { id: 5, src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1974&auto=format&fit=crop", category: "Cafe", alt: "Coffee Art" },
    { id: 6, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop", category: "Events", alt: "Live Music" },
    { id: 7, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop", category: "Guesthouse", alt: "Poolside" },
    { id: 8, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", category: "Cafe", alt: "Evening Vibe" },
];

export default function GalleryGrid() {
    const [filter, setFilter] = useState("All");

    const filteredPhotos = filter === "All"
        ? photos
        : photos.filter(photo => photo.category === filter);

    return (
        <div>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "secondary" : "outline"}
                        onClick={() => setFilter(cat)}
                        className="min-w-[100px]"
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                    {filteredPhotos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative aspect-square group overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">{photo.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
