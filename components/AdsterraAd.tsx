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
 * 
 * Note: Ads only work on production domains approved by Adsterra.
 * They will NOT display on localhost.
 */
export default function AdsterraAd({ adKey, className = '' }: AdsterraAdProps) {
  const [isClient, setIsClient] = useState(false)
  const [isLocalhost, setIsLocalhost] = useState(false)

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)
    
    // Check if we're on localhost
    const hostname = window.location.hostname
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1'
    setIsLocalhost(isLocal)

    if (isLocal) {
      console.warn('⚠️ Adsterra ads do not work on localhost. Deploy to production to see ads.')
      return
    }

    // Check if script already exists
    const existingScript = document.querySelector(`script[src*="${adKey}"]`)
    if (existingScript) {
      console.log('✅ Adsterra script already loaded')
      return
    }

    // Load the Adsterra script
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = `https://pl29361095.profitablecpmratenetwork.com/${adKey}/invoke.js`
    
    script.onload = () => {
      console.log('✅ Adsterra script loaded successfully')
    }

    script.onerror = (error) => {
      console.error('❌ Adsterra script failed to load:', error)
    }

    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [adKey])

  // Don't render anything until client-side
  if (!isClient) {
    return (
      <div className={`adsterra-ad-wrapper ${className}`}>
        <div 
          className="adsterra-ad-container"
          style={{
            minHeight: '100px',
            width: '100%'
          }}
        />
      </div>
    )
  }

  // Show placeholder on localhost
  if (isLocalhost) {
    return (
      <div className={`adsterra-ad-wrapper ${className}`}>
        <div 
          className="adsterra-ad-container"
          style={{
            minHeight: '100px',
            border: '2px dashed #fbbf24',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fffbeb',
            gap: '8px'
          }}
        >
          <div style={{ fontSize: '32px' }}>⚠️</div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#92400e', textAlign: 'center' }}>
            Adsterra Ad Placeholder
          </div>
          <div style={{ fontSize: '12px', color: '#78350f', textAlign: 'center', maxWidth: '400px' }}>
            Ads only work on production. Deploy to Vercel to see real ads.
          </div>
          <div style={{ fontSize: '11px', color: '#a16207', fontFamily: 'monospace' }}>
            Key: {adKey.substring(0, 20)}...
          </div>
        </div>
      </div>
    )
  }

  // Production: render actual ad container
  return (
    <div className={`adsterra-ad-wrapper ${className}`}>
      <div 
        id={`container-${adKey}`} 
        className="adsterra-ad-container"
        style={{
          minHeight: '100px',
          width: '100%'
        }}
      />
    </div>
  )
}
