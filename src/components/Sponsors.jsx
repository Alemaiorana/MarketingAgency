import { useEffect, useRef } from 'react'
import logoInfront from '../assets/logo-infront.png'
import logoInac from '../assets/logo-inac.png'

const Sponsors = () => {
    const scrollRef = useRef(null);

    const sponsors = [
        { id: 1, logo: logoInfront, name: 'Infront' },
        { id: 2, logo: logoInac, name: 'INAC' },
        { id: 3, logo: logoInfront, name: 'Infront' },
        { id: 4, logo: logoInac, name: 'INAC' },
        { id: 5, logo: logoInfront, name: 'Infront' },
        { id: 6, logo: logoInac, name: 'INAC' },
        { id: 7, logo: logoInfront, name: 'Infront' },
        { id: 8, logo: logoInac, name: 'INAC' },
        { id: 9, logo: logoInfront, name: 'Infront' },
        { id: 10, logo: logoInac, name: 'INAC' },
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5; // pixels per frame

        const animate = () => {
            scrollPosition += scrollSpeed;

            // Reset when halfway through (since we duplicate the content)
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section className="py-16 bg-black/40 overflow-hidden">
            <div className="mb-8 text-center">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Partner & Sponsor</h3>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-[60px] overflow-x-hidden"
                style={{ scrollBehavior: 'auto' }}
            >
                {/* First set */}
                {sponsors.map((sponsor, index) => (
                    <div
                        key={`first-${sponsor.id}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-full w-auto object-contain grayscale"
                        />
                    </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {sponsors.map((sponsor, index) => (
                    <div
                        key={`second-${sponsor.id}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-full w-auto object-contain grayscale"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Sponsors
