const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: String,
  userId: { type: String, unique: true },
  role: { type: String, enum: ['admin', 'superadmin', 'manager', 'employee','client'], default: 'client' },
  email: { type: String, unique: true },
  password: String,
  resetToken: String,
  resetTokenExpire: Date
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model('User', userSchema);