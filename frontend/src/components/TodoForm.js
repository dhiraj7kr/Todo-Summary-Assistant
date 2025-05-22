import { useState, useEffect } from 'react';
import './TodoForm.css'; // ⬅️ Import the CSS file

export default function TodoForm({ onSubmit, initialData = {}, isEditing }) {
  initialData = initialData || {};

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    dueDate: '',
    startDate: '',
    estimatedTime: '',
    reminder: '',
    priority: 'Medium',
    status: 'Not Started',
    tags: '',
    category: '',
    project: '',
    assignedTo: '',
    createdBy: '',
    dependencies: '',
    subtasks: '',
    comments: '',
    ...initialData
  });

  useEffect(() => {
    if (initialData && initialData.title) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()),
      subtasks: formData.subtasks.split(',').map(s => s.trim()),
      dependencies: formData.dependencies.split(',').map(d => d.trim())
    };

    onSubmit(todo);

    if (!isEditing) {
      setFormData({
        title: '',
        description: '',
        link: '',
        dueDate: '',
        startDate: '',
        estimatedTime: '',
        reminder: '',
        priority: 'Medium',
        status: 'Not Started',
        tags: '',
        category: '',
        project: '',
        assignedTo: '',
        createdBy: '',
        dependencies: '',
        subtasks: '',
        comments: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2>{isEditing ? 'Edit' : 'Create'} Todo</h2>

      <input className="form-input" name="title" required placeholder="Title" value={formData.title} onChange={handleChange} />
      <textarea className="form-input" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input className="form-input" name="link" placeholder="Link" value={formData.link} onChange={handleChange} />

      <div className="form-row">
        <label>Due Date:</label>
        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
        <label>Start Date:</label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
      </div>

      <input className="form-input" name="estimatedTime" placeholder="Estimated Time" value={formData.estimatedTime} onChange={handleChange} />
      <label>Reminder:</label>
      <input className="form-input" type="datetime-local" name="reminder" value={formData.reminder} onChange={handleChange} />

      <div className="form-row">
        <label>Priority:</label>
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Blocked</option>
        </select>
      </div>

      <input className="form-input" name="tags" placeholder="Tags (comma-separated)" value={formData.tags} onChange={handleChange} />
      <input className="form-input" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input className="form-input" name="project" placeholder="Project" value={formData.project} onChange={handleChange} />
      <input className="form-input" name="assignedTo" placeholder="Assigned To" value={formData.assignedTo} onChange={handleChange} />
      <input className="form-input" name="createdBy" placeholder="Created By" value={formData.createdBy} onChange={handleChange} />
      <input className="form-input" name="dependencies" placeholder="Dependencies (comma-separated)" value={formData.dependencies} onChange={handleChange} />
      <input className="form-input" name="subtasks" placeholder="Subtasks (comma-separated)" value={formData.subtasks} onChange={handleChange} />
      <textarea className="form-input" name="comments" placeholder="Comments" value={formData.comments} onChange={handleChange} />

      <button className="submit-button" type="submit">{isEditing ? 'Update' : 'Add'} Todo</button>
    </form>
  );
}
