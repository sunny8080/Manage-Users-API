const User = require('../models/User')
const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../utils/ErrorResponse')
const uuidValidate = require('uuid');

// @desc      Get All Users
// @route     GET /api/users
// @access    Public
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});


// @desc      Get Single User
// @route     GET /api/users/:userId
// @access    Public
exports.getUser = asyncHandler(async (req, res, next) => {
  if (!uuidValidate.validate(req.params.userId)) {
    return next(new ErrorResponse('Invalid userId', 400));
  }

  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(new ErrorResponse(`No user found with given id`, 404));
  }

  return res.status(200).json({
    success: true,
    data: user
  })
});


// @desc      Create a User
// @route     POST /api/users
// @access    Public
exports.createUser = asyncHandler(async (req, res, next) => {
  const { username, age, hobbies } = req.body;

  // check for all required value presence
  if (!(username && age && hobbies)) {
    return next(new ErrorResponse('Some fields are missing', 400));
  }

  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user })
});


// @desc      Update a User
// @route     PUT /api/users/:userId
// @access    Public
exports.updateUser = asyncHandler(async (req, res, next) => {
  if (!uuidValidate.validate(req.params.userId)) {
    return next(new ErrorResponse('Invalid userId', 400));
  }
  const { username, name, hobbies } = req.body;

  // update user and returned updated user, if user found
  const user = await User.findByIdAndUpdate(req.params.userId, { username, name, hobbies }, {
    new: true,
    runValidators: true
  });

  if (!user) {
    return next(new ErrorResponse(`No user found with given id`, 404));
  }

  return res.status(200).json({
    success: true,
    data: user
  })
});


// @desc      Delete a User
// @route     DELETE /api/users/:userId
// @access    Public
exports.deleteUser = asyncHandler(async (req, res, next) => {
  if (!uuidValidate.validate(req.params.userId)) {
    return next(new ErrorResponse('Invalid userId', 400));
  }

  const user = await User.findByIdAndDelete(req.params.userId);

  if (!user) {
    return next(new ErrorResponse(`No user found with given id`, 404));
  }

  return res.status(204).json({
    success: true,
    data: user
  })
});

