const mongoose = require('mongoose');
const logger = require('../../../utils/log');

const userSchema = new mongoose.Schema({
  username: String, // todo: make `username` prop unique and indexed
});

const User = mongoose.model('User', userSchema);

const createUser = async (username) => {
  logger.info(`[user.collection] Creating a user: ${username}`);
  const user = await User.create({ username });
  return user;
};

exports.queries = {
  createUser,
};
