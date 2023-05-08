const express = require("express");
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/userC");

const router = express.Router();

router.route('/')
  .get(getAllUsers)
  .post(createUser)

router.route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;
