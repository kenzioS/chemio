import { useState } from 'react'
import { SideMenu } from '../../../components/layout/SideMenu'
import type { SideMenuItem } from '../../../components/layout/SideMenu'
import { ScrollArea } from '../../../components/layout/ScrollArea'
import {
  ExperimentsIcon,
  GuideIcon,
  QuizzesIcon,
  ResultsIcon,
  StudentsIcon,
} from '../../../components/layout/SideMenuIcons'
import { ExperimentsView } from '../../experiments/components/ExperimentsView'

type TeacherSection = 'experiments' | 'quizzes' | 'students' | 'results' | 'guide'

const SECTIONS: SideMenuItem<TeacherSection>[] = [
  { id: 'experiments', label: 'Experiments', icon: <ExperimentsIcon /> },
  { id: 'quizzes', label: 'Quizzes', icon: <QuizzesIcon /> },
  { id: 'students', label: 'Students', icon: <StudentsIcon /> },
  { id: 'results', label: 'Results', icon: <ResultsIcon /> },
  { id: 'guide', label: 'Guide', icon: <GuideIcon /> },
]

const TAB_GUIDES: {
  id: Exclude<TeacherSection, 'guide'>
  title: string
  description: string
}[] = [
  {
    id: 'experiments',
    title: 'Experiments',
    description:
      'Browse the library of virtual lab simulations, preview each experiment, and share them with your class so students can practise reactions safely.',
  },
  {
    id: 'quizzes',
    title: 'Quizzes',
    description:
      'Create and manage quizzes that check student understanding of each experiment, then assign them to keep learning on track.',
  },
  {
    id: 'students',
    title: 'Students',
    description:
      'View your class rosters, track individual progress, and manage student access to the experiments and quizzes you assign.',
  },
  {
    id: 'results',
    title: 'Results',
    description:
      'Review submitted work, compare scores, and follow completion rates across your classes to see where students need extra support.',
  },
]

const PLACEHOLDERS: Record<
  Exclude<TeacherSection, 'guide' | 'experiments'>,
  { title: string; description: string }
> = {
  quizzes: {
    title: 'Quizzes',
    description:
      'Create and manage quizzes that check student understanding of each experiment.',
  },
  students: {
    title: 'Students',
    description:
      'View your class rosters, track individual progress, and manage student access.',
  },
  results: {
    title: 'Results',
    description:
      'Review submitted work, compare scores, and follow completion rates across your classes.',
  },
}

export function TeacherDashboard() {
  const [activeSection, setActiveSection] = useState<TeacherSection>('guide')

  const placeholder =
    activeSection === 'quizzes' ||
    activeSection === 'students' ||
    activeSection === 'results'
      ? PLACEHOLDERS[activeSection]
      : null

  return (
    <div className="dashboard-layout">
      <SideMenu
        ariaLabel="Teacher menu"
        items={SECTIONS}
        activeId={activeSection}
        onSelect={setActiveSection}
      />

      <ScrollArea as="main" className="teacher-main" ariaLabel="Teacher content">
        {activeSection === 'experiments' ? (
          <div className="teacher-experiments">
            <ExperimentsView />
          </div>
        ) : (
          <div className="teacher-content">
          {placeholder ? (
            <>
              <header className="teacher-header">
                <h1 className="teacher-title">{placeholder.title}</h1>
                <p className="teacher-description">{placeholder.description}</p>
              </header>

              <article className="teacher-guide-card teacher-placeholder-card">
                <h2 className="teacher-card-title">Coming soon</h2>
                <p className="teacher-card-text">
                  This area is being prepared. Use the menu on the left to switch between sections.
                </p>
              </article>
            </>
          ) : (
            <>
              <header className="teacher-header">
                <h1 className="teacher-title">How to use Chem.io</h1>
                <p className="teacher-description">
                  Chem.io is an interactive virtual chemistry platform built for educators. It enables you to demonstrate virtual chemical reactions in the classroom, assign safe lab simulations to students, and monitor their learning outcomes.
                </p>
                <p className="teacher-description">
                  Each section of the left menu has a specific purpose. Read what you
                  can do in each one below, then use the button to jump straight to it.
                </p>
              </header>

              <section className="teacher-timeline" aria-label="Tab guide">
                {TAB_GUIDES.map((tab, index) => (
                  <div key={tab.id} className="teacher-timeline-step">
                    <div className="teacher-timeline-marker" aria-hidden="true">
                      <div className="teacher-timeline-circle">{index + 1}</div>
                    </div>

                    <article className="teacher-guide-card">
                      <h2 className="teacher-card-title">{tab.title}</h2>
                      <p className="teacher-card-text">{tab.description}</p>
                      <button
                        type="button"
                        className="btn btn-primary teacher-tab-button"
                        onClick={() => setActiveSection(tab.id)}
                      >
                        Go to {tab.title}
                      </button>
                    </article>
                  </div>
                ))}
              </section>
            </>
          )}
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
