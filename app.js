// src/index.js
const express = require("express");
const { dbConnect } = require("./connection");
// Route setup
const cors = require("cors");
const UserRouter = require("./routes/UserRouter");
// const data = require("./models/MOCK_DATA.json")
const app = express();

// Connect to the database
dbConnect(
  "mongodb+srv://amankumar:amankumar@cluster0.auljv.mongodb.net/test"
).then(() => console.log("mongodb connected"));

app.use(cors());

// OR - Enable CORS with specific settings
app.use(
  cors({
    origin: "*", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);
// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", UserRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
