// src/index.js
const express = require("express");
// const bodyParser = require("body-parser");
// const { User } = require("./models/User");
const { dbConnect } = require("./connection");
// Route setup

// This parses JSON bodies

const cors = require("cors");
const UserRouter = require("./routes/UserRouter");
// const data = require("./models/MOCK_DATA.json")
const app = express();

// Connect to the database
dbConnect(
  "mongodb+srv://amankumar:amankumar@cluster0.auljv.mongodb.net/test"
).then(() => console.log("mongodb connected"));

// OR - Enable CORS with specific settings

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Include credentials if needed (cookies, authorization headers, etc.)
  })
);
// Middleware to parse JSON requests
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", UserRouter);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
