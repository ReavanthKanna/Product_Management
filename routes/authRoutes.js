const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/logout', auth.logout);
router.post('/forgot-password', auth.forgotPassword);
router.post('/reset-password/:token', auth.resetPassword);

// Example protected route
router.get('/admin-data', protect(['admin', 'superadmin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports = router;