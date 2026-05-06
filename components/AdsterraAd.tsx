'use client'

import { useEffect, useState } from 'react'

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
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [adLoaded, setAdLoaded] = useState(false)

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src*="${adKey}"]`)
    if (existingScript) {
      setScriptLoaded(true)
      return
    }

    // Load the Adsterra script dynamically
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = `https://pl29361095.profitablecpmratenetwork.com/${adKey}/invoke.js`
    
    script.onload = () => {
      console.log('✅ Adsterra script loaded:', adKey)
      setScriptLoaded(true)
    }

    script.onerror = () => {
      console.error('❌ Adsterra script failed to load:', adKey)
    }

    // Add script to document body
    document.body.appendChild(script)

    // Check if ad loaded after 5 seconds
    const checkTimer = setTimeout(() => {
      const container = document.getElementById(`container-${adKey}`)
      if (container && container.children.length > 0) {
        setAdLoaded(true)
        console.log('✅ Ad content loaded in container')
      } else {
        console.warn('⚠️ Ad container is empty after 5 seconds')
      }
    }, 5000)

    return () => {
      clearTimeout(checkTimer)
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [adKey])

  return (
    <div className={`adsterra-ad-wrapper ${className}`}>
      {/* Debug info - remove in production */}
      <div className="text-xs text-gray-400 mb-2 p-2 bg-gray-50 rounded">
        <div>🔧 Debug Info:</div>
        <div>Script: {scriptLoaded ? '✅ Loaded' : '⏳ Loading...'}</div>
        <div>Ad: {adLoaded ? '✅ Loaded' : '⏳ Waiting...'}</div>
        <div>Key: {adKey.substring(0, 20)}...</div>
      </div>

      <div 
        id={`container-${adKey}`} 
        className="adsterra-ad-container"
        style={{
          minHeight: '100px',
          border: '2px dashed #e5e7eb',
          borderRadius: '8px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9fafb'
        }}
      >
        {!adLoaded && (
          <div className="text-center text-gray-400">
            <div className="animate-pulse">⏳ Loading ad...</div>
            <div className="text-xs mt-2">
              {scriptLoaded ? 'Script loaded, waiting for ad content...' : 'Loading script...'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
