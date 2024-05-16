const User = require("./user.model");

const buildSaveuserJson = (props) => {
  const json = {};
  json.first_name = props.first_name;
  json.last_name = props.last_name || null;
  json.mobile = props.mobile || null;
  json.email = props.email || null;
  json.password = props.password;
  json.is_verified = false;
  json.is_active = true;
  return json;
};

module.exports.checkUserExist = async (mobile) => {
  try {
    const user = await User.findOne({ mobile });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.signupUser = async (userDetail) => {
  try {
    const user = new User(buildSaveuserJson(userDetail));
    const result = await user.save();
    return result;
  } catch (error) {
    throw error;
  }
};
