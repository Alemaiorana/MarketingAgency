import { useEffect, useRef, useState } from 'react'
import videoBg from '../assets/video.mp4'

const VideoSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [hasSpace, setHasSpace] = useState(true)
    const sectionRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const checkSpace = () => {
            if (textRef.current) {
                const rect = textRef.current.getBoundingClientRect()
                // If content starts closer than 100px from left edge, hide decoration
                setHasSpace(rect.left > 100)
            }
        }

        checkSpace()
        window.addEventListener('resize', checkSpace)
        return () => window.removeEventListener('resize', checkSpace)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.5 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-bg-dark flex items-center py-[150px] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Lateral Decorative Element (Left) */}
            <div className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 transition-all duration-[2000ms] delay-700 ${isVisible && hasSpace ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-[1px] h-24 bg-gradient-to-b from-transparent to-transparent transition-all duration-[2000ms] delay-700 ${isVisible && hasSpace ? 'via-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'via-white/20'}`}></div>
                <span className={`writing-vertical-rl text-xs tracking-[0.3em] font-mono uppercase rotate-180 transition-all duration-[2000ms] delay-700 ${isVisible && hasSpace ? 'text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'text-white/20'}`}>
                    Network Infrastructure
                </span>
                <div className={`w-[1px] h-24 bg-gradient-to-b from-transparent to-transparent transition-all duration-[2000ms] delay-700 ${isVisible && hasSpace ? 'via-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.8)]' : 'via-white/20'}`}></div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div ref={textRef} className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                            Una rete intelligente di professionisti, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                connessa in tutta Italia.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            Il nostro modello operativo si basa su un network di esperti distribuiti sul territorio, selezionati e attivati in base alle necessità del progetto.<br /><br />
                            Un ecosistema flessibile, coordinato dal nostro hub strategico, capace di garantire efficienza, rapidità e una presenza localizzata dove serve, quando serve.
                        </p>
                    </div>

                    {/* Right Column: Video/Media Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 group">
                        {/* Video Element */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                        >
                            <source src={videoBg} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Optional Overlay for unhovered state */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>

                        {/* Glow effect behind the container */}
                        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Decorative Corner Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-white/10 rounded-br-3xl -z-10 hidden md:block"></div>
                    </div>
                </div>
            </div>

            {/* CSS for vertical text */}
            <style jsx>{`
                .writing-vertical-rl {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </section>
    )
}

export default VideoSection
