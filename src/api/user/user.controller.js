const userService = require("./user.service");

module.exports.signupUser = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await userService.signupUser(body);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
