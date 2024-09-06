// bookModel.js
const mongoose = require("mongoose");

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  coverImageUrl: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Book model from the schema
const Book = mongoose.model("Book", bookSchema);

// Export the model
module.exports = Book;
