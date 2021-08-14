const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: false },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

const createExercise = async (userId, description, duration, date) => {
  const exercise = await Exercise.create({
    user: userId,
    description,
    duration,
    date,
  });
  const populatedExercise = await exercise.execPopulate('user');

  return {
    _id: populatedExercise.user._id,
    username: populatedExercise.user.username,
    description: populatedExercise.description,
    duration: populatedExercise.duration,
    date: populatedExercise.date,
  };
};

exports.queries = { createExercise };
