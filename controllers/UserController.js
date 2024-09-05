const { body, validationResult } = require("express-validator");

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
    !body.first_name ||
    !body.last_name ||
    !body.gender ||
    !body.email
  )
    return res.status(200).json({ status: "All fields are required" });
  await User.create({
    id: body.id,
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  return res.status(201).json({ status: "created" });
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
