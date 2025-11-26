const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold font-heading mb-6">MEDIA MARKETING EUROPA</h3>
                    <p className="text-gray-400 max-w-sm">
                        Trasformiamo idee e visioni in progetti concreti, misurabili e ad alto impatto per aziende, istituzioni e professionisti.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">Contatti</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li>info@mmeuropa.com</li>
                        <li>+39 012 345 6789</li>
                        <li>Via Roma 123, Milano</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">Social</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-primary-blue transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-primary-blue transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-primary-blue transition-colors">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
                © 2024 Media Marketing Europa. Tutti i diritti riservati.
            </div>
        </footer>
    )
}

export default Footer
