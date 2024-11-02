module.exports = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
      error: {
        message: err.message,
      },
    });
  }