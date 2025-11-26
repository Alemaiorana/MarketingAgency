import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import cube1 from '../assets/cube_0000_Layer-1.png'
import cube2 from '../assets/cube_0001_Layer-2.png'
import cube3 from '../assets/cube_0002_Layer-3.png'
import cube4 from '../assets/cube_0003_Layer-4.png'
import cubeBackground from '../assets/cube_0004_Layer-0.png'

const Network = () => {
    const sectionRef = useRef(null)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect()
                const sectionTop = rect.top
                const windowHeight = window.innerHeight

                // Calculate scroll progress relative to this section
                const scrollProgress = (windowHeight - sectionTop) / (windowHeight + rect.height)
                setScrollY(scrollProgress)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial call

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Calculate cube positions based on scroll
    // Cubes start from FAR BELOW the section and move up through entire section, exiting at top
    // Calculate cube positions based on scroll
    // Cubes start from FAR BELOW the section and move up through entire section, exiting at top
    const getCubeStyle = (index, baseSpeed = 1, extraTopDistance = 0, startPos = 250) => {
        const speed = baseSpeed * (1 + index * 0.2) // Moderate variation in speeds
        const progress = scrollY * speed * 1.2 // Faster movement (1.2x multiplier)

        // Start from startPos below to -50% above
        const endPos = -50 - extraTopDistance // Far above viewport
        const range = startPos - endPos
        const yPosition = startPos - (progress * range)

        // Fade in when entering from bottom, fade out when exiting from top
        let opacity = 1
        if (progress < 0.1) {
            opacity = progress / 0.1 // Quick fade in
        } else if (progress > 0.9) {
            opacity = 1 - ((progress - 0.9) / 0.1) // Quick fade out
        }

        return {
            transform: `translateY(${yPosition}%)`,
            opacity: opacity,
            transition: 'opacity 0.3s ease-out'
        }
    }

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={cubeBackground}
                    alt="Network Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Text Content */}
            <div className="container mx-auto relative z-20 pt-[240px] flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mb-8">
                    Pronto a trasformare <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        la tua strategia?
                    </span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                    Uniamo creatività, dati e tecnologia per portare il tuo brand al livello successivo.
                    Parla con noi e scopri come possiamo fare la differenza.
                </p>
                <button className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-white/20 hover:bg-white/10">
                    <span className="relative z-10 flex items-center gap-3 text-lg">
                        Inizia il Progetto
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </button>
            </div>

            {/* Parallax Cubes - BEHIND TEXT (z-10) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Cube 1 - Small cube, medium speed, NOW ON RIGHT - LATERAL -> 500% */}
                <img
                    src={cube1}
                    alt=""
                    className="absolute right-[12%] w-16 md:w-20"
                    style={getCubeStyle(0, 0.8, 0, 500)}
                />

                {/* Cube 4 - Medium-large cube, medium-fast speed, NOW ON LEFT - LATERAL -> 500% */}
                <img
                    src={cube4}
                    alt=""
                    className="absolute left-[15%] w-20 md:w-28"
                    style={getCubeStyle(3, 0.9, 15, 500)}
                />
            </div>

            {/* Parallax Cubes - ABOVE TEXT (z-30) */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {/* Cube 2 - Medium cube, slower, CENTER position, exits far up, ABOVE TEXT - CENTRAL -> 200% */}
                <img
                    src={cube2}
                    alt=""
                    className="absolute left-[45%] w-14 md:w-18"
                    style={getCubeStyle(1, 0.6, 20, 200)}
                />

                {/* Cube 3 - Large cube, fastest, CENTER-RIGHT position, passes over text, ABOVE TEXT - CENTRAL -> 200% */}
                <img
                    src={cube3}
                    alt=""
                    className="absolute left-[55%] w-28 md:w-36"
                    style={getCubeStyle(2, 1.0, 0, 200)}
                />
            </div>
        </section>
    )
}

export default Network
