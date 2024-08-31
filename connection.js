// src/config/db.js
const mongoose = require("mongoose");
const {User}=require("./models/User")
 const dbConnect = async (url) => { 
    return await mongoose.connect(url);
};

module.exports = {dbConnect};
