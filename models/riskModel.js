import mongoose from 'mongoose';

const riskSchema = new mongoose.Schema({
  riskId: { type: String, required: true, unique: true },
  project: { type: String, required: true },
  description: { type: String, required: true },
  probability: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  impact: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  riskLevel: { type: String, enum: ['Low', 'Moderate', 'Critical'], required: true },
  mitigationStrategy: { type: String },
  status: { type: String, enum: ['Open', 'Closed'], default: 'Open' }
}, { timestamps: true });

export default mongoose.model('Risk', riskSchema);