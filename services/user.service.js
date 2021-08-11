const {
  user: userRepository,
} = require('../repository/mongo/mongo.repository');

const createUser = async (username) => {
  const user = await userRepository.createUser(username);
  return { _id: user._id, username: user.username };
};

module.exports = {
  createUser,
};
