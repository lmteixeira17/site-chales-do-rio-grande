export function Location() {
    return (
        <section id="localizacao" className="py-0 relative">
            <div className="flex flex-col md:flex-row">
                {/* Info Box */}
                <div className="w-full md:w-1/3 bg-primary p-12 md:p-16 flex flex-col justify-center text-white">
                    <h2 className="text-3xl font-serif font-bold mb-6">Como Chegar</h2>
                    <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                        Localizado às margens do Rio Grande, nosso chalé oferece fácil acesso pela rodovia, com o último trecho em estrada de terra batida bem conservada.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg mb-1">Endereço</h3>
                            <p className="text-white/80">Pontal do Rio Grande<br />Miguelópolis - SP</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-1">Contato</h3>
                            <p className="text-white/80">(16) 98119-0106<br />contato@chalesdoriogrande.com.br</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full md:w-2/3 h-[400px] md:h-auto min-h-[500px] bg-muted relative">
                    <iframe
                        src="https://maps.google.com/maps?q=-20.1114131,-47.9853469&hl=pt&z=16&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 gray-scale filter grayscale hover:grayscale-0 transition-all duration-500"
                        title="Mapa da Localização"
                    />
                </div>
            </div>
        </section>
    );
}
