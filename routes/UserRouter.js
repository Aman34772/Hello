// src/routes/userRoutes.js
const express = require("express");
const { handlegetAllUsers,handleCreateUsers,handleGetUserById } = require("../controllers/UserController");

const router = express.Router();
// Define routes
router.route("/").get(handlegetAllUsers).post(handleCreateUsers);

router.route("/:id").get(handleGetUserById);

module.exports =  router ;
