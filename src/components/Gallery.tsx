"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const PHOTOS = [
    "/images/gallery/IMG_2984.jpg",
    "/images/gallery/IMG_2999.jpg",
    "/images/gallery/IMG_3005.jpg",
    "/images/gallery/IMG_3007.jpg",
    "/images/gallery/IMG_3008.jpg",
    "/images/gallery/IMG_3013.jpg",
    "/images/gallery/IMG_3014.jpg",
    "/images/gallery/IMG_3019.jpg",
    "/images/gallery/IMG_3051.jpg",
    "/images/gallery/IMG_3052.jpg",
    "/images/gallery/IMG_3057.jpg",
    "/images/gallery/IMG_3059.jpg",
    "/images/gallery/IMG_3064.jpg",
    "/images/gallery/IMG_3070.jpg",
    "/images/gallery/IMG_3074.jpg",
    "/images/gallery/IMG_3077.jpg",
    "/images/gallery/IMG_3079.jpg",
    "/images/gallery/IMG_3081.jpg",
    "/images/gallery/IMG_3083.jpg",
    "/images/gallery/IMG_3085.jpg",
    "/images/gallery/IMG_3086.jpg",
    "/images/gallery/IMG_3088.jpg",
    "/images/gallery/IMG_3094.jpg",
    "/images/gallery/IMG_3097.jpg",
    "/images/gallery/IMG_3100.jpg",
    "/images/gallery/IMG_3101.jpg",
    "/images/gallery/IMG_3105.jpg",
    "/images/gallery/IMG_3110.jpg",
    "/images/gallery/IMG_3114.jpg",
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="galeria" className="py-20 md:py-32 bg-background">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Galeria de Fotos
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Conheça cada detalhe do nosso paraíso.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {PHOTOS.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Foto da galeria ${idx + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Ampliada"
                        className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
