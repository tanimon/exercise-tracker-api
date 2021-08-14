const moment = require('moment');
const {
  exercise: repository,
} = require('../repository/mongo/mongo.repository');

const createExercise = async (userId, description, duration, date) => {
  const exercise = await repository.createExercise(
    userId,
    description,
    duration,
    date ?? new Date()
  );

  return {
    ...exercise,
    date: moment.utc(exercise.date.toUTCString()).format('ddd MMM DD YYYY'),
  };
};

module.exports = { createExercise };
