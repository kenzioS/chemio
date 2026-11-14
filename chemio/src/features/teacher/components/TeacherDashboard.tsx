import { useState } from 'react'

type TeacherSection = 'experiments' | 'quizzes' | 'students' | 'results' | 'guide'

const SECTIONS: { id: TeacherSection; label: string }[] = [
  { id: 'experiments', label: 'Experiments' },
  { id: 'quizzes', label: 'Quizzes' },
  { id: 'students', label: 'Students' },
  { id: 'results', label: 'Results' },
  { id: 'guide', label: 'Guide' },
]

const PLACEHOLDERS: Record<Exclude<TeacherSection, 'guide'>, { title: string; description: string }> = {
  experiments: {
    title: 'Experiments',
    description:
      'Browse the virtual lab catalog, preview reaction steps, and assign experiments to your classes.',
  },
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

function SectionIcon({ section }: { section: TeacherSection }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (section) {
    case 'experiments':
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v6l-5.5 9.2A1.6 1.6 0 0 0 5.9 21h12.2a1.6 1.6 0 0 0 1.4-2.8L14 9V3" />
          <path d="M7.5 15h9" />
        </svg>
      )
    case 'quizzes':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="17" rx="2" />
          <path d="M9 3v3M15 3v3" />
          <path d="m8.5 13 2 2 4-4" />
        </svg>
      )
    case 'students':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3.5 20c0-3.2 2.5-5.2 5.5-5.2s5.5 2 5.5 5.2" />
          <path d="M16 5.4a3 3 0 0 1 0 5.2" />
          <path d="M17.5 15.2c1.8.6 3 2.2 3 4.3" />
        </svg>
      )
    case 'results':
      return (
        <svg {...common}>
          <path d="M4 20h16" />
          <rect x="5.5" y="12" width="3.5" height="6" rx="1" />
          <rect x="10.25" y="8" width="3.5" height="10" rx="1" />
          <rect x="15" y="4" width="3.5" height="14" rx="1" />
        </svg>
      )
    case 'guide':
      return (
        <svg {...common}>
          <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5z" />
          <path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H19" />
          <path d="M9 7h6" />
        </svg>
      )
  }
}

export function TeacherDashboard() {
  const [activeSection, setActiveSection] = useState<TeacherSection>('guide')
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const steps = [
    {
      number: 1,
      title: 'Direct Students to Experiments',
      content: (
        <p className="teacher-card-text">
          Have your students open <strong>chem.io</strong> and click the <strong>I am student</strong> button. They will access 16 curated virtual lab experiments covering titrations, flame tests, gas laws, and polymer synthesis.
        </p>
      ),
    },
    {
      number: 2,
      title: 'Review Your Profile',
      content: (
        <p className="teacher-card-text">
          Click the <strong>profile icon</strong> in the top-right header to open your account menu and review your profile.
        </p>
      ),
    },
    {
      number: 3,
      title: 'Review Student Results',
      content: (
        <p className="teacher-card-text">
          Open the <strong>Results</strong> tab from the <strong>left menu</strong> to inspect student completion rates, view quiz responses, and track how accurately students executed each experiment step.
        </p>
      ),
    },
    {
      number: 4,
      title: 'Present Live Demonstrations',
      content: (
        <p className="teacher-card-text">
          Use your projector or smartboard to walk students through hazardous or costly chemical reactions before entering the physical laboratory, helping reinforce lab safety and expected reaction behaviors.
        </p>
      ),
    },
    {
      number: 5,
      title: 'Quick Start Checklist',
      content: (
        <ol className="teacher-quickstart-list">
          <li>
            <strong>Assign:</strong> Share the site link with your students and tell them to choose <em>"I am student"</em>.
          </li>
          <li>
            <strong>Practice:</strong> Have students run through the experiment simulation and record their observations.
          </li>
          <li>
            <strong>Assess:</strong> Check your teacher <em>Results</em> menu to review submitted work and scores.
          </li>
        </ol>
      ),
    },
  ]

  const placeholder = activeSection === 'guide' ? null : PLACEHOLDERS[activeSection]

  return (
    <div className={`teacher-layout ${isMenuOpen ? '' : 'teacher-layout-collapsed'}`}>
      <aside className="teacher-sidebar" aria-label="Teacher menu">
        <nav className="teacher-sidebar-nav" id="teacher-sidebar-nav">
          <ul className="teacher-sidebar-list">
            {SECTIONS.map((section) => {
              const isActive = section.id === activeSection
              return (
                <li key={section.id}>
                  <button
                    type="button"
                    className={`teacher-sidebar-item ${isActive ? 'teacher-sidebar-item-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    title={section.label}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="teacher-sidebar-icon">
                      <SectionIcon section={section.id} />
                    </span>
                    <span className="teacher-sidebar-label">{section.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="teacher-sidebar-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="teacher-sidebar-nav"
          aria-label={isMenuOpen ? 'Hide menu' : 'Show menu'}
          title={isMenuOpen ? 'Hide menu' : 'Show menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`teacher-sidebar-toggle-arrow ${isMenuOpen ? '' : 'is-collapsed'}`} aria-hidden="true">
            {'<'}
          </span>
          <span className="teacher-sidebar-toggle-label">
            {isMenuOpen ? 'Hide menu' : 'Show menu'}
          </span>
        </button>
      </aside>

      <main className="teacher-main">
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
              </header>

              <section className="teacher-timeline" aria-label="Teacher Guide Timeline">
                {steps.map((step) => (
                  <div key={step.number} className="teacher-timeline-step">
                    <div className="teacher-timeline-marker" aria-hidden="true">
                      <div className="teacher-timeline-circle">{step.number}</div>
                    </div>

                    <article className="teacher-guide-card">
                      <h2 className="teacher-card-title">{step.title}</h2>
                      {step.content}
                    </article>
                  </div>
                ))}
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
