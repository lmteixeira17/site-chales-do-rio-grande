"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "5516981190106"; // User provided number

export function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 2000); // Delay showing for less intrusive feel initially

        return () => clearTimeout(timer);
    }, []);

    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a locação do rancho. (Vim pelo site chalesdoriogrande.com.br)");
    const link = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 hover:shadow-xl",
                visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}
            aria-label="Contatar via WhatsApp"
        >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="font-bold hidden md:inline">Orçamento Rápido</span>
        </a>
    );
}
