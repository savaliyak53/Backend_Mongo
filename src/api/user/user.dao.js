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

module.exports.getUser = async (query) => {
  const { page = 1, item = 10, status, search } = query;
  try {
    let pipeline = [];
    let matchStage = {};
    let nameFilter = [];
    let members_id = [];

    /*$match stage*/
    if (members_id.length > 0) {
      matchStage._id = { $in: members_id };
    }
    if (status) {
      matchStage.is_active = status === "active" ? true : false;
    }
    if (search) {
      nameFilter.push({ first_name: { $regex: search, $options: "i" } });
    }
    if (search) {
      nameFilter.push({ last_name: { $regex: search, $options: "i" } });
    }

    if (nameFilter.length > 0) {
      matchStage.$or = nameFilter;
    }

    if (Object.keys(matchStage).length > 0) {
      pipeline.push({ $match: matchStage });
    }

    /*$project, $limit, $skip*/
    pipeline.push(
      {
        $project: {
          first_name: 1,
          last_name: 1,
          mobile: 1,
          is_active: 1,
        },
      },
      { $skip: (page - 1) * item },
      { $limit: Number(item) }
    );
    const [users, totalCount] = await Promise.all([
      User.aggregate(pipeline).exec(),
      User.countDocuments(matchStage).exec(),
    ]);
    return { users: users, total: totalCount };
  } catch (error) {
    throw error;
  }
};
