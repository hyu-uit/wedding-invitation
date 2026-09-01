import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import './App.css'
import AddressSection from './components/AddressSection'
import CeremonySection from './components/CeremonySection'
import ClosingSection from './components/ClosingSection'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import InvitationSection from './components/InvitationSection'
import InvitationCover from './components/InvitationCover'
import FloatingPetals from './components/FloatingPetals'
import MusicPlayer, {
  type MusicPlayerHandle,
} from './components/MusicPlayer'
import ResponseSection from './components/ResponseSection'
import WelcomeSection from './components/WelcomeSection'

gsap.registerPlugin(useGSAP)

type RevealVariant = {
  x?: number
  y?: number
  scale?: number
  clipPath?: string
}

const revealVariants: RevealVariant[] = [
  { y: 32 },
  { x: -40 },
  { x: 40 },
  { y: -32 },
  { scale: 0.985, clipPath: 'inset(6% 0 6% 0)' },
  { x: -36 },
  { y: 28 },
]

function App() {
  const [coverVisible, setCoverVisible] = useState(true)
  const invitationRef = useRef<HTMLElement>(null)
  const musicPlayerRef = useRef<MusicPlayerHandle>(null)

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(
        'section',
        invitationRef.current,
      )

      if (sections.length < 2) return

      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(sections, { clearProps: 'opacity,transform,clipPath' })
      })

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const revealSections = sections.slice(1)
        const maskedSections = new WeakSet<HTMLElement>()

        revealSections.forEach((section, index) => {
          const variant = revealVariants[index % revealVariants.length]

          gsap.set(section, {
            opacity: 0,
            ...variant,
          })

          if (variant.clipPath) maskedSections.add(section)
        })

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return

              const target = entry.target as HTMLElement

              gsap.to(target, {
                duration: 0.9,
                ease: 'power3.out',
                opacity: 1,
                overwrite: true,
                clearProps: 'opacity,transform,clipPath',
                clipPath: maskedSections.has(target)
                  ? 'inset(0% 0% 0% 0%)'
                  : undefined,
                scale: 1,
                x: 0,
                y: 0,
              })
              observer.unobserve(entry.target)
            })
          },
          { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
        )

        revealSections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
      })

      return () => media.revert()
    },
    { scope: invitationRef },
  )

  return (
    <>
      {coverVisible && (
        <InvitationCover
          onOpening={() => musicPlayerRef.current?.play()}
          onOpened={() => setCoverVisible(false)}
        />
      )}
      <FloatingPetals />
      <MusicPlayer ref={musicPlayerRef} visible={!coverVisible} />
      <main ref={invitationRef} className="invitation">
        <HeroSection />
        <InvitationSection />
        <CeremonySection />
        <WelcomeSection />
        <AddressSection />
        <GallerySection />
        <ResponseSection />
        <ClosingSection />
      </main>
    </>
  )
}

export default App
