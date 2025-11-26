import { useState, useEffect } from 'react'
import sectionBg from '../assets/fht5.jpg'

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const [isComplete, setIsComplete] = useState(false)

    const words = ['MEDIA', 'MARKETING', 'EUROPA']
    const typingSpeed = 100 // ms per character
    const wordDelay = 300 // ms between words

    useEffect(() => {
        // Cursor blink animation
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 500)

        return () => clearInterval(cursorInterval)
    }, [])

    useEffect(() => {
        if (currentWordIndex >= words.length) {
            setIsComplete(true)
            return
        }

        const currentWord = words[currentWordIndex]

        if (currentCharIndex < currentWord.length) {
            // Type next character
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + currentWord[currentCharIndex])
                setCurrentCharIndex(prev => prev + 1)
            }, typingSpeed)

            return () => clearTimeout(timeout)
        } else {
            // Move to next word
            const timeout = setTimeout(() => {
                if (currentWordIndex < words.length - 1) {
                    setDisplayedText(prev => prev + ' ')
                }
                setCurrentWordIndex(prev => prev + 1)
                setCurrentCharIndex(0)
            }, wordDelay)

            return () => clearTimeout(timeout)
        }
    }, [currentCharIndex, currentWordIndex])

    // Calculate which word is being typed
    const getWordPositions = () => {
        const positions = []
        let charCount = 0

        words.forEach((word, index) => {
            positions.push({
                word,
                start: charCount,
                end: charCount + word.length,
                index
            })
            charCount += word.length + 1 // +1 for space
        })

        return positions
    }

    const renderText = () => {
        const positions = getWordPositions()
        const parts = []

        positions.forEach(({ word, start, end, index }) => {
            const wordStart = Math.max(0, start)
            const wordEnd = Math.min(displayedText.length, end)
            const displayWord = displayedText.substring(wordStart, wordEnd)

            if (displayWord) {
                const isMarketing = word === 'MARKETING'

                if (index === 0) {
                    // MEDIA - white
                    parts.push(
                        <span key={index} className="whitespace-nowrap">
                            {displayWord}
                        </span>
                    )
                } else if (isMarketing) {
                    // MARKETING - gradient applied immediately
                    parts.push(
                        <span key={index} className="whitespace-nowrap">
                            {' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                {displayWord}
                            </span>
                        </span>
                    )
                } else {
                    // EUROPA - white
                    parts.push(
                        <span key={index}>
                            <br />
                            {displayWord}
                        </span>
                    )
                }
            }
        })

        return parts
    }

    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center pt-20 overflow-hidden">
            {/* Global Hero Background */}
            <div className="absolute inset-0 z-0">
                <img src={sectionBg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 90%, #000000 100%)' }}
                ></div>
            </div>

            {/* Content */}
            <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white min-h-[180px]">
                        {renderText()}
                        {!isComplete && (
                            <span
                                className={`inline-block w-[4px] h-[1em] bg-white ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{ verticalAlign: 'text-bottom' }}
                            />
                        )}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                        Agenzia di marketing e comunicazione che opera in quattro ambiti strategici: turismo, comunicazione editoriale, marketing sportivo e marketing politico.
                    </p>
                    <button className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-3 rounded-full font-semibold group transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-white/20">
                        <span className="relative z-10">SCOPRI DI PIÙ</span>
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
