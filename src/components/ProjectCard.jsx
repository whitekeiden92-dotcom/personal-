function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-thumb">X</div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
