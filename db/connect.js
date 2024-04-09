const mongoose = require("mongoose");

uri =
  "mongodb+srv://jaskaranpreetsingh065:GCH9x7hb3ZpJ2zCa@cluster0.qytc4uj.mongodb.net/WinApp";

const connectDb = () => {
    console.log("connect db")
  return mongoose.connect(uri);
};

module.exports = connectDb;