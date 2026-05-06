'use client'

import { useEffect } from 'react'

interface AdsterraAdProps {
  adKey: string
  className?: string
}

/**
 * Adsterra Native Banner Ad Component
 * 
 * Usage:
 * <AdsterraAd adKey="f4534a9871703f6308d826cd5104e300" />
 */
export default function AdsterraAd({ adKey, className = '' }: AdsterraAdProps) {
  useEffect(() => {
    // Load the Adsterra script dynamically
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = `https://pl29361095.profitablecpmratenetwork.com/${adKey}/invoke.js`
    
    const container = document.getElementById(`container-${adKey}`)
    if (container && !container.querySelector('script')) {
      container.appendChild(script)
    }

    return () => {
      // Cleanup on unmount
      if (container && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [adKey])

  return (
    <div className={`adsterra-ad-wrapper ${className}`}>
      <div id={`container-${adKey}`} className="adsterra-ad-container" />
    </div>
  )
}

