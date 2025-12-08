import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-stone-900/40 z-10" />
                <img
                    src="/images/gallery/IMG_3057.jpg"
                    alt="Chalé na natureza"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 text-center text-white px-4 animate-fade-in">
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30">
                    Refúgio Exclusivo
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-shadow-lg">
                    Onde a Natureza <br /> Abraça o Conforto
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Desconecte-se da rotina e viva momentos inesquecíveis com sua família às margens do Rio Grande. Lazer completo, privacidade e tranquilidade.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#disponibilidade">
                        <Button size="xl" variant="cta" className="w-full sm:w-auto">
                            Verificar Disponibilidade
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                    <a href="#galeria">
                        <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white/40 hover:bg-white hover:text-primary">
                            Conhecer o Rancho
                        </Button>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/50 flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down" />
                </div>
            </div>
        </section>
    );
}
