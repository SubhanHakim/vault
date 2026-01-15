import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Dynamically import images from the gallery folder
const images = import.meta.glob('../assets/gallery/*.png', { eager: true });

const Gallery = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        const loadedImages = Object.values(images).map((img: any) => img.default);
        setImageUrls(loadedImages);
    }, []);

    return (
        <section className="relative w-full py-32 px-6 overflow-hidden bg-vault-black z-20">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="w-12 h-[1px] bg-vault-gold/30" />
                    <span className="text-xs font-sans text-vault-gold tracking-[0.4em] uppercase">
                        Visual_Logs
                    </span>
                    <div className="w-12 h-[1px] bg-vault-gold/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-serif text-vault-text tracking-wide"
                >
                    ARTIFACTS_
                </motion.h2>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {imageUrls.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group relative aspect-square bg-vault-dark-gray/20 border border-vault-gold/10 overflow-hidden cursor-crosshair"
                    >
                        {/* Image */}
                        <img
                            src={src}
                            alt={`Artifact ${index}`}
                            className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                        />

                        {/* Overlay GUI */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-mono text-[10px] text-vault-gold border border-vault-gold/20 px-2 py-1 bg-vault-black/50 backdrop-blur-sm">
                                    IMG_0{index + 1}
                                </span>
                                <span className="w-2 h-2 bg-vault-gold animate-pulse" />
                            </div>

                            <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <p className="font-sans text-xs text-vault-text tracking-widest uppercase">
                                    Decrypted Successfully
                                </p>
                            </div>
                        </div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-vault-gold/30 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-vault-gold/10" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-vault-gold/30 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-vault-gold/10" />
                    </motion.div>
                ))}
            </div>

            {/* Footer gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-vault-black to-transparent pointer-events-none" />
        </section>
    );
};

export default Gallery;
