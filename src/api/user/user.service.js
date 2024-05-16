const userDao = require("./user.dao");

module.exports.signupUser = async (params) => {
  try {
    const user = await userDao.checkUserExist(params.mobile);
    if (user) {
      return "User already exist with this mobile.";
    }

    if (params.mobile.length !== 10) {
      return "Please enter a 10-digit mobile number";
    }
    const result = await userDao.signupUser(params);
    const { password, userRole, is_verified, updatedAt, ...userData } =
      result.toObject();
    return userData;
  } catch (error) {
    throw error;
  }
};
