// src/index.js
const express = require("express");
const { dbConnect } = require("./connection");
// Route setup
const UserRouter = require("./routes/UserRouter");
// const data = require("./models/MOCK_DATA.json")
const app = express();

// Connect to the database
dbConnect(
  "mongodb+srv://amankumar:amankumar@cluster0.auljv.mongodb.net/test"
).then(() => console.log("mongodb connected"));

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", UserRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
