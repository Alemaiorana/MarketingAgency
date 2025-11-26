import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const InfoSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            title: "Strategia & Comunicazione Politica",
            description: "Trasformiamo la visione politica in consenso elettorale tangibile. Attraverso l'analisi del contesto e la gestione della reputazione, sviluppiamo messaggi persuasivi e strategie di comunicazione multicanale per candidati e partiti.",
            tags: ["Analisi Dati", "Reputazione", "Campagne Elettorali"]
        },
        {
            title: "Sports Marketing & Management",
            description: "La nostra rete consolidata nel mondo sportivo ci permette di creare partnership efficaci e nuove opportunità di crescita. Affianchiamo squadre, atleti e brand dalle sponsorizzazioni agli eventi.",
            tags: ["Sponsorizzazioni", "Eventi", "Gestione Atleti"]
        },
        {
            title: "Marketing Turistico & Education",
            description: "Siamo specializzati nell'organizzazione di viaggi studio internazionali. Collaboriamo con scuole ed enti educativi per creare esperienze complete che comprendono corsi di lingua e attività culturali.",
            tags: ["Viaggi Studio", "Partnership Scuole", "Experience"]
        },
        {
            title: "Content Creation & Editoria Sportiva",
            description: "Produciamo contenuti editoriali e multimediali di alto profilo per il mondo dello sport. Dallo storytelling degli atleti alla copertura di eventi, garantiamo una narrazione coinvolgente e professionale.",
            tags: ["Video Production", "Social Media", "Storytelling"]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-blue-500 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">I Nostri Servizi</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Competenze verticali, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">visione d'insieme.</span>
                    </h2>
                </div>

                {/* Services List - Full Width Horizontal Layout */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative py-6 cursor-pointer group border-b border-white/5 last:border-0 transition-all duration-500 hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent"
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {/* Active Indicator Line */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${activeIndex === index
                                    ? 'bg-gradient-to-b from-blue-500 to-indigo-500 opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                                    : 'bg-gray-800 opacity-50 group-hover:bg-gray-700'
                                }`}></div>

                            {/* Content Layout */}
                            <div className="flex items-start justify-between gap-8 pl-8">
                                {/* Left: Text Content */}
                                <div className="flex-1">
                                    <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${activeIndex === index
                                            ? 'text-white translate-x-2'
                                            : 'text-gray-600 group-hover:text-gray-400'
                                        }`}>
                                        {service.title}
                                    </h3>

                                    {/* Smooth Accordion Animation */}
                                    <div className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}>
                                        <div className="overflow-hidden">
                                            <div className={`pt-2 pb-10 pl-10 pr-5 transition-opacity duration-500 delay-200 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                                                }`}>
                                                <p className="text-gray-400 leading-relaxed text-lg mb-6 max-w-3xl">
                                                    {service.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-3 mb-6">
                                                    {service.tags.map((tag, i) => (
                                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-blue-300 tracking-wide">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <button className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 text-white px-6 py-2 rounded-full text-sm font-medium group/btn transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-white/20">
                                                    <span className="relative z-10 flex items-center">
                                                        Scopri di più
                                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                    </span>
                                                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 ease-in-out group-hover/btn:left-[100%]"></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Animated Number (Bottom Aligned) */}
                                <div className="flex items-end justify-end self-end pb-2">
                                    <div className="relative">
                                        {/* Outline number */}
                                        <span className={`text-[8rem] font-bold leading-none select-none font-outline-2 tracking-tighter transition-all duration-500 ${activeIndex === index ? 'text-white/10' : 'text-white/5'
                                            }`}>
                                            0{index + 1}
                                        </span>

                                        {/* Filled number with animation */}
                                        <span
                                            className="absolute inset-0 text-[8rem] font-bold text-white leading-none select-none tracking-tighter overflow-hidden"
                                            style={{
                                                WebkitTextFillColor: 'white',
                                                clipPath: activeIndex === index ? 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                                                animation: activeIndex === index ? 'fillFromBottom 1.5s ease-out 1s forwards, subtlePulse 4s ease-in-out 2.5s infinite' : 'none'
                                            }}
                                        >
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* CSS Keyframes */}
                            <style jsx>{`
                                @keyframes fillFromBottom {
                                    from {
                                        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
                                    }
                                    to {
                                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                                    }
                                }
                                
                                @keyframes subtlePulse {
                                    0%, 100% {
                                        opacity: 0.9;
                                    }
                                    50% {
                                        opacity: 1;
                                    }
                                }
                            `}</style>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InfoSection
