interface HomePathSelectorProps {
  onChooseStudent: () => void
  onChooseTeacher: () => void
}

export function HomePathSelector({
  onChooseStudent,
  onChooseTeacher,
}: HomePathSelectorProps) {
  return (
    <main className="main">
      <h1 className="question">What is your path?</h1>
      <div className="path-actions">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={onChooseStudent}
        >
          I am student
        </button>
        <button
          type="button"
          className="btn btn-outline btn-lg"
          onClick={onChooseTeacher}
        >
          I am teacher
        </button>
      </div>
    </main>
  )
}

