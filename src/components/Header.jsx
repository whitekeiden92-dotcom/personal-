function Header({ projectCount, searchTerm, onSearchChange }) {
  return (
    <header className="hero">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Studio Ledger home">
          Studio Ledger
        </a>
        <a className="nav-link" href="#add-project">
          Add Project
        </a>
      </nav>

      <div className="hero-layout">
        <section className="hero-copy" aria-labelledby="page-title">
          <p className="eyebrow">Creative agency portfolio</p>
          <h1 id="page-title">Selected work, ready for the next brief.</h1>
          <p>
            Browse recent brand, product, and web projects, then add fresh work
            to keep the portfolio current.
          </p>
        </section>

        <aside className="hero-panel" aria-label="Project search">
          <span className="metric">{projectCount}</span>
          <span className="metric-label">published projects</span>
          <label htmlFor="project-search">Search the portfolio</label>
          <input
            id="project-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Try fintech, web, food..."
          />
        </aside>
      </div>
    </header>
  );
}

export default Header;
