const mongoose = require('mongoose');

const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL ,   {
    serverSelectionTimeoutMS: 30000 // Increase timeout
   } 
  );
    console.log("connected to mongoose");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectMongoose };
