import { motion } from 'framer-motion';

const sections = [
    {
        id: "01",
        title: "THE GENESIS",
        content: "Before there was value, there was void. The Vault was constructed not to hold, but to withhold. To protect the sanctity of the immutable ledger from the chaos of the ephemeral world."
    },
    {
        id: "02",
        title: "THE GUARDIAN",
        content: "A sentinel of silence. Watching the blocks forge the chain of destiny. No marketing can penetrate these walls. Only truth survives the compilation."
    },
    {
        id: "03",
        title: "THE PROTOCOL",
        content: "We do not seek the moon. We seek the core. A deflationary mechanism designed to mirror the entropy of the universe itself. Burn what is weak. Keep what is sacred."
    }
];

const Narrative = () => {
    return (
        <section className="relative w-full max-w-4xl mx-auto py-32 px-6 z-20">
            <div className="flex flex-col gap-32">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="group relative border-l border-vault-gold/10 pl-8 md:pl-16 py-4"
                    >
                        <div className="absolute -left-[1px] top-0 h-0 group-hover:h-full w-[2px] bg-vault-gold transition-all duration-1000 ease-out" />

                        <span className="block text-4xl md:text-5xl font-serif text-vault-dark-gray group-hover:text-vault-gold/20 transition-colors duration-700 select-none mb-4">
                            {section.id}
                        </span>

                        <h2 className="text-2xl md:text-3xl font-serif text-vault-text mb-6 tracking-wide group-hover:text-vault-gold transition-colors duration-500">
                            {section.title}
                        </h2>

                        <p className="font-sans text-vault-muted leading-relaxed text-lg md:text-xl font-light max-w-2xl group-hover:text-vault-text/90 transition-colors duration-500">
                            {section.content}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-vault-gold/20 to-transparent mt-32" />
        </section>
    );
};

export default Narrative;
