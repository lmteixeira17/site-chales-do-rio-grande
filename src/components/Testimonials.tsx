import { Star, MessageCircle } from "lucide-react";

const REVIEWS = [
    {
        name: "Ana Silva",
        location: "São Paulo, SP",
        text: "Lugar incrível! Passamos o feriado em família e foi tudo perfeito. A casa é super equipada e a piscina é maravilhosa.",
        stars: 5,
    },
    {
        name: "Carlos Souza",
        location: "Uberlândia, MG",
        text: "O acesso ao rio é um diferencial. Muito sossego e natureza. O anfitrião foi muito atencioso do início ao fim.",
        stars: 5,
    },
    {
        name: "Mariana Oliveira",
        location: "Ribeirão Preto, SP",
        text: "Recomendo a todos! Limpeza impecável e o rancho é ainda mais bonito pessoalmente. Voltaremos com certeza.",
        stars: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-background border-t border-muted">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        O que dizem nossos hóspedes
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-accent">
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="bg-secondary/5 p-8 rounded-2xl relative">
                            <MessageCircle className="absolute top-6 right-6 text-secondary/20 w-10 h-10" />
                            <p className="text-muted-foreground italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-foreground">{review.name}</h4>
                                <span className="text-sm text-muted-foreground">{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
