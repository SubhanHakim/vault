import { ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-20 w-full py-20 border-t border-vault-gold/5 bg-vault-black/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl text-vault-gold tracking-[0.2em] opacity-80 mb-2">VAULT</h3>
                    <p className="font-sans text-[10px] text-vault-muted tracking-widest uppercase">
                        Secure Archive Protocol V.1.0
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 font-sans text-xs tracking-[0.2em] text-vault-muted uppercase">
                    <a href="#" className="flex items-center gap-2 hover:text-vault-gold transition-colors duration-300 group">
                        <span>Twitter / X</span>
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-vault-gold transition-colors duration-300 group">
                        <span>Telegram</span>
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-vault-gold transition-colors duration-300 group">
                        <span>Contract</span>
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
            <div className="w-full text-center mt-12 opacity-20">
                <span className="font-serif text-[150px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-vault-dark-gray to-transparent select-none pointer-events-none">
                    VAULT
                </span>
            </div>
        </footer>
    );
};
export default Footer;
