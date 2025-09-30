import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: String,
  projectManager: String,
  client: String,
  startDate: Date,
  endDate: Date,
  objectives: String,
  scopeStatement: String
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);