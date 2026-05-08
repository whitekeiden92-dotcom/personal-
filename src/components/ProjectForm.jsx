import { useState } from 'react';

const blankProject = {
  title: '',
  client: '',
  category: '',
  year: '',
  imageUrl: '',
  tags: '',
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

    onAddProject({
      ...formData,
      imageUrl:
        formData.imageUrl ||
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      tags: formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    });

    setFormData(blankProject);
  }

  return (
    <section className="project-form-panel" id="add-project">
      <div>
        <p className="eyebrow">New case study</p>
        <h2>Add a project</h2>
      </div>

      <form className="project-form" onSubmit={handleSubmit}>
        <label>
          Project title
          <input
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Launch campaign"
          />
        </label>

        <label>
          Client
          <input
            required
            name="client"
            value={formData.client}
            onChange={handleChange}
            placeholder="Client name"
          />
        </label>

        <div className="form-row">
          <label>
            Category
            <input
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Web Design"
            />
          </label>

          <label>
            Year
            <input
              required
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="2026"
            />
          </label>
        </div>

        <label>
          Image URL
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
        </label>

        <label>
          Tags
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="React, UX, Branding"
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
            placeholder="What problem did this project solve?"
          />
        </label>

        <button type="submit">Publish project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
