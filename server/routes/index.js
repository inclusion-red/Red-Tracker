const router = require("express").Router();

router.use("/admin", require("./admins"));
router.use("/user", require("./users"));
router.use("/form", require("./forms"));
//router.use('/api', require('./api'));

// handling 404
router.use(function(req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
