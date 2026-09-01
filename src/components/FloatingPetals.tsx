import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

type PetalMotion = {
  left: string
  size: string
  delay: number
  duration: number
  drift: number
  spin: number
  scale: number
  opacity: number
}

const PETALS: PetalMotion[] = [
  { left: '-12%', size: '1.1rem', delay: -2, duration: 17, drift: 54, spin: 210, scale: 0.9, opacity: 0.68 },
  { left: '-3%', size: '0.72rem', delay: -10, duration: 14, drift: 46, spin: -185, scale: 0.66, opacity: 0.5 },
  { left: '7%', size: '1.28rem', delay: -16, duration: 21, drift: 52, spin: 265, scale: 1, opacity: 0.66 },
  { left: '18%', size: '0.86rem', delay: -6, duration: 16, drift: 43, spin: -220, scale: 0.76, opacity: 0.56 },
  { left: '29%', size: '1rem', delay: -13, duration: 19, drift: 48, spin: 235, scale: 0.84, opacity: 0.62 },
  { left: '41%', size: '0.68rem', delay: -19, duration: 15, drift: 39, spin: -175, scale: 0.64, opacity: 0.46 },
  { left: '51%', size: '1.36rem', delay: -4, duration: 22, drift: 47, spin: 280, scale: 1.04, opacity: 0.7 },
  { left: '61%', size: '0.82rem', delay: -15, duration: 17, drift: 37, spin: -205, scale: 0.72, opacity: 0.54 },
  { left: '70%', size: '1.12rem', delay: -8, duration: 20, drift: 35, spin: 245, scale: 0.88, opacity: 0.64 },
  { left: '78%', size: '0.64rem', delay: -21, duration: 14, drift: 30, spin: -165, scale: 0.6, opacity: 0.44 },
]

function FloatingPetals() {
  const fieldRef = useRef<HTMLDivElement>(null)
  const petalRefs = useRef<Array<HTMLSpanElement | null>>([])

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
        PETALS.forEach((petal, index) => {
          const element = petalRefs.current[index]

          if (!element) return

          const timeline = gsap.timeline({
            repeat: -1,
            repeatDelay: 1.5,
            delay: petal.delay,
          })

          timeline
            .set(element, {
              autoAlpha: 0,
              rotation: -18,
              scale: petal.scale,
              x: 0,
              y: 0,
            })
            .to(element, {
              autoAlpha: petal.opacity,
              duration: 1.4,
              ease: 'power1.out',
            })
            .to(element, {
              duration: petal.duration * 0.46,
              ease: 'none',
              rotation: `+=${petal.spin * 0.42}`,
              x: `${petal.drift * 0.42}vw`,
              y: '52vh',
            })
            .to(element, {
              duration: petal.duration * 0.54,
              ease: 'none',
              rotation: `+=${petal.spin * 0.58}`,
              x: `${petal.drift}vw`,
              y: '122vh',
            })
            .to(
              element,
              {
                autoAlpha: 0,
                duration: 1.8,
                ease: 'power1.in',
              },
              '-=1.8',
            )
        })
      })

      return () => media.revert()
    },
    { scope: fieldRef },
  )

  return (
    <div ref={fieldRef} className="floating-petals" aria-hidden="true">
      {PETALS.map((petal, index) => (
        <span
          key={`${petal.left}-${index}`}
          ref={(element) => {
            petalRefs.current[index] = element
          }}
          className="floating-petal"
          style={{ left: petal.left, width: petal.size }}
        />
      ))}
    </div>
  )
}

export default FloatingPetals
