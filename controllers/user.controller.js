const userService = require('../services/user.service');

const createUser = async (req, res) => {
  req.log.info(`[user.controller] Creating user: ${req.body.username}`);

  const username = req.body.username;
  const user = await userService.createUser(username);

  req.log.info(`[user.controller] Created user: ${JSON.stringify(user)}`);

  res.json(user);
};

const getUsers = async (req, res) => {
  req.log.info(`[user.controller] Getting users`);

  const users = await userService.getUsers();

  req.log.info(`[user.controller] Got users: ${JSON.stringify(users)}`);

  res.json(users);
};

module.exports = {
  createUser,
  getUsers,
};
