import ProjectCard from './ProjectCard.jsx';

function ProjectGrid({ projects, searchTerm }) {
  return (
    <section className="project-list" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Portfolio</p>
        <h2 id="projects-title">Project archive</h2>
      </div>

      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          No projects match "{searchTerm}". Try a different keyword.
        </p>
      )}
    </section>
  );
}

export default ProjectGrid;
