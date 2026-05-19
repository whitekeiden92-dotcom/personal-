import { useState } from 'react';

const blankProject = {
  title: '',
  description: '',
};

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState(blankProject);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddProject(formData);
    setFormData(blankProject);
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input
          required
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter project title"
        />
      </label>

      <label>
        Description
        <textarea
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          placeholder="Enter project description"
        />
      </label>

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;
