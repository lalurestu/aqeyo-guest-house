"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["All", "Guesthouse", "Social Space", "Events"];

const photos = [
    { id: 1, src: "/assets/img/img1.jpeg", category: "Guesthouse", alt: "Bale Bangket Serenity" },
    { id: 2, src: "/assets/img/img2.jpeg", category: "Guesthouse", alt: "Guesthouse Interior" },
    { id: 3, src: "/assets/img/img3.jpeg", category: "Social Space", alt: "Social Space Ambience" },
    { id: 4, src: "/assets/img/img4.jpeg", category: "Events", alt: "Gathering Space" },
    { id: 5, src: "/assets/img/img5.jpeg", category: "Guesthouse", alt: "Cozy Rooms" },
    { id: 6, src: "/assets/img/img6.jpeg", category: "Social Space", alt: "Social Space Atmosphere" },
    { id: 7, src: "/assets/img/img7.jpeg", category: "Social Space", alt: "Dining Area" },
    { id: 8, src: "/assets/img/img8.jpeg", category: "Social Space", alt: "Coffee & Drinks" },
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
