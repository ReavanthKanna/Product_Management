import mongoose from 'mongoose';

const changeSchema = new mongoose.Schema({
  project: { type: String, required: true },
  changeField: { type: String, required: true },
  changeDetails: { type: String, required: true },
  requestedBy: { type: String, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
}, { timestamps: true });

export default mongoose.model('ChangeRequest', changeSchema);