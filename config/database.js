const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb);
    console.log("Yay! MongoDB is now connected.😊");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;