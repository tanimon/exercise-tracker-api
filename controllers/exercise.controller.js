const moment = require('moment');
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

const getExercisesByUserId = async (req, res) => {
  const userId = req.params._id;
  const from = parseDate(req.query.from);
  const to = parseDate(req.query.to);
  const limit = parseInt(req.query.limit);

  req.log.info(
    `[exercise.controller] Getting exercises for the user having ID: ${userId}`
  );

  const exercises = await exerciseService.getExercisesByUserId(
    userId,
    from,
    to,
    limit
  );

  req.log.info(
    `[exercise.controller] Got exercises: ${JSON.stringify(exercises)}`
  );

  res.json(exercises);
};

const parseDate = (dateStr) => {
  const maybeDate = moment.utc(dateStr, 'YYYY-MM-DD');
  return maybeDate.isValid() ? maybeDate.toDate() : undefined;
};

module.exports = {
  createExercise,
  getExercisesByUserId,
};
