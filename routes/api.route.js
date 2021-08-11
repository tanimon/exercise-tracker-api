const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.post('/users', controller.createUser);

module.exports = router;
