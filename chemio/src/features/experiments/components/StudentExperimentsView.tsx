import { useMemo, useState } from 'react'
import { EXPERIMENTS } from '../data/experiments.data'
import { ExperimentsGrid } from './ExperimentsGrid'
import { ExperimentDetail } from './ExperimentDetail'
import { ExperimentToolbar } from './ExperimentToolbar'

interface StudentExperimentsViewProps {
  onBackToHome: () => void
}

export function StudentExperimentsView({ onBackToHome }: StudentExperimentsViewProps) {
  const [selectedExperimentId, setSelectedExperimentId] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const selectedExperiment = EXPERIMENTS.find((e) => e.id === selectedExperimentId) ?? null

  const filteredExperiments = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return EXPERIMENTS
    return EXPERIMENTS.filter(
      (exp) =>
        exp.title.toLowerCase().includes(query) ||
        exp.description.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <main className="student-main">
      {selectedExperiment ? (
        /* When inside an experiment, hide the All Experiments button and search bar */
        <ExperimentDetail
          experiment={selectedExperiment}
          onBackToGrid={() => setSelectedExperimentId(null)}
        />
      ) : (
        /* In the grid view: show toolbar with All Experiments button & Search Bar */
        <>
          <ExperimentToolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onResetSearch={() => setSearchQuery('')}
          />
          <ExperimentsGrid
            experiments={filteredExperiments}
            onBack={onBackToHome}
            onSelectExperiment={(exp) => setSelectedExperimentId(exp.id)}
          />
        </>
      )}
    </main>
  )
}
