const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const bcrypt = require('bcryptjs');

const createToken = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

exports.register = async (req, res) => {
  const { name, userId, role, email, password } = req.body;
  const user = await User.create({ name, userId, role, email, password });
  res.status(201).json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Invalid credentials' });

  const token = createToken(user);
  res.json({ token });
};

exports.logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logged out' });
};

exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  user.resetTokenExpire = Date.now() + 10 * 60 * 1000;
  await user.save();

  const resetURL = `http://localhost:3000/reset-password/${resetToken}`;
  await sendEmail(user.email, 'Password Reset', `Reset your password: ${resetURL}`);
  res.json({ message: 'Reset link sent' });
};

exports.resetPassword = async (req, res) => {
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  const user = await User.findOne({ resetToken: hashedToken, resetTokenExpire: { $gt: Date.now() } });

  if (!user) return res.status(400).json({ message: 'Token expired or invalid' });

  user.password = req.body.password;
  user.resetToken = undefined;
  user.resetTokenExpire = undefined;
  await user.save();

  res.json({ message: 'Password reset successful' });
};