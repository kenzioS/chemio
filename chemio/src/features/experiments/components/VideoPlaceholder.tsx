export function VideoPlaceholder() {
  return (
    <div className="card-video-placeholder" aria-label="Video placeholder">
      <svg
        className="video-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
      <span className="video-placeholder-text">Video Placeholder</span>
    </div>
  )
}

