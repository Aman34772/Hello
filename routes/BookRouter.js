const express = require("express");
const {
  handleGetAllBooks,
  handleCreateBook,
} = require("../controllers/BookController");

const router = express.Router();

router.route("/").get(handleGetAllBooks).post(handleCreateBook);

module.exports = router;
