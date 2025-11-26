import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import InfoSection from './components/InfoSection'
import Network from './components/Network'
import Sponsors from './components/Sponsors'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <InfoSection />
        <VideoSection />
        <Sponsors />
        <Network />
      </main>
      <Footer />
    </div>
  )
}

export default App
