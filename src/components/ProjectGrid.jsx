import ProjectCard from './ProjectCard.jsx';

function ProjectGrid({ projects }) {
  return (
    <section className="project-list">
      {projects.length > 0 ? (
        <div className="project-list-items">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No projects found. Try another search term.</p>
      )}
    </section>
  );
}

export default ProjectGrid;
