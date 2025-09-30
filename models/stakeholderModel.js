import mongoose from 'mongoose';

const stakeholderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  project: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'superadmin', 'manager', 'client', 'employee'],
    default: 'employee'
  },
  email: { type: String, required: true, unique: true },
  responsibility: { type: String }
}, { timestamps: true });

export default mongoose.model('Stakeholder', stakeholderSchema);