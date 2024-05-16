const express = require('express');
const userController = require('../controllers/userController');
const authUtils = require('../utils/authUtils');

const router = express.Router();

router.get('/', authUtils.authenticateToken, userController.getAllUsers);
router.get('/:id', authUtils.authenticateToken, userController.getSingleUserDetails);

module.exports = router;