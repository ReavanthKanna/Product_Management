const express = require('express');
const {
  createStakeholder,
  getStakeholders,
  getStakeholderById,
  updateStakeholder,
  deleteStakeholder
} = require('../controllers/stakeholderController');

const router = express.Router();

router.post('/', createStakeholder);
router.get('/', getStakeholders);
router.get('/:id', getStakeholderById);
router.put('/:id', updateStakeholder);
router.delete('/:id', deleteStakeholder);

module.exports = router;