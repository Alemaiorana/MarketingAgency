import { useEffect, useRef, useState } from 'react'
import logoInfront from '../assets/logo-infront.png'
import logoInac from '../assets/logo-inac.png'

const Sponsors = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const isDraggingRef = useRef(false);
    const momentum = useRef(0.5); // Start with base speed
    const lastX = useRef(0);
    const lastMoveTime = useRef(0);

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

        const baseSpeed = 0.5;

        const animate = () => {
            if (!isDraggingRef.current) {
                // Apply momentum
                scrollContainer.scrollLeft += momentum.current;

                // Smoothly decay momentum towards base speed
                // Lerp factor 0.05 gives a nice ~1s transition
                momentum.current = momentum.current * 0.95 + baseSpeed * 0.05;
            } else {
                // While dragging, check if stopped
                if (Date.now() - lastMoveTime.current > 50) {
                    momentum.current = 0;
                }
            }

            // Infinite loop logic
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
            } else if (scrollContainer.scrollLeft <= 0) {
                scrollContainer.scrollLeft += scrollContainer.scrollWidth / 2;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        isDraggingRef.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        lastX.current = e.pageX;
        lastMoveTime.current = Date.now();
        momentum.current = 0; // Stop auto-scroll immediately on grab
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        isDraggingRef.current = false;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        isDraggingRef.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.pageX;
        const walk = (x - startX.current) * 2; // Scroll-fast multiplier
        scrollRef.current.scrollLeft = scrollLeft.current - walk;

        // Calculate momentum based on movement since last frame
        const delta = x - lastX.current;
        momentum.current = -delta; // Invert because dragging left moves content right

        lastX.current = x;
        lastMoveTime.current = Date.now();
    };

    return (
        <section className="py-24 bg-black/40 overflow-hidden">
            <div className="mb-16 text-center">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Partner & Sponsor</h3>
            </div>

            <div
                ref={scrollRef}
                className={`flex gap-[60px] overflow-x-hidden cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
                style={{ scrollBehavior: 'auto' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {/* First set */}
                {sponsors.map((sponsor, index) => (
                    <div
                        key={`first-${sponsor.id}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-20 opacity-60 hover:opacity-100 transition-opacity duration-300 select-none"
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-full w-auto object-contain grayscale pointer-events-none"
                        />
                    </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {sponsors.map((sponsor, index) => (
                    <div
                        key={`second-${sponsor.id}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-20 opacity-60 hover:opacity-100 transition-opacity duration-300 select-none"
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-full w-auto object-contain grayscale pointer-events-none"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Sponsors
