const userService = require('../services/user.service');

const createUser = async (req, res) => {
  req.log.info(`[user.controller] Creating user: ${req.body.username}`);

  const username = req.body.username;
  const user = await userService.createUser(username);

  req.log.info(`[user.controller] Created user: ${JSON.stringify(user)}`);

  res.json(user);
};

module.exports = {
  createUser,
};
