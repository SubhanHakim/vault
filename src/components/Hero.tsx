import { motion } from 'framer-motion';
import guardian from '../assets/guardian.jpg';
import xLogo from '../assets/icons8-x-50.png';
import dexLogo from '../assets/dex.png';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background with slight gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-vault-black via-transparent to-vault-black z-10 pointer-events-none" />

            {/* Guardian Image - Background Layer */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={guardian}
                    alt="Vault Guardian"
                    className="w-full h-full object-cover opacity-80"
                    style={{ objectPosition: '50% 25%' }}
                />
                {/* Vignette - Widened center visibility */}
                <div className="absolute inset-0 bg-radial-[circle_at_center_var(--color-vault-black)_0%,_var(--color-vault-black)_100%]"
                    style={{ background: 'radial-gradient(circle, rgba(5,5,5,0) 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0.6) 70%, rgba(5,5,5,1) 100%)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-vault-black via-transparent to-vault-black opacity-80" />
            </motion.div>

            {/* Geometric Accents (The Abstract Geometry) */}
            <div className="absolute inset-0 z-10 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-vault-gold" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-20 text-center px-6 mix-blend-screen">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-center gap-4 text-vault-gold-dim text-xs tracking-[0.4em] uppercase font-sans">
                        <span className="w-12 h-[1px] bg-vault-gold-dim/30"></span>
                        <span>Protocol: 0X_GENESIS</span>
                        <span className="w-12 h-[1px] bg-vault-gold-dim/30"></span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, letterSpacing: "0.1em" }}
                    animate={{ opacity: 1, scale: 1, letterSpacing: "0.25em" }}
                    transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }} // Custom easing for "heavy" feel
                    className="text-5xl md:text-8xl lg:text-9xl font-serif text-vault-text font-bold mb-10 text-shadow-glow"
                >
                    VAULT
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="flex flex-col items-center gap-8"
                >
                    <p className="text-vault-gold font-sans tracking-widest text-xs md:text-sm max-w-xl mx-auto leading-relaxed uppercase border-t border-b border-vault-gold/10 py-4 px-8">
                        The Keeper of the Immutable Ledger.
                        <br />
                        Silence is the language of the code.
                    </p>

                    <div className="flex items-center gap-6">
                        <motion.a
                            href="https://pump.fun/coin/434GuMTekhPpzQTH5egU9obA84Lo9PWGcX1T1wr4pump"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(212, 197, 169)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative p-4 overflow-hidden rounded-full bg-vault-black/30 backdrop-blur-sm border border-vault-gold/20 hover:border-vault-gold transition-colors duration-500"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-vault-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                            {/* Shimmer Effect */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-vault-gold/20 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                            <img
                                src={dexLogo}
                                alt="Dexscreener"
                                className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                            />
                        </motion.a>

                        <motion.a
                            href="https://x.com/i/communities/2011819279294124433"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(212, 197, 169)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative p-4 overflow-hidden rounded-full bg-vault-black/30 backdrop-blur-sm border border-vault-gold/20 hover:border-vault-gold transition-colors duration-500"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-vault-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                            {/* Shimmer Effect */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-vault-gold/20 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                            <img
                                src={xLogo}
                                alt="X Protocol"
                                className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                            />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 3, duration: 1.5 }}
                className="absolute bottom-12 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[9px] uppercase tracking-[0.3em] text-vault-gold/40">Enter</span>
                <motion.div
                    animate={{ height: ["0px", "60px", "0px"], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] bg-gradient-to-b from-transparent via-vault-gold to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
