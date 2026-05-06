interface ProgressBarProps {
  progress: number
  label?: string
}

export default function ProgressBar({ progress, label = 'Converting…' }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress))

  return (
    <div className="w-full" role="status" aria-live="polite">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-primary-600">{clamped}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Conversion progress: ${clamped}%`}
        />
      </div>
      {clamped > 0 && clamped < 100 && (
        <p className="text-xs text-gray-500 mt-1">
          {clamped < 30
            ? 'Downloading audio…'
            : clamped < 80
            ? 'Processing audio…'
            : 'Finalizing…'}
        </p>
      )}
    </div>
  )
}
