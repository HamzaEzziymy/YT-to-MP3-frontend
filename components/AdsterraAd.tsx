'use client'

import { useEffect } from 'react'

interface AdsterraAdProps {
  adKey: string
}

export default function AdsterraAd({ adKey }: AdsterraAdProps) {
  useEffect(() => {
    // Create and inject the script exactly as Adsterra provides
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = `https://pl29361095.profitablecpmratenetwork.com/${adKey}/invoke.js`
    
    // Append to body
    document.body.appendChild(script)

    // Cleanup
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [adKey])

  // Render the container div exactly as Adsterra provides
  return <div id={`container-${adKey}`}></div>
}
