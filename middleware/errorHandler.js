const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  let handledError = 0;

  // mongoose bad objectId or any cast conversion
  if (err.name === "CastError") {
    const message = 'Resources not found';
    error = new ErrorResponse(message, 404);
    handledError = 1;
  }

  // mongoose duplicate key error
  if (err.code === 11000) {
    const message = 'Duplicate field value found';
    error = new ErrorResponse(message, 400);
    handledError = 1;
  }

  // mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
    handledError = 1;
  }

  // handle other errors
  if (handledError === 0 && !(err instanceof ErrorResponse)) {
    error = new ErrorResponse("Server Error", 500);
  }

  res.status(error.statusCode).json({
    success: false,
    error: error.message
  });
};

module.exports = errorHandler;
