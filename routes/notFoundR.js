const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse");
const router = express.Router();


const notFound = asyncHandler(async (req, res, next) => {
  next(new ErrorResponse('Requested resource not found', 404));
});

router.route('/').all(notFound);

module.exports = router;
