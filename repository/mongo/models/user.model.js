const mongoose = require('mongoose');
const logger = require('../../../utils/log');

const userSchema = new mongoose.Schema({
  username: String, // todo: make `username` prop unique and indexed
});

const User = mongoose.model('User', userSchema);

const createUser = async (username) => {
  logger.info(`[user.model] Creating a user: ${username}`);
  const user = await User.create({ username });
  return user;
};

const getUsers = async () => {
  logger.info('[user.model] Getting all users');
  const users = await User.find({});
  return users;
};

exports.queries = {
  createUser,
  getUsers,
};
