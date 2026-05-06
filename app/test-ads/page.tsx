'use client'

import { useEffect } from 'react'

export default function TestAdsPage() {
  useEffect(() => {
    console.log('🧪 Test Ads Page Loaded')
    
    // Method 1: Using the exact Adsterra code
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = 'https://pl29361095.profitablecpmratenetwork.com/f4534a9871703f6308d826cd5104e300/invoke.js'
    
    script.onload = () => {
      console.log('✅ Adsterra script loaded successfully')
    }
    
    script.onerror = (error) => {
      console.error('❌ Adsterra script failed to load:', error)
    }
    
    document.body.appendChild(script)

    // Check container after 10 seconds
    setTimeout(() => {
      const container = document.getElementById('container-f4534a9871703f6308d826cd5104e300')
      console.log('📦 Container element:', container)
      console.log('📦 Container HTML:', container?.innerHTML)
      console.log('📦 Container has children:', container?.children.length)
    }, 10000)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        🧪 Adsterra Ad Test Page
      </h1>

      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f0f9ff', 
        border: '2px solid #3b82f6',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
          Instructions:
        </h2>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Open browser console (F12)</li>
          <li>Look for log messages starting with ✅ or ❌</li>
          <li>Wait 10-15 seconds for ad to load</li>
          <li>Check if ad appears in the box below</li>
          <li>If no ad, check console for errors</li>
        </ol>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#fef3c7',
        border: '2px solid #f59e0b',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          ⚠️ Important Notes:
        </h3>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Localhost:</strong> Ads may not work on localhost</li>
          <li><strong>Ad Blocker:</strong> Disable any ad blockers</li>
          <li><strong>Domain Approval:</strong> Adsterra must approve your domain</li>
          <li><strong>Loading Time:</strong> Ads can take 10-30 seconds to load</li>
        </ul>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
        Ad Container:
      </h2>

      <div 
        id="container-f4534a9871703f6308d826cd5104e300"
        style={{
          minHeight: '250px',
          border: '3px dashed #9ca3af',
          borderRadius: '12px',
          padding: '30px',
          backgroundColor: '#f9fafb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px'
        }}
      >
        <div style={{ textAlign: 'center', color: '#6b7280' }}>
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>⏳</div>
          <div style={{ fontSize: '18px', fontWeight: '600' }}>Waiting for ad...</div>
          <div style={{ fontSize: '14px', marginTop: '10px' }}>
            If nothing appears after 30 seconds, check console (F12)
          </div>
        </div>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#f3f4f6',
        border: '1px solid #d1d5db',
        borderRadius: '8px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          🔍 Debug Checklist:
        </h3>
        <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.8' }}>
          <div>1. Open Console (F12)</div>
          <div>2. Run: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
            document.getElementById('container-f4534a9871703f6308d826cd5104e300')
          </code></div>
          <div>3. Should return: &lt;div id="container-..."&gt;...&lt;/div&gt;</div>
          <div>4. Run: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
            document.querySelector('script[src*="f4534a9871703f6308d826cd5104e300"]')
          </code></div>
          <div>5. Should return: &lt;script async src="..."&gt;&lt;/script&gt;</div>
        </div>
      </div>
    </div>
  )
}
