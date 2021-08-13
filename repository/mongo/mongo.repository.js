const mongoose = require('mongoose');
require('dotenv').config();

const userModel = require('./models/user.model');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  user: { ...userModel.queries },
};
