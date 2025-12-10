"use client";

import { PHONE_NUMBER } from '@/lib/constants';
import { trackCTAClick } from '@/lib/analytics-utils';
import { Check, Calendar, ArrowRight } from 'lucide-react';

const PricingCard = ({
    title,
    price,
    period,
    features,
    isPopular = false,
    delay,
}: {
    title: string;
    price: string;
    period?: string;
    features: string[];
    isPopular?: boolean;
    delay: string;
}) => {
    const message = encodeURIComponent(
        `Olá! Gostaria de reservar para *${title}*. (Vim pelo site)`
    );
    const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

    return (
        <div
            className={`relative p-8 rounded-2xl border ${isPopular
                ? 'border-brown-600 bg-brown-50 shadow-xl scale-105 z-10'
                : 'border-stone-200 bg-white shadow-lg'
                } flex flex-col animate-fade-in-up ${delay}`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brown-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Procurado
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">
                    {title}
                </h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-brown-600">{price}</span>
                    {period && <span className="text-stone-500 text-sm">/{period}</span>}
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-600">
                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick(`Reservar ${title}`, 'pricing')}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${isPopular
                    ? 'bg-brown-600 text-white hover:bg-brown-700 shadow-md'
                    : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                    }`}
            >
                Reservar Agora
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    );
};

export const Pricing = () => {
    return (
        <section id="investimento" className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <span className="text-brown-600 font-medium tracking-wider uppercase text-sm">
                        Investimento
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mt-2 mb-4">
                        Valores para sua Estadia
                    </h2>
                    <p className="text-stone-600">
                        Escolha o melhor período para desfrutar de momentos inesquecíveis com sua família e amigos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    <PricingCard
                        title="Finais de Semana"
                        price="R$ 4.500"
                        period="pacote"
                        delay="animation-delay-0"
                        isPopular={true}
                        features={[
                            'Entrada: Sexta às 13h',
                            'Saída: Domingo às 17h',
                            'Até 24 pessoas',
                            'Hospedagem completa',
                            'Acesso a toda estrutura',
                            'Limpeza inclusa',
                        ]}
                    />

                    <PricingCard
                        title="Feriados"
                        price="R$ 7.500"
                        period="pacote"
                        delay="animation-delay-200"
                        features={[
                            'Entrada: Quinta pela manhã',
                            'Saída: Domingo às 17h',
                            'Até 24 pessoas',
                            'Pacote estendido',
                            'Acesso a toda estrutura',
                            'Limpeza inclusa',
                        ]}
                    />

                    <PricingCard
                        title="Datas Especiais"
                        price="Sob Consulta"
                        delay="animation-delay-400"
                        features={[
                            'Natal',
                            'Réveillon',
                            'Carnaval',
                            'Pacotes personalizados',
                            'Decoração (consultar)',
                            'Condições especiais',
                        ]}
                    />
                </div>

                <div className="mt-12 text-center text-stone-500 text-sm animate-fade-in-up animation-delay-500">
                    <p className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade via WhatsApp.
                    </p>
                </div>
            </div>
        </section>
    );
};
