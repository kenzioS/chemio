import type { ReactNode } from 'react'
import { ExperimentCard } from './ExperimentCard'
import type { Experiment } from '../types'

interface ExperimentsGridProps {
  experiments: Experiment[]
  currentPage: number
  pageCount: number
  toolbar?: ReactNode
  onPageChange: (page: number) => void
  onBack?: () => void
  onSelectExperiment?: (experiment: Experiment) => void
}

export function ExperimentsGrid({
  experiments,
  currentPage,
  pageCount,
  toolbar,
  onPageChange,
  onBack,
  onSelectExperiment,
}: ExperimentsGridProps) {
  return (
    <div className="student-grid-wrapper">
      <div className="student-header">
        <h1 className="student-heading">Chemichal Experiments</h1>
        {onBack && (
          <button
            type="button"
            className="btn btn-outline student-back-btn"
            onClick={onBack}
          >
            ← Back
          </button>
        )}
      </div>

      {toolbar}

      {experiments.length > 0 ? (
        <>
          <div className="experiments-grid">
            {experiments.map((exp) => (
              <ExperimentCard
                key={exp.id}
                experiment={exp}
                onClick={() => onSelectExperiment?.(exp)}
              />
            ))}
          </div>

          {pageCount > 1 && (
            <nav className="experiments-pagination" aria-label="Experiment pages">
              <button
                type="button"
                className="pagination-btn"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                ← Previous
              </button>
              <span className="pagination-status" aria-live="polite">
                Page {currentPage} of {pageCount}
              </span>
              <button
                type="button"
                className="pagination-btn"
                disabled={currentPage >= pageCount}
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next →
              </button>
            </nav>
          )}
        </>
      ) : (
        <div className="no-experiments-message">
          <p>No chemical experiments found matching your search.</p>
        </div>
      )}
    </div>
  )
}
