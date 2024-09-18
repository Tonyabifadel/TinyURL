const mongoose = require('mongoose');

const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to mongoose");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectMongoose };
