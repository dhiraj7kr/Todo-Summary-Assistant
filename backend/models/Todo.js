const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  // 📝 Basic Info
  title: { type: String, required: true },
  description: String,
  link: String,

  // 📅 Time & Scheduling
  dueDate: Date,
  startDate: Date,
  estimatedTime: String,
  reminder: Date,

  // 🏷️ Organization
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed', 'Blocked'], default: 'Not Started' },
  tags: [String],
  category: String,
  project: String,

  // 👤 Ownership
  assignedTo: String,
  createdBy: String,
  dependencies: [String], // list of other task IDs or names
  subtasks: [String],

  // 📎 Extras
  attachments: [String], // store file URLs or base64 if inline
  comments: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);
