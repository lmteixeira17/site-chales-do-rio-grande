import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-2xl font-serif font-bold tracking-tight mb-4 block">
                        Chalés do<br />Rio Grande
                    </Link>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        O refúgio perfeito para você e sua família. Conforto, natureza e momentos inesquecíveis.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                        <li><Link href="#sobre" className="hover:text-white transition-colors">O Rancho</Link></li>
                        <li><Link href="#galeria" className="hover:text-white transition-colors">Galeria</Link></li>
                        <li><Link href="#comodidades" className="hover:text-white transition-colors">Comodidades</Link></li>
                        <li><Link href="#localizacao" className="hover:text-white transition-colors">Localização</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Fale Conosco</h4>
                    <ul className="space-y-3 text-sm text-primary-foreground/80">
                        <li className="flex items-start gap-2">
                            <Phone className="w-5 h-5 shrink-0" />
                            <span>(16) 98119-0106</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail className="w-5 h-5 shrink-0" />
                            <span>contato@chalesdoriogrande.com.br</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <span>Pontal do Rio Grande<br />Miguelópolis, SP</span>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
                    <div className="flex gap-4">
                        <Link href="https://instagram.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link href="https://facebook.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                            <Facebook className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
                <p>© {new Date().getFullYear()} Chalés do Rio Grande. Todos os direitos reservados.</p>
                <p className="mt-2 text-xs">Desenvolvido com tecnologia de ponta para melhor conversão.</p>
            </div>
        </footer>
    );
}
