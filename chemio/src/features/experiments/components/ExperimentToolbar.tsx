interface ExperimentToolbarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onResetSearch: () => void
}

export function ExperimentToolbar({
  searchQuery,
  onSearchChange,
  onResetSearch,
}: ExperimentToolbarProps) {
  return (
    <div className="experiment-toolbar" role="toolbar" aria-label="Experiments toolbar">
      <div className="experiments-search-box">
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="search"
          className="experiments-search-input"
          placeholder="Search experiments..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search experiments"
        />
        {searchQuery && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={onResetSearch}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

