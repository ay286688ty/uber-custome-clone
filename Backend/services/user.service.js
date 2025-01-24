const userModel = require("../models/user.model"); // Correct import

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are rewquired");
  }
  const user = userModel({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
