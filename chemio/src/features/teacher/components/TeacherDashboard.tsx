export function TeacherDashboard() {
  return (
    <main className="teacher-main">
      <div className="teacher-content">
        <header className="teacher-header">
          <h1 className="teacher-title">How to use Chem.io</h1>
          <p className="teacher-description">
            Chem.io is an interactive virtual chemistry platform built for educators. It enables you to demonstrate virtual chemical reactions in the classroom, assign safe lab simulations to students, and monitor their learning outcomes.
          </p>
        </header>

        <section className="teacher-guide-grid">
          <article className="teacher-guide-card">
            <h2 className="teacher-card-title">Direct Students to Experiments</h2>
            <p className="teacher-card-text">
              Have your students open <strong>chem.io</strong> and click the <strong>I am student</strong> button. They will access 16 curated virtual lab experiments covering titrations, flame tests, gas laws, and polymer synthesis.
            </p>
          </article>

          <article className="teacher-guide-card">
            <h2 className="teacher-card-title">Configure Classroom Settings</h2>
            <p className="teacher-card-text">
              Click the <strong>MENU</strong> button in the top-right header and select <strong>Setting</strong> to customize active lab modules, adjust reactant concentrations, or toggle guided hints for your syllabus.
            </p>
          </article>

          <article className="teacher-guide-card">
            <h2 className="teacher-card-title">Review Student Results</h2>
            <p className="teacher-card-text">
              Open the <strong>Results</strong> tab from the <strong>MENU</strong> to inspect student completion rates, view quiz responses, and track how accurately students executed each experiment step.
            </p>
          </article>

          <article className="teacher-guide-card">
            <h2 className="teacher-card-title">Present Live Demonstrations</h2>
            <p className="teacher-card-text">
              Use your projector or smartboard to walk students through hazardous or costly chemical reactions before entering the physical laboratory, helping reinforce lab safety and expected reaction behaviors.
            </p>
          </article>
        </section>

        <section className="teacher-quickstart-card">
          <h2 className="teacher-quickstart-title">Quick Start Checklist</h2>
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
        </section>
      </div>
    </main>
  )
}
