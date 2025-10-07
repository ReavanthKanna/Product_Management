import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: String,
  projectManager: String,
  client: String,
  startDate: Date,
  status: {type:String,
   enum: ['All status' , 'Not started' , 'Active' , 'Completed' , 'On Hold' ],
  default: 'Active'},
  endDate: Date,
  objectives: String,
  scopeStatement: String
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);