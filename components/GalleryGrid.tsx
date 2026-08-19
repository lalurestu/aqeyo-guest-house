"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["All", "Guesthouse", "Social Space", "Events"];

const photos = [
    // Guesthouse
    { id: 1, src: "/assets/img/rooms/bathroom1.jpeg", category: "Guesthouse", alt: "Bathroom 1" },
    { id: 2, src: "/assets/img/rooms/bathroom2.jpeg", category: "Guesthouse", alt: "Bathroom 2" },
    // { id: 3, src: "/assets/img/rooms/bathroom3.jpeg", category: "Guesthouse", alt: "Bathroom 3" },
    // { id: 4, src: "/assets/img/rooms/bathroom4.jpeg", category: "Guesthouse", alt: "Bathroom 4" },
    { id: 5, src: "/assets/img/rooms/bed1.jpeg", category: "Guesthouse", alt: "Bed 1" },
    // { id: 6, src: "/assets/img/rooms/bed2.jpeg", category: "Guesthouse", alt: "Bed 2" },
    { id: 7, src: "/assets/img/rooms/bed3.jpeg", category: "Guesthouse", alt: "Bed 3" },
    // { id: 8, src: "/assets/img/rooms/pool1.jpeg", category: "Guesthouse", alt: "Pool 1" },
    { id: 9, src: "/assets/img/rooms/pool2.jpeg", category: "Guesthouse", alt: "Pool 2" },
    { id: 10, src: "/assets/img/rooms/pool3.jpeg", category: "Guesthouse", alt: "Pool 3" },
    // { id: 11, src: "/assets/img/rooms/pool4.jpeg", category: "Guesthouse", alt: "Pool 4" },
    { id: 12, src: "/assets/img/rooms/room1.jpeg", category: "Guesthouse", alt: "Room 1" },
    // { id: 13, src: "/assets/img/rooms/room2.jpeg", category: "Guesthouse", alt: "Room 2" },
    { id: 14, src: "/assets/img/rooms/room3.jpeg", category: "Guesthouse", alt: "Room 3" },
    // { id: 15, src: "/assets/img/rooms/room4.jpeg", category: "Guesthouse", alt: "Room 4" },
    // { id: 16, src: "/assets/img/rooms/room5.jpeg", category: "Guesthouse", alt: "Room 5" },
    { id: 17, src: "/assets/img/rooms/room6.jpeg", category: "Guesthouse", alt: "Room 6" },

    // Social Space
    { id: 18, src: "/assets/img/rooms/space1.jpeg", category: "Social Space", alt: "Space 1" },
    { id: 19, src: "/assets/img/rooms/space2.jpeg", category: "Social Space", alt: "Space 2" },
    { id: 20, src: "/assets/img/rooms/space3.jpeg", category: "Social Space", alt: "Space 3" },
    { id: 21, src: "/assets/img/rooms/space4.jpeg", category: "Social Space", alt: "Space 4" },
    { id: 22, src: "/assets/img/rooms/space5.jpeg", category: "Social Space", alt: "Space 5" },
    { id: 23, src: "/assets/img/img1.jpeg", category: "Social Space", alt: "Social Space 1" },
    { id: 24, src: "/assets/img/img2.jpeg", category: "Social Space", alt: "Social Space 2" },
    { id: 25, src: "/assets/img/img3.jpeg", category: "Social Space", alt: "Social Space 3" },
    { id: 26, src: "/assets/img/img4.jpeg", category: "Social Space", alt: "Social Space 4" },
    { id: 27, src: "/assets/img/img5.jpeg", category: "Social Space", alt: "Social Space 5" },
    { id: 28, src: "/assets/img/img6.jpeg", category: "Social Space", alt: "Social Space 6" },
    { id: 29, src: "/assets/img/img7.jpeg", category: "Social Space", alt: "Social Space 7" },
    { id: 30, src: "/assets/img/img8.jpeg", category: "Social Space", alt: "Social Space 8" },
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
