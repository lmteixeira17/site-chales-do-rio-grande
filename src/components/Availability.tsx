export function Availability() {
    return (
        <section id="disponibilidade" className="py-20 md:py-32 bg-background">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Verifique a Disponibilidade
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Confira as datas disponíveis e garanta sua reserva.
                    </p>
                </div>

                <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8">
                    <div className="relative w-full pb-[75%] md:pb-[600px] h-0">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=c_7291fdb57a5166a46fe98653452231be46b0c129ef4daa756e8365fe031bd2e6%40group.calendar.google.com&ctz=America%2FSao_Paulo&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0"
                            style={{ border: 0 }}
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            frameBorder="0"
                            scrolling="no"
                            title="Agenda de Disponibilidade"
                        />
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                            * As datas marcadas podem sofrer alterações. Confirme pelo WhatsApp.
                        </p>
                        {/* Note: User will click the floating WhatsApp button to confirm */}
                    </div>
                </div>
            </div>
        </section>
    );
}
