'use client'

import { useEffect, useRef } from 'react'

interface AdSlotProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'leaderboard'
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdSlot({ slot, format = 'auto', className = '' }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null)
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (!adsenseId) return
    try {
      if (typeof window !== 'undefined') {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }
    } catch {
      // AdSense not loaded yet
    }
  }, [adsenseId])

  if (!adsenseId) {
    // Development placeholder
    const heightClass =
      format === 'rectangle'
        ? 'min-h-[250px]'
        : format === 'leaderboard'
        ? 'min-h-[90px]'
        : 'min-h-[90px]'

    return (
      <div
        className={`ad-slot ${heightClass} ${className}`}
        aria-hidden="true"
        role="presentation"
      >
        <span className="text-xs text-gray-400 select-none">Ad</span>
      </div>
    )
  }

  const adStyle: React.CSSProperties =
    format === 'rectangle'
      ? { display: 'block', minHeight: 250 }
      : format === 'leaderboard'
      ? { display: 'block', minHeight: 90 }
      : { display: 'block' }

  return (
    <div className={`overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
