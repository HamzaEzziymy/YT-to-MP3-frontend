'use client'

import { useEffect, useState } from 'react'

interface AdsterraAdProps {
  adKey: string
  className?: string
}

export default function AdsterraAd({ adKey, className = '' }: AdsterraAdProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Load Adsterra script
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = `https://pl29361095.profitablecpmratenetwork.com/${adKey}/invoke.js`
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [adKey])

  if (!mounted) {
    return <div style={{ minHeight: '100px' }} />
  }

  return (
    <div className={className}>
      <div id={`container-${adKey}`} style={{ minHeight: '100px' }} />
    </div>
  )
}
