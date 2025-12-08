import {
    Wifi,
    Waves,
    UtensilsCrossed,
    Anchor,
    Snowflake,
    Tv,
    Home,
    Users,
    Gamepad2,
    PawPrint
} from "lucide-react";

const FEATURES = [
    {
        icon: Users,
        title: "Capacidade para 24 Pessoas",
        description: "4 Chalés (60m²) para 6 pessoas cada (Cama Casal, Queen e 2 Solteiros). Banheiros privativos."
    },
    {
        icon: Snowflake,
        title: "100% Climatizado",
        description: "Ar-Condicionado em todos os Chalés para seu conforto total."
    },
    {
        icon: Waves,
        title: "Piscina Aquecida & Ofurô",
        description: "Piscina com aquecedor elétrico e ofurô. Relaxamento garantido."
    },
    {
        icon: UtensilsCrossed,
        title: "Gourmet Completo",
        description: "Churrasqueira, Forno a Lenha, Geladeira e 2 Cervejeiras à disposição."
    },
    {
        icon: Gamepad2,
        title: "Salão de Jogos",
        description: "Diversão com Mesa de Sinuca, Pebolim e TV de 60” na área comum."
    },
    {
        icon: Wifi,
        title: "Internet Starlink",
        description: "Conexão de alta velocidade via satélite. Você conectado sempre que precisar."
    },
    {
        icon: Home,
        title: "Área Comum Ampla",
        description: "Espaço coberto e equipado para confraternização de até 24 pessoas com 3 banheiros."
    },
    {
        icon: Anchor,
        title: "Rampa para Barcos",
        description: "Acesso direto ao rio com rampa para embarcações e Deck com sofás."
    },
    {
        icon: PawPrint,
        title: "Pet Friendly",
        description: "Seus animais de estimação são muito bem-vindos aqui!"
    }
];

export function Amenities() {
    return (
        <section id="comodidades" className="py-20 md:py-32 bg-secondary/5">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
                        Sua Casa Fora de Casa
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Tudo o que você precisa para relaxar
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        O Chalé do Rio Grande foi pensado nos mínimos detalhes para oferecer conforto, praticidade e momentos únicos.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group border border-muted"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
