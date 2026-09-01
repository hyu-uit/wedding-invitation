import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import BowMark from './BowMark'

gsap.registerPlugin(useGSAP)

type InvitationCoverProps = {
  onOpening: () => void
  onOpened: () => void
}

function BrocadePattern() {
  const patternId = useId().replaceAll(':', '')

  return (
    <svg
      className="cover-brocade-pattern"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={patternId}
          width="210"
          height="150"
          patternUnits="userSpaceOnUse"
        >
          <g className="cover-cloud-stroke">
            <path d="M-28 92c20-7 25-32 8-43-17-12-37 4-27 21 8 13 29 6 26-7" />
            <path d="M-5 92c15 28 56 24 65-4 7-23-21-42-40-27-15 11-7 36 11 38 15 2 26-15 17-27" />
            <path d="M58 90c10-13 28-18 43-12 18 7 22 29 11 43-11 15-38 13-43-6-4-14 11-28 24-21 10 5 8 20-2 23" />
            <path d="M112 42c11-25 47-30 64-9 13 17 4 44-17 47-17 2-30-17-20-31 8-11 26-5 25 8" />
            <path d="M142 92c17-17 43-18 59-2 14 14 9 39-9 48-16 8-36-3-37-20-1-14 15-24 27-16 9 7 5 21-5 24" />
            <path d="M197 43c18-8 38 3 39 22 1 16-16 28-30 20-11-7-8-23 2-28" />
            <path d="M-8 127c32-7 48-2 68 16" />
            <path d="M112 8c18 4 31 14 38 30" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

function CornerOrnaments() {
  return (
    <>
      <span className="cover-corner cover-corner-top-left" />
      <span className="cover-corner cover-corner-top-right" />
      <span className="cover-corner cover-corner-bottom-right" />
      <span className="cover-corner cover-corner-bottom-left" />
    </>
  )
}

function CoverScene() {
  return (
    <div className="cover-scene">
      <BrocadePattern />
      <div className="cover-silk-ribbon" aria-hidden="true" />
      <div className="cover-centerpiece">
        <div className="cover-invitation">
          <CornerOrnaments />
          <p className="cover-kicker">Thiệp cưới</p>
          <span className="cover-happiness-mark">囍</span>
          <p className="cover-names">Huyền Trân · Nhựt Hòa</p>
          <p className="cover-date">16 · 09 · 2026</p>
          <p className="cover-blessing">Trân trọng kính mời</p>
        </div>
        <div className="cover-open-callout">
          <BowMark className="cover-open-bow" />
          <span>Chạm để mở</span>
        </div>
      </div>
    </div>
  )
}

function InvitationCover({ onOpening, onOpened }: InvitationCoverProps) {
  const coverRef = useRef<HTMLDivElement>(null)
  const leftPanelRef = useRef<HTMLDivElement>(null)
  const rightPanelRef = useRef<HTMLDivElement>(null)
  const [isOpening, setIsOpening] = useState(false)

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration

    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.body.classList.add('cover-is-open')

    return () => {
      document.body.classList.remove('cover-is-open')
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useGSAP(
    () => {
      if (
        !isOpening ||
        !coverRef.current ||
        !leftPanelRef.current ||
        !rightPanelRef.current
      ) {
        return
      }

      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(coverRef.current, { autoAlpha: 0 })
        onOpened()
      })

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const timeline = gsap.timeline({
          defaults: { ease: 'power4.inOut' },
          onComplete: onOpened,
        })

        timeline
          .to(
            leftPanelRef.current,
            {
              rotationY: -10,
              xPercent: -104,
              duration: 1.25,
            },
            0,
          )
          .to(
            rightPanelRef.current,
            {
              rotationY: 10,
              xPercent: 104,
              duration: 1.25,
            },
            0,
          )
          .to(
            '.cover-backdrop',
            {
              autoAlpha: 0,
              duration: 0.75,
              ease: 'power2.out',
            },
            0.2,
          )
          .to(
            coverRef.current,
            {
              autoAlpha: 0,
              duration: 0.35,
              ease: 'power2.out',
            },
            '-=0.2',
          )
      })

      return () => media.revert()
    },
    {
      dependencies: [isOpening],
      revertOnUpdate: true,
      scope: coverRef,
    },
  )

  const openCover = () => {
    if (isOpening) return

    onOpening()
    setIsOpening(true)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openCover()
    }
  }

  return (
    <div
      ref={coverRef}
      className="cover-screen"
      role="button"
      tabIndex={0}
      aria-label="Mở thiệp cưới của Huyền Trân và Nhựt Hòa"
      aria-busy={isOpening}
      onClick={openCover}
      onKeyDown={handleKeyDown}
    >
      <div className="cover-backdrop" aria-hidden="true" />
      <div className="cover-card" aria-hidden="true">
        <div ref={leftPanelRef} className="cover-panel cover-panel-left">
          <div className="cover-face cover-face-left">
            <CoverScene />
          </div>
        </div>
        <div ref={rightPanelRef} className="cover-panel cover-panel-right">
          <div className="cover-face cover-face-right">
            <CoverScene />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvitationCover
