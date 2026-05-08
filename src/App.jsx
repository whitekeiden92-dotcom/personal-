import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import ProjectForm from './components/ProjectForm.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import { initialProjects } from './data/projects.js';

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) => {
      // Build one searchable string so users can filter by any visible project detail.
      const searchableText = [
        project.title,
        project.category,
        project.description,
        project.client,
        project.year,
        ...project.tags,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [projects, searchTerm]);

  function handleAddProject(project) {
    setProjects((currentProjects) => [
      {
        ...project,
        id: crypto.randomUUID(),
      },
      ...currentProjects,
    ]);
  }

  return (
    <main id="top">
      <Header
        projectCount={projects.length}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <section className="workspace" aria-label="Portfolio workspace">
        <ProjectForm onAddProject={handleAddProject} />
        <ProjectGrid projects={filteredProjects} searchTerm={searchTerm} />
      </section>

      <footer className="site-footer">
        <p>
          Studio Ledger is a responsive creative portfolio platform for brand,
          digital, and product teams. Add new work, keep the archive current,
          and make every case study feel polished.
        </p>
      </footer>
    </main>
  );
}

export default App;
