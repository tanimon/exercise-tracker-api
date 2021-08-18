const moment = require('moment');
const {
  exercise: exerciseRepo,
  user: userRepo,
} = require('../repository/mongo/mongo.repository');

const createExercise = async (userId, description, duration, date) => {
  const exercise = await exerciseRepo.createExercise(
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

const getExercisesByUserId = async (userId, from, to, limit) => {
  const user = await userRepo.getUserByUserId(userId);
  const exercises = await exerciseRepo.getExercisesByUserId(
    userId,
    from,
    to,
    limit
  );
  const exercisesCount = exercises.length;
  const log = exercises.map((exercise) => {
    return {
      description: exercise.description,
      duration: exercise.duration,
      date: moment.utc(exercise.date).format('ddd MMM DD YYYY'),
    };
  });

  return {
    _id: user._id,
    username: user.username,
    count: exercisesCount,
    log,
  };
};

module.exports = {
  createExercise,
  getExercisesByUserId,
};
