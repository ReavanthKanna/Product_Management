const express = require('express');
const {
  createRisk,
  getRisks,
  getRiskById,
  updateRisk,
  deleteRisk
} = require('../controllers/riskController');

const router = express.Router();

router.post('/', createRisk);
router.get('/', getRisks);
router.get('/:id', getRiskById);
router.put('/:id', updateRisk);
router.delete('/:id', deleteRisk);

module.exports = router;

