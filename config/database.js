const mongoose = require("mongoose");

// connect to MongoDb database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (process.env.NODE_ENV === "development") {
      console.log(`Mongodb connected on port ${conn.connection.port}`);
    }
  } catch (err) {
    console.log("Error occurred in connecting to database");
  }
};

module.exports = connectDB;
