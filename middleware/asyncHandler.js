// handle async/await (try, catch)
const asyncHandler = (fn) => (
  (req, res, next) => (
    Promise.resolve(fn(req, res, next)).catch(next)
  )
);

module.exports = asyncHandler;
