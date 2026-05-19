import { useState } from 'react';
import ProjectForm from './components/ProjectForm.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import { initialProjects } from './data/projects.js';

function createProjectId() {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;

    return [project.title, project.description]
      .join(' ')
      .toLowerCase()
      .includes(query);
  });

  function handleAddProject(project) {
    setProjects((currentProjects) => [
      { ...project, id: createProjectId() },
      ...currentProjects,
    ]);
  }

  return (
    <main>
      <header className="app-header">
        <h1>PROJECT TASK</h1>
      </header>

      <div className="page-layout">
        <section className="panel add-panel">
          <h2>Add Project</h2>
          <ProjectForm onAddProject={handleAddProject} />
        </section>

        <section className="panel list-panel">
          <input
            className="search-input"
            type="search"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <ProjectGrid projects={filteredProjects} />
        </section>
      </div>
    </main>
  );
}

export default App;
