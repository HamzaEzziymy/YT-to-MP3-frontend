'use client'

import { useEffect, useState } from 'react'
import AdsterraAd from '@/components/AdsterraAd'

export default function TestAdsPage() {
  const [isLocalhost, setIsLocalhost] = useState(false)
  const [scriptStatus, setScriptStatus] = useState({
    nativeBanner: false,
    socialBar: false,
  })
  const [containerStatus, setContainerStatus] = useState({
    exists: false,
    hasContent: false,
    htmlLength: 0,
  })

  useEffect(() => {
    // Check if localhost
    const localhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1'
    setIsLocalhost(localhost)
  }, [])

  const checkStatus = () => {
    // Check scripts
    const nativeBannerScript = document.querySelector('script[src*="f4534a9871703f6308d826cd5104e300"]')
    const socialBarScript = document.querySelector('script[src*="b202b57de32878a97b6fb8e7b5e2dee2"]')
    
    setScriptStatus({
      nativeBanner: !!nativeBannerScript,
      socialBar: !!socialBarScript,
    })

    // Check container
    const container = document.getElementById('container-f4534a9871703f6308d826cd5104e300')
    setContainerStatus({
      exists: !!container,
      hasContent: container ? container.innerHTML.length > 0 : false,
      htmlLength: container ? container.innerHTML.length : 0,
    })
  }

  // Auto-check after 15 seconds
  useEffect(() => {
    const timer = setTimeout(checkStatus, 15000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🧪 Adsterra Ads Test Page
        </h1>

        {/* Location Check */}
        <div className={`p-6 rounded-lg mb-8 ${
          isLocalhost 
            ? 'bg-red-50 border-2 border-red-200' 
            : 'bg-green-50 border-2 border-green-200'
        }`}>
          <h2 className="text-2xl font-bold mb-4">
            {isLocalhost ? '❌ Testing on Localhost' : '✅ Testing on Production'}
          </h2>
          <p className="text-lg mb-2">
            <strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : ''}
          </p>
          {isLocalhost ? (
            <div className="mt-4 p-4 bg-red-100 rounded">
              <p className="font-semibold text-red-900">
                ⚠️ Ads will NOT work on localhost!
              </p>
              <p className="text-red-800 mt-2">
                You must deploy to Vercel and test on your production URL.
              </p>
            </div>
          ) : (
            <div className="mt-4 p-4 bg-green-100 rounded">
              <p className="font-semibold text-green-900">
                ✅ Ads should work here (if domain is approved)
              </p>
              <p className="text-green-800 mt-2">
                Wait 30 seconds and click "Check Status" below.
              </p>
            </div>
          )}
        </div>

        {/* Native Banner Test */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Test #1: Native Banner Ad
          </h2>
          <p className="text-gray-600 mb-4">
            Ad Key: <code className="bg-gray-100 px-2 py-1 rounded">f4534a9871703f6308d826cd5104e300</code>
          </p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 min-h-[250px]">
            <p className="text-center text-gray-500 mb-4">
              Ad should appear below after 10-30 seconds...
            </p>
            <AdsterraAd adKey="f4534a9871703f6308d826cd5104e300" />
          </div>

          <button
            onClick={checkStatus}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Check Status
          </button>

          {/* Status Results */}
          {(scriptStatus.nativeBanner || containerStatus.exists) && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">Native Banner Status:</h3>
              <ul className="space-y-1 text-sm">
                <li className={scriptStatus.nativeBanner ? 'text-green-700' : 'text-red-700'}>
                  {scriptStatus.nativeBanner ? '✅' : '❌'} Script loaded: {scriptStatus.nativeBanner ? 'YES' : 'NO'}
                </li>
                <li className={containerStatus.exists ? 'text-green-700' : 'text-red-700'}>
                  {containerStatus.exists ? '✅' : '❌'} Container exists: {containerStatus.exists ? 'YES' : 'NO'}
                </li>
                <li className={containerStatus.hasContent ? 'text-green-700' : 'text-yellow-700'}>
                  {containerStatus.hasContent ? '✅' : '⏳'} Has content: {containerStatus.hasContent ? 'YES' : 'NO'}
                </li>
                <li className="text-gray-700">
                  📏 Container HTML length: {containerStatus.htmlLength} characters
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Social Bar Test */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Test #2: Social Bar / Popunder
          </h2>
          <p className="text-gray-600 mb-4">
            Ad Key: <code className="bg-gray-100 px-2 py-1 rounded">b202b57de32878a97b6fb8e7b5e2dee2</code>
          </p>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              This ad loads automatically (no container needed).
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Social Bar:</strong> Should appear at bottom of screen
            </p>
            <p className="text-gray-700 mt-1">
              <strong>Popunder:</strong> May open in background window
            </p>
          </div>

          {scriptStatus.socialBar && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">Social Bar Status:</h3>
              <ul className="space-y-1 text-sm">
                <li className="text-green-700">
                  ✅ Script loaded: YES
                </li>
                <li className="text-gray-700">
                  ℹ️ Check bottom of screen for Social Bar
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📋 Testing Checklist
          </h2>
          <ul className="space-y-3">
            <li className={`p-3 rounded ${!isLocalhost ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
              {!isLocalhost ? '✅' : '❌'} Testing on production (not localhost)
            </li>
            <li className="p-3 bg-gray-50 border-l-4 border-yellow-500">
              ⏳ Ad blocker disabled (check your browser extensions)
            </li>
            <li className="p-3 bg-gray-50 border-l-4 border-yellow-500">
              ⏳ Waited 30+ seconds on this page
            </li>
            <li className="p-3 bg-gray-50 border-l-4 border-yellow-500">
              ⏳ Domain approved in Adsterra dashboard
            </li>
            <li className="p-3 bg-gray-50 border-l-4 border-yellow-500">
              ⏳ Ad units active in Adsterra dashboard
            </li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            📖 How to Use This Test Page
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-900">
            <li>Make sure you're on production (not localhost)</li>
            <li>Disable all browser extensions (especially ad blockers)</li>
            <li>Wait 30-60 seconds on this page</li>
            <li>Click "Check Status" button</li>
            <li>Look for ads:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Native Banner should appear in the gray box above</li>
                <li>Social Bar should appear at bottom of screen</li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
