import { EXPERIMENTS } from '../data/experiments.data'
import { ExperimentCard } from './ExperimentCard'
import type { Experiment } from '../types'

interface ExperimentsGridProps {
  onBack: () => void
  onSelectExperiment?: (experiment: Experiment) => void
}

export function ExperimentsGrid({ onBack, onSelectExperiment }: ExperimentsGridProps) {
  return (
    <main className="student-main">
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
      <div className="experiments-grid">
        {EXPERIMENTS.map((exp) => (
          <ExperimentCard
            key={exp.id}
            experiment={exp}
            onClick={() => onSelectExperiment?.(exp)}
          />
        ))}
      </div>
    </main>
  )
}

