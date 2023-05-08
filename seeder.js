const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// load env variables
dotenv.config({ path: "./config/config.env" });

// load models
const User = require("./models/User");

// connect to db
mongoose.connect(process.env.MONGO_URI);

// read JSON files
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8"));

// import to DB
const importData = async () => {
  try {
    await User.create(users);
    console.log('Data imported');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

// delete from db
// WARNING : all data will be deleted from User db
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('Data deleted');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
