const express = require('express');
const userController = require('../controllers/user.controller');
const exerciseController = require('../controllers/exercise.controller');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.post('/users/:_id/exercises', exerciseController.createExercise);

module.exports = router;
