const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb);
    console.log("Hi, MongoDB is connected successfully.😊");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;