export function CtaFormSection() {
    return (
        <section id="start" className="py-20 md:py-24 bg-tm-blue dark-mode-texts">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Learn More. Scan Less.
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:aspect-h-2">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdi2TQrMBVVK4B8GkvXQ4x22L_PwaMBoyOyPZE7YvLzaPd2Kg/viewform?embedded=true"
                            width="100%"
                            height="700"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            className="rounded-lg shadow-2xl"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
