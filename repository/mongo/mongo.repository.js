const mongoose = require('mongoose');
require('dotenv').config();

const userModel = require('./models/user.model');
const exerciseModel = require('./models/exercise.model');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  user: { ...userModel.queries },
  exercise: { ...exerciseModel.queries },
};
