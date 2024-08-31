const { User } = require("../models/User");
// src/controllers/userController.js
// const data = require("./dummy.json");
const handlegetAllUsers = async (req, res) => {
  const result = await User.find({});
  res.status(200).json({ message: "Get all users", result });
};

const handleCreateUsers = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.id ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender
  ) {
    return res.json({ msg: "All fields are required!" });
  }
  await User.create({
    id: body.id,
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  return res.json({ status: "created" });
};

const handleGetUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ id: Number(id) });
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { handlegetAllUsers, handleCreateUsers, handleGetUserById };
