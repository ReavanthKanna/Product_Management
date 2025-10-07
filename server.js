require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const stakeholderRoutes = require('./routes/stakeholderRoutes');
const taskRoutes = require('./routes/taskRoutes');
const riskRoutes = require('./routes/riskRoutes');
const changeRoutes = require('./routes/changeRoutes');
const supportRoutes = require('./routes/supportRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/stakeholders', stakeholderRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/risks', riskRoutes);
app.use('/api/changes', changeRoutes);
app.use('/api/support', supportRoutes);



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully!");
  app.listen(3000, () => console.log("🚀 Server running on port 3000"));
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

