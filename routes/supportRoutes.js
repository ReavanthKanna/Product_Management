const express = require('express');
const {
  createRequest,
  getRequests,
  getRequestById,
  updateRequest,
  deleteRequest
} = require('../controllers/supportController');

const router = express.Router();

router.post('/', createRequest);
router.get('/', getRequests);
router.get('/:id', getRequestById);
router.put('/:id', updateRequest);
router.delete('/:id', deleteRequest);

module.exports = router;