import { ExperimentCard } from './ExperimentCard'
import type { Experiment } from '../types'

interface ExperimentsGridProps {
  experiments: Experiment[]
  onBack: () => void
  onSelectExperiment?: (experiment: Experiment) => void
}

export function ExperimentsGrid({
  experiments,
  onBack,
  onSelectExperiment,
}: ExperimentsGridProps) {
  return (
    <div className="student-grid-wrapper">
      <div className="student-header">
        <h1 className="student-heading">Chemichal Experiments</h1>
        <button
          type="button"
          className="btn btn-outline student-back-btn"
          onClick={onBack}
        >
          ← Back
        </button>
      </div>

      {experiments.length > 0 ? (
        <div className="experiments-grid">
          {experiments.map((exp) => (
            <ExperimentCard
              key={exp.id}
              experiment={exp}
              onClick={() => onSelectExperiment?.(exp)}
            />
          ))}
        </div>
      ) : (
        <div className="no-experiments-message">
          <p>No chemical experiments found matching your search.</p>
        </div>
      )}
    </div>
  )
}
