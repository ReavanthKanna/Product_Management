const express = require('express');
const {
  createChange,
  getChanges,
  getChangeById,
  updateChange,
  deleteChange
} = require('../controllers/changeController');

const router = express.Router();

router.post('/', createChange);
router.get('/', getChanges);
router.get('/:id', getChangeById);
router.put('/:id', updateChange);
router.delete('/:id', deleteChange);

module.exports = router;