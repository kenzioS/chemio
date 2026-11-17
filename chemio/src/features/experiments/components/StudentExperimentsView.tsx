import { useState } from 'react'
import { SideMenu } from '../../../components/layout/SideMenu'
import type { SideMenuItem } from '../../../components/layout/SideMenu'
import { ScrollArea } from '../../../components/layout/ScrollArea'
import { ExperimentsIcon, ResultsIcon } from '../../../components/layout/SideMenuIcons'
import { ExperimentsView } from './ExperimentsView'

type StudentSection = 'experiments' | 'results'

const SECTIONS: SideMenuItem<StudentSection>[] = [
  { id: 'experiments', label: 'Experiments', icon: <ExperimentsIcon /> },
  { id: 'results', label: 'Results', icon: <ResultsIcon /> },
]

interface StudentExperimentsViewProps {
  onBackToHome: () => void
}

export function StudentExperimentsView({ onBackToHome }: StudentExperimentsViewProps) {
  const [activeSection, setActiveSection] = useState<StudentSection>('experiments')

  return (
    <div className="dashboard-layout">
      <SideMenu
        ariaLabel="Student menu"
        items={SECTIONS}
        activeId={activeSection}
        onSelect={setActiveSection}
      />

      <ScrollArea as="main" className="student-main" ariaLabel="Student content">
        {activeSection === 'results' ? (
          <div className="student-results">
            <div className="student-header">
              <h1 className="student-heading">Results</h1>
            </div>

            <article className="student-results-card">
              <h2 className="student-results-title">No results yet</h2>
              <p className="student-results-text">
                Complete an experiment to see your results here. This area is being
                prepared, so check back soon.
              </p>
            </article>
          </div>
        ) : (
          <ExperimentsView onBack={onBackToHome} />
        )}
      </ScrollArea>
    </div>
  )
}
