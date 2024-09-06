const Book = require("../models/Book");

const handleGetAllBooks = async (req, res) => {
  const result = await Book.find({});
  return res.status(200).json({ msg: "All Books are here", result });
};

const handleCreateBook = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.title ||
    !body.author ||
    !body.genre ||
    !body.publishedYear ||
    !body.description ||
    !body.coverImageUrl
  ) {
    return res.status(300).json({ msg: "All fields are required" });
  }
  const result = await Book.create({
    title: body.title,
    author: body.author,
    genre: body.genre,
    publishedYear: body.publishedYear,
    description: body.description,
    coverImageUrl: body.coverImageUrl,
  });
  return res.status(201).json({ status: "created successfully" });
};

module.exports = { handleCreateBook, handleGetAllBooks };
