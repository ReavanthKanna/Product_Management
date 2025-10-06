import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  project: { type: String, required: true },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Under Review', 'Done', 'Rejected'],
    default: 'To Do'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  dueDate: { type: Date },
  assignees: [{ type: String }]
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);