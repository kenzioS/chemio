import type { Experiment } from '../types'

interface ExperimentCardProps {
  experiment: Experiment
  onClick?: () => void
}

export function ExperimentCard({ experiment, onClick }: ExperimentCardProps) {
  return (
    <article
      className="experiment-card"
      tabIndex={0}
      role="button"
      aria-label={experiment.title}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.()
        }
      }}
    >
      <div
        className="card-photo-placeholder"
        aria-label={`Photo placeholder for ${experiment.title}`}
      >
        <svg
          className="photo-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="photo-placeholder-text">Photo Placeholder</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{experiment.title}</h3>
        <p className="card-description">{experiment.description}</p>
      </div>
    </article>
  )
}

