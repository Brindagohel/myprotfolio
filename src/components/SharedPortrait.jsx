import React, { useEffect, useState, useRef, useCallback } from 'react'
import { ASSETS } from '../constants/assets'

export default function SharedPortrait({ activeSection, anchorRefs }) {
  const [style, setStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
  })
  const [isReady, setIsReady] = useState(false)
  const portraitRef = useRef(null)

  const measureAndPosition = useCallback(() => {
    const targetSlot = anchorRefs[activeSection]?.current
    if (!targetSlot) return

    const rect = targetSlot.getBoundingClientRect()
    // Calculate document-relative coordinates so scrolling never causes jitter or rubber-banding
    const docTop = rect.top + window.scrollY
    const docLeft = rect.left + window.scrollX

    setStyle({
      top: docTop,
      left: docLeft,
      width: rect.width,
      height: rect.height,
      opacity: 1,
    })

    if (!isReady) {
      setIsReady(true)
    }
  }, [activeSection, anchorRefs, isReady])

  // Update position when activeSection changes
  useEffect(() => {
    const rafId = requestAnimationFrame(measureAndPosition)
    const t1 = setTimeout(measureAndPosition, 60)
    const t2 = setTimeout(measureAndPosition, 250)
    const t3 = setTimeout(measureAndPosition, 600)

    const handleResize = () => {
      requestAnimationFrame(measureAndPosition)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      window.removeEventListener('resize', handleResize)
    }
  }, [activeSection, measureAndPosition])

  return (
    <div
      ref={portraitRef}
      className={`shared-portrait-anchor ${isReady ? 'ready' : ''} section-${activeSection}`}
      style={{
        transform: `translate3d(${style.left}px, ${style.top}px, 0)`,
        width: `${style.width}px`,
        height: `${style.height}px`,
        opacity: style.opacity,
      }}
      aria-hidden="true"
    >
      <div className="portrait-image-wrapper">
        <img
          src={ASSETS.portraitCutout}
          alt="Student Portrait"
          className="portrait-natural-image"
          onError={(e) => {
            if (e.target.src !== ASSETS.referenceCutout) {
              e.target.src = ASSETS.referenceCutout
            }
          }}
        />
      </div>
    </div>
  )
}
