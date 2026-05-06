'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VideoInfo {
  title: string
  duration: number
  thumbnail: string
  channel: string
  url: string
}

interface VideoPreviewProps {
  videoInfo: VideoInfo
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }
  return `${m}:${s.toString().padStart(2, '0')}`
}

function getVideoId(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : ''
}

export default function VideoPreview({ videoInfo }: VideoPreviewProps) {
  const [imgError, setImgError] = useState(false)
  const videoId = getVideoId(videoInfo.url)

  const thumbnailSrc = imgError
    ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    : videoInfo.thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
      {/* 16:9 thumbnail */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {thumbnailSrc ? (
          <Image
            src={thumbnailSrc}
            alt={`Thumbnail for "${videoInfo.title}"`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
            onError={() => setImgError(true)}
            unoptimized={thumbnailSrc.includes('img.youtube.com')}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9l-4 2.5V7.5L12 10l4 2.5L12 15z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-base text-gray-900 mb-2 line-clamp-2 leading-snug">
          {videoInfo.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1.5 min-w-0">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate">{videoInfo.channel}</span>
          </span>
          <span className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {formatDuration(videoInfo.duration)}
          </span>
        </div>
      </div>
    </div>
  )
}
