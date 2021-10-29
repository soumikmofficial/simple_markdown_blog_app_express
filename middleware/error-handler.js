const errorHandler = (err, res, req, next) => {
  if (err.message === "not found") {
    res.render(404);
  }
  res.status(err.status || 500).json({ status: "unsuccessful", message: err });
};
module.exports = errorHandler;
