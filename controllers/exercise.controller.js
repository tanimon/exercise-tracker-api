const exerciseService = require('./../services/exercise.service');

const createExercise = async (req, res) => {
  const userId = req.params._id;
  const description = req.body.description;
  const duration = parseInt(req.body.duration);
  const date = req.body.date;

  req.log.info(
    `[exercise.controller] Creating an exercise for the user having ID: ${userId}`
  );
  req.log.info(
    `[exercise.controller] description: ${description}, duration: ${duration}, date: ${date}`
  );

  const exercise = await exerciseService.createExercise(
    userId,
    description,
    duration,
    date
  );

  req.log.info(
    `[exercise.controller] Created exercise: ${JSON.stringify(exercise)}`
  );

  res.json(exercise);
};

module.exports = {
  createExercise,
};
