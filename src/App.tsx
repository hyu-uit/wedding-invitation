import './App.css'
import AddressSection from './components/AddressSection'
import CeremonySection from './components/CeremonySection'
import ClosingSection from './components/ClosingSection'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import InvitationSection from './components/InvitationSection'
import ResponseSection from './components/ResponseSection'
import WelcomeSection from './components/WelcomeSection'

function App() {
  return (
    <main className="invitation">
      <HeroSection />
      <InvitationSection />
      <CeremonySection />
      <WelcomeSection />
      <AddressSection />
      <GallerySection />
      <ResponseSection />
      <ClosingSection />
    </main>
  )
}

export default App
