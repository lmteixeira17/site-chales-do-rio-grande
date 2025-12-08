"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
    { label: "O Rancho", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Comodidades", href: "#comodidades" },
    { label: "Localização", href: "#localizacao" },
];

export function Header() {
    const scrolled = useScroll(20);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className={cn(
                        "text-2xl font-serif font-bold tracking-tight transition-colors",
                        scrolled ? "text-primary" : "text-white"
                    )}
                >
                    Chalés do Rio Grande
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-accent",
                                scrolled ? "text-foreground" : "text-white/90"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a href="https://wa.me/5516981190106?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva.%20(Vim%20pelo%20site%20chalesdoriogrande.com.br)" target="_blank" rel="noopener noreferrer">
                        <Button variant={scrolled ? "default" : "cta"} className="ml-4">
                            Reservar Agora
                        </Button>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className={scrolled ? "text-foreground" : "text-white"} />
                    ) : (
                        <Menu className={scrolled ? "text-foreground" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t p-4 flex flex-col gap-4 shadow-lg animate-slide-up">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-foreground font-medium py-2 border-b border-muted last:border-0"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a href="https://wa.me/5516981190106?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva.%20(Vim%20pelo%20site%20chalesdoriogrande.com.br)" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full">Reservar Agora</Button>
                    </a>
                </div>
            )}
        </header>
    );
}
