import card1 from '../assets/img1cardtecno.png'
import card2 from '../assets/img2cardtecno.png'
import card3 from '../assets/img3cardtecno.png'

import cardBackground from '../assets/sfondo-card.jpg'

const Features = () => {
    const features = [
        {
            title: "STRATEGIA",
            image: card1,
            description: "Sviluppiamo piani strategici su misura per far crescere il tuo business e raggiungere i tuoi obiettivi."
        },
        {
            title: "MEDIA",
            image: card2,
            description: "Gestiamo la tua presenza media con contenuti di qualità e campagne mirate per il massimo impatto."
        },
        {
            title: "MARKETING",
            image: card3,
            description: "Supporto strategico che affianca tutte le attività di marketing. Costruiamo una comunicazione coerente."
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={cardBackground} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/80"></div>
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 80%, #000000 100%)' }}
                ></div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* Text Content */}
                <div className="max-w-4xl mb-20">
                    <div className="border-l-4 border-white pl-6 mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Gestire la complessità, costruire <br />
                            valore.
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                        Operare in settori competitivi richiede molto più della semplice visibilità. Richiede struttura. In Media Marketing Europa, trasformiamo gli obiettivi dei clienti in percorsi tangibili. Attraverso business unit specializzate, coordiniamo grandi progetti educativi, campagne sportive e strategie di consenso, garantendo che ogni azione sia guidata da insight precisi e misurabili.
                    </p>
                </div>

                {/* Cards Grid - Responsive Gap */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                    {features.map((feature, index) => {
                        // Different animation speeds for each card: 8s, 10s, 12s
                        const animationSpeed = index === 0 ? '8s' : index === 1 ? '10s' : '12s';

                        return (
                            <div key={index} className="relative h-[450px] rounded-2xl group">
                                {/* Animated Blue Gradient Border - traveling spotlight */}
                                <div className="absolute -inset-[1px] rounded-2xl overflow-hidden pointer-events-none">
                                    <div
                                        className="absolute -inset-[100%]"
                                        style={{
                                            background: `conic-gradient(
                                            transparent 348deg,
                                            rgba(59, 130, 246, 0.5) 353deg,
                                            rgba(96, 165, 250, 0.9) 358deg,
                                            rgba(147, 197, 253, 1) 360deg,
                                            rgba(147, 197, 253, 1) 0deg,
                                            rgba(96, 165, 250, 0.9) 2deg,
                                            rgba(59, 130, 246, 0.5) 7deg,
                                            transparent 12deg
                                        )`,
                                            animation: `borderRotate ${animationSpeed} linear infinite`
                                        }}
                                    ></div>
                                </div>

                                {/* Card Content */}
                                <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-[600ms] group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(0,83,208,0.5)]">
                                    <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-110" />

                                    {/* Gray border overlay - subtle and thin */}
                                    <div
                                        className="absolute inset-0 rounded-2xl pointer-events-none z-30"
                                        style={{
                                            boxShadow: 'inset 0 0 0 1px rgba(209, 213, 219, 0.4)'
                                        }}
                                    ></div>

                                    <div
                                        className="absolute inset-0 z-10"
                                        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0.9) 100%)' }}
                                    ></div>
                                    <div className="absolute bottom-0 left-0 w-full pb-10 px-6 z-20 text-center transition-all duration-[600ms]">
                                        <h3 className="text-3xl font-bold text-white tracking-wider mb-2 transition-transform duration-[600ms] group-hover:-translate-y-2">{feature.title}</h3>
                                        <p className="text-gray-300 leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-[600ms] group-hover:max-h-[200px] group-hover:opacity-100">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* CSS Keyframes */}
                                <style jsx>{`
                                @keyframes borderRotate {
                                    0% {
                                        transform: rotate(0deg);
                                    }
                                    100% {
                                        transform: rotate(360deg);
                                    }
                                }
                            `}</style>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features
