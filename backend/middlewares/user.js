import User from "../models/user.js";

const existingUser = async (req, res, next) => {
  const existingUser = await User.findOne({ email: req.body.email });
  return existingUser
    ? res.status(400).send({ message: "The user is already registered" })
    : next();
};

export default { existingUser };
