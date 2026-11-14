import type { Experiment } from '../types'
import { VideoPlaceholder } from './VideoPlaceholder'

interface ExperimentDetailProps {
  experiment: Experiment
  onBackToGrid: () => void
}

export function ExperimentDetail({ experiment, onBackToGrid }: ExperimentDetailProps) {
  return (
    <div className="experiment-detail-page">
      <div className="experiment-detail-nav">
        <button
          type="button"
          className="btn btn-outline student-back-btn"
          onClick={onBackToGrid}
        >
          ← All Experiments
        </button>
      </div>

      <article className="experiment-content-card">
        {/* Heading - Name of the experiment */}
        <header className="experiment-detail-header">
          <h1 className="experiment-detail-title">{experiment.title}</h1>
          <p className="experiment-detail-subtitle">{experiment.description}</p>
        </header>

        {/* Video Placeholder */}
        <section className="experiment-video-section" aria-label="Experiment video">
          <VideoPlaceholder />
        </section>

        {/* Quick Overview - Lorem Ipsum */}
        <section className="experiment-overview-section" aria-label="Quick Overview">
          <h2 className="experiment-section-heading">Quick Overview</h2>
          <div className="experiment-overview-text">
            <p>{experiment.overview}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        {/* Action Buttons: Instruction and Quiz (no modals/functionality attached) */}
        <footer className="experiment-actions-footer">
          <button
            type="button"
            className="btn btn-primary experiment-action-btn"
          >
            Instruction
          </button>
          <button
            type="button"
            className="btn btn-outline experiment-action-btn"
          >
            Quiz
          </button>
        </footer>
      </article>
    </div>
  )
}
