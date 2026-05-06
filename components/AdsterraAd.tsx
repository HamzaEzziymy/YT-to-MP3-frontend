'use client'

import { useEffect, useState } from 'react'

interface AdsterraAdProps {
  adKey: string
  className?: string
}

export default function AdsterraAd({ adKey, className = '' }: AdsterraAdProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Only run on client side to avoid hydration errors
    setIsClient(true)

    // Check if we're on localhost
    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

    // Don't load ads on localhost
    if (isLocalhost) {
      console.warn('⚠️ Adsterra ads do not work on localhost. Deploy to production to test ads.')
      return
    }

    // Check if script already exists (prevent duplicates)
    const existingScript = document.querySelector(`script[src*="${adKey}"]`)
    if (existingScript) {
      console.log('Ad script already loaded for key:', adKey)
      return
    }

    // Create and inject the script
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = `https://pl29361095.profitablecpmratenetwork.com/${adKey}/invoke.js`
    
    // Add error handler
    script.onerror = () => {
      console.error('Failed to load Adsterra ad script:', adKey)
    }

    // Add load handler
    script.onload = () => {
      console.log('Adsterra ad script loaded:', adKey)
    }
    
    // Append to document head (better practice than body)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Remove script on unmount
      const scriptToRemove = document.querySelector(`script[src*="${adKey}"]`)
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove)
      }
      
      // Remove the ad container content
      const container = document.getElementById(`container-${adKey}`)
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [adKey])

  // Don't render anything during SSR to avoid hydration errors
  if (!isClient) {
    return null
  }

  // Check if localhost and show warning
  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

  if (isLocalhost) {
    return (
      <div className={`bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 text-center ${className}`}>
        <p className="text-sm text-yellow-800">
          ⚠️ <strong>Ads only work on production domains</strong>
        </p>
        <p className="text-xs text-yellow-600 mt-1">
          Deploy to Vercel to see ads
        </p>
      </div>
    )
  }

  // Render the container div exactly as Adsterra provides
  return (
    <div className={className}>
      <div id={`container-${adKey}`} className="min-h-[100px]"></div>
    </div>
  )
}
