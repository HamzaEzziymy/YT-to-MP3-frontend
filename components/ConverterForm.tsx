'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import VideoPreview from './VideoPreview'
import ProgressBar from './ProgressBar'

interface VideoInfo {
  title: string
  duration: number
  thumbnail: string
  channel: string
  url: string
}

type ConversionStatus = 'idle' | 'fetching' | 'converting' | 'done' | 'error'

const FORMATS = ['mp3', 'wav', 'ogg', 'flac'] as const
type Format = (typeof FORMATS)[number]

interface ConverterFormProps {
  defaultFormat?: Format
}

export default function ConverterForm({ defaultFormat = 'mp3' }: ConverterFormProps) {
  const [url, setUrl] = useState('')
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [format, setFormat] = useState<Format>(defaultFormat)
  const [quality, setQuality] = useState<'128kbps' | '320kbps'>('128kbps')
  const [status, setStatus] = useState<ConversionStatus>('idle')
  const [progress, setProgress] = useState(0)
  const [taskId, setTaskId] = useState<string | null>(null)
  const [downloadReady, setDownloadReady] = useState(false)
  const [downloadFilename, setDownloadFilename] = useState('audio.mp3')
  const [downloadApiUrl, setDownloadApiUrl] = useState<string | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
  }, [])

  // Auto-download: trigger download immediately when ready
  useEffect(() => {
    if (!downloadReady || !downloadApiUrl) return

    // Use window.location.href for most reliable cross-browser download trigger
    // This works better than programmatic <a> clicks on mobile and desktop
    const timer = setTimeout(() => {
      window.location.href = downloadApiUrl
      toast.success('✅ Download started!')
    }, 500)

    return () => clearTimeout(timer)
  }, [downloadReady, downloadApiUrl])

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text.trim())
    } catch {
      toast.error('Could not read clipboard. Please paste manually.')
    }
  }

  const handleGetInfo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return

    setVideoInfo(null)
    setDownloadReady(false)
    setDownloadApiUrl(null)
    setTaskId(null)
    setProgress(0)
    setStatus('fetching')

    try {
      const res = await fetch('/api/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Failed to fetch video info' }))
        throw new Error(err.error || 'Failed to fetch video info')
      }

      const data: VideoInfo = await res.json()
      setVideoInfo(data)
      setStatus('idle')
      toast.success('Video found!')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch video information'
      setStatus('error')
      toast.error(message)
    }
  }

  const pollStatus = useCallback(
    (id: string, title: string, fmt: string) => {
      pollRef.current = setInterval(async () => {
        try {
          const res = await fetch(`/api/status/${id}`)
          if (!res.ok) return
          const data = await res.json()

          if (data.status === 'PROCESSING') {
            setProgress(data.progress ?? 0)
          } else if (data.status === 'SUCCESS') {
            stopPolling()
            setProgress(100)

            const safeTitle = title.replace(/[^\w\s-]/g, '').trim() || 'audio'
            const filename = `${safeTitle}.${fmt}`
            const apiUrl = `/api/download/${id}`

            setDownloadFilename(filename)
            setDownloadApiUrl(apiUrl)
            setStatus('done')
            setDownloadReady(true)   // triggers the useEffect above

          } else if (data.status === 'FAILURE') {
            stopPolling()
            setStatus('error')
            toast.error(data.error || 'Conversion failed. Please try again.')
          }
        } catch {
          // network hiccup — keep polling
        }
      }, 1000)  // Poll every 1 second for smoother progress updates
    },
    [stopPolling],
  )

  const handleConvert = async () => {
    if (!videoInfo) return

    stopPolling()
    setStatus('converting')
    setProgress(0)
    setDownloadReady(false)
    setDownloadApiUrl(null)

    try {
      const res = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: videoInfo.url, quality, format }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Conversion request failed' }))
        throw new Error(err.error || 'Conversion request failed')
      }

      const data = await res.json()
      setTaskId(data.task_id)
      toast('Converting your audio…', { icon: '⚙️' })
      pollStatus(data.task_id, videoInfo.title, format)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Conversion failed'
      setStatus('error')
      toast.error(message)
    }
  }

  const handleReset = () => {
    stopPolling()
    setUrl('')
    setVideoInfo(null)
    setStatus('idle')
    setProgress(0)
    setTaskId(null)
    setDownloadReady(false)
    setDownloadApiUrl(null)
    setDownloadFilename('audio.mp3')
  }

  // Manual re-download handler (for the fallback button)
  const handleManualDownload = () => {
    if (!downloadApiUrl) return
    const a = document.createElement('a')
    a.href = downloadApiUrl
    a.download = downloadFilename
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    toast.success('Download started!')
  }

  const isLoading = status === 'fetching'
  const isConverting = status === 'converting'
  const isDone = status === 'done'

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { borderRadius: '10px', fontWeight: 500 },
        }}
      />

      <div className="card max-w-3xl mx-auto">
        {!videoInfo ? (
          /* ── URL input form ── */
          <form onSubmit={handleGetInfo} className="space-y-4">
            <div>
              <label htmlFor="youtube-url" className="block text-sm font-semibold text-gray-700 mb-2">
                YouTube Video URL
              </label>
              <div className="flex gap-2">
                <input
                  id="youtube-url"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="input-field flex-1"
                  required
                  disabled={isLoading}
                  aria-label="YouTube video URL"
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="btn-secondary px-4 py-3 text-sm whitespace-nowrap"
                  aria-label="Paste URL from clipboard"
                  title="Paste from clipboard"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="hidden sm:inline ml-1">Paste</span>
                </button>
              </div>
            </div>

            <button type="submit" disabled={isLoading || !url.trim()} className="btn-primary w-full">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading video info…
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Get Video Info
                </>
              )}
            </button>
          </form>
        ) : (
          /* ── Converter panel ── */
          <div className="space-y-6">
            <VideoPreview videoInfo={videoInfo} />

            {/* Format selector */}
            {!isDone && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Output Format</label>
                <div className="flex flex-wrap gap-2">
                  {FORMATS.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      disabled={isConverting}
                      className={`px-4 py-2 rounded-lg border-2 text-sm font-semibold uppercase transition-all ${
                        format === f
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      } disabled:opacity-50`}
                      aria-pressed={format === f}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quality selector — MP3 only */}
            {format === 'mp3' && !isDone && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Audio Quality</label>
                <div className="grid grid-cols-2 gap-4">
                  {(['128kbps', '320kbps'] as const).map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      disabled={isConverting}
                      className={`p-4 border-2 rounded-xl text-left transition-all ${
                        quality === q ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      } disabled:opacity-50`}
                      aria-pressed={quality === q}
                    >
                      <div className="font-bold text-gray-900">{q === '128kbps' ? '128 kbps' : '320 kbps'}</div>
                      <div className="text-sm text-gray-600">{q === '128kbps' ? 'Standard Quality' : 'High Quality'}</div>
                      <div className="text-xs text-gray-400 mt-1">{q === '128kbps' ? '~1 MB/min' : '~2.5 MB/min'}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Progress bar */}
            {isConverting && <ProgressBar progress={progress} />}

            {/* Done state */}
            {isDone && (
              <div className="space-y-3">
                {/* Success banner */}
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Conversion complete!</p>
                    <p className="text-sm text-green-700">
                      Your download should start automatically. Check your downloads folder.
                    </p>
                  </div>
                </div>

                <button onClick={handleReset} className="btn-primary w-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Convert Another Video
                </button>
              </div>
            )}

            {/* Convert / New Video buttons */}
            {!isDone && (
              <div className="flex gap-3">
                <button onClick={handleConvert} disabled={isConverting} className="btn-primary flex-1">
                  {isConverting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Converting… {progress > 0 ? `${progress}%` : ''}
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Convert to {format.toUpperCase()}
                    </>
                  )}
                </button>
                <button onClick={handleReset} disabled={isConverting} className="btn-secondary" aria-label="Start over with a new video">
                  New Video
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
