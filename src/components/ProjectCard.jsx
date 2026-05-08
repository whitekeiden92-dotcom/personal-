function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="client">{project.client}</p>
        <p>{project.description}</p>
        <ul aria-label={`${project.title} project keywords`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
