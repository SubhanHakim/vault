import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import architect from '../assets/architect.jpg';

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section ref={containerRef} className="relative min-h-[120vh] py-32 overflow-hidden bg-vault-black flex items-center justify-center">

            {/* Background Kinetic Typography */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5 select-none overflow-hidden">
                <motion.div style={{ x: y1 }} className="whitespace-nowrap">
                    <span className="text-[20vh] font-serif font-bold text-vault-gold leading-none">
                        ETERNAL • IMMUTABLE • SILENT •
                    </span>
                    <span className="text-[20vh] font-serif font-bold text-transparent stroke-text leading-none">
                        ETERNAL • IMMUTABLE • SILENT •
                    </span>
                </motion.div>
                <div className="w-full h-[1px] bg-vault-gold/20" />
                <motion.div style={{ x: y2 }} className="whitespace-nowrap flex flex-row-reverse">
                    <span className="text-[20vh] font-sans font-bold text-vault-text leading-none">
                        ARCHIVE • PROTOCOL • ZERO •
                    </span>
                    <span className="text-[20vh] font-sans font-bold text-transparent stroke-text leading-none">
                        ARCHIVE • PROTOCOL • ZERO •
                    </span>
                </motion.div>
            </div>

            {/* Main Content - Asymmetric Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Visual Anchor (Left) */}
                <div className="col-span-1 md:col-span-5 relative">
                    <motion.div
                        style={{ rotate }}
                        className="w-full aspect-[4/5] border border-vault-gold/20 relative backdrop-blur-sm bg-vault-dark-gray/5 overflow-hidden"
                    >
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-vault-gold z-20" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-vault-gold z-20" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-vault-gold z-20" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-vault-gold z-20" />

                        {/* Inner Content - Image */}
                        <div className="absolute inset-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                            <img
                                src={architect}
                                alt="The Architect"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                            />
                            {/* Overlay Scanline */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>

                {/* Text Content (Right) */}
                <div className="col-span-1 md:col-span-7 flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="pl-8 border-l-2 border-vault-gold"
                    >
                        <span className="block text-xs font-sans text-vault-gold mb-2 tracking-[0.3em]">
                            // SYSTEM_STATUS: ONLINE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-vault-text mb-6">
                            We are the Architects of <span className="text-vault-gold italic">Silence.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-vault-dark-gray/20 p-6 border border-vault-gold/5 hover:border-vault-gold/30 transition-colors duration-500"
                        >
                            <h4 className="text-xl font-serif text-vault-text mb-4">Immutable</h4>
                            <p className="text-sm font-sans text-vault-muted leading-relaxed">
                                Once written, the code cannot be unwritten. We build upon the bedrock of absolute permanence. No edits. No retractions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="bg-vault-dark-gray/20 p-6 border border-vault-gold/5 hover:border-vault-gold/30 transition-colors duration-500"
                        >
                            <h4 className="text-xl font-serif text-vault-text mb-4">Ethereal</h4>
                            <p className="text-sm font-sans text-vault-muted leading-relaxed">
                                Like a ghost in the machine, our presence is felt but rarely seen. We operate in the spaces between the blocks.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="h-[1px] bg-gradient-to-r from-vault-gold/0 via-vault-gold/50 to-vault-gold/0"
                    />

                    <div className="flex justify-end">
                        <p className="text-right font-mono text-[10px] text-vault-gold-dim">
                            COORDINATES: <br />
                            NULL_SECTOR_09
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(212, 197, 169, 0.1);
                    color: transparent;
                }
            `}</style>
        </section>
    );
};

export default About;
