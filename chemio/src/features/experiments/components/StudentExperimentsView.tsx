import { useMemo, useState } from 'react'
import { EXPERIMENTS } from '../data/experiments.data'
import { ExperimentsGrid } from './ExperimentsGrid'
import { ExperimentDetail } from './ExperimentDetail'
import { ExperimentToolbar } from './ExperimentToolbar'

const PAGE_SIZE = 12

interface StudentExperimentsViewProps {
  onBackToHome: () => void
}

export function StudentExperimentsView({ onBackToHome }: StudentExperimentsViewProps) {
  const [selectedExperimentId, setSelectedExperimentId] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

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

  const pageCount = Math.max(1, Math.ceil(filteredExperiments.length / PAGE_SIZE))
  const activePage = Math.min(currentPage, pageCount)
  const visibleExperiments = filteredExperiments.slice(
    (activePage - 1) * PAGE_SIZE,
    activePage * PAGE_SIZE
  )

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleResetSearch = () => {
    setSearchQuery('')
    setCurrentPage(1)
  }

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
          <ExperimentsGrid
            experiments={visibleExperiments}
            currentPage={activePage}
            pageCount={pageCount}
            toolbar={
              <ExperimentToolbar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onResetSearch={handleResetSearch}
              />
            }
            onPageChange={setCurrentPage}
            onBack={onBackToHome}
            onSelectExperiment={(exp) => setSelectedExperimentId(exp.id)}
          />
        </>
      )}
    </main>
  )
}
