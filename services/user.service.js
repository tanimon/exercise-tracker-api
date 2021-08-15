const {
  user: userRepository,
} = require('../repository/mongo/mongo.repository');

const createUser = async (username) => {
  const user = await userRepository.createUser(username);
  return { _id: user._id, username: user.username };
};

const getUsers = async () => {
  const users = await userRepository.getUsers();
  return users;
};

module.exports = {
  createUser,
  getUsers,
};
