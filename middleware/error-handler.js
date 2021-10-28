const errorHandler = (err, res, req, next) => {
  console.log(err);
  res.status(500).json({ status: "unsuccessful", message: err });
};

module.exports = errorHandler;
