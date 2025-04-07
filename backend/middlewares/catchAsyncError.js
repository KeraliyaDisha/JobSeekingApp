export const catchAsyncError = (theFuntion) => {
  return (req, res, next) => {
    Promise.resolve(theFuntion(req, res, next)).catch(next);
  };
};
