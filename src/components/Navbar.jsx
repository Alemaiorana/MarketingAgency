import { useState } from 'react'
import logo from '../assets/1.png' // Assuming 1.png is the logo based on file size/name, will verify

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="absolute top-0 left-0 w-full z-50 py-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold font-heading">
                    {/* Placeholder if image not correct, but using 1.png as guess */}
                    <img src={logo} alt="MMEuropa" className="h-12 object-contain" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                    <a href="#" className="hover:text-primary-blue transition-colors">HOME</a>
                    <a href="#" className="hover:text-primary-blue transition-colors">CHI SIAMO</a>
                    <a href="#" className="hover:text-primary-blue transition-colors">SERVIZI</a>
                    <a href="#" className="hover:text-primary-blue transition-colors">CONTATTI</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-bg-dark/95 backdrop-blur-sm py-4 border-t border-gray-800">
                    <div className="container mx-auto flex flex-col space-y-4">
                        <a href="#" className="block hover:text-primary-blue">HOME</a>
                        <a href="#" className="block hover:text-primary-blue">CHI SIAMO</a>
                        <a href="#" className="block hover:text-primary-blue">SERVIZI</a>
                        <a href="#" className="block hover:text-primary-blue">CONTATTI</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
