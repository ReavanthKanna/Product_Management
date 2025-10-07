import mongoose from 'mongoose';

const supportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  category: { type: String, required: true },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  message: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('SupportRequest', supportSchema);