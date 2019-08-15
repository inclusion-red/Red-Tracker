const passport = require("passport");
const router = require("express").Router();
const auth = require("./auth");
const { Admins } = require("../db");

// GET requests to /api/admins/
//POST new user route (optional, everyone has access)
router.post("/signup", auth.optional, (req, res, next) => {
  const {
    body: { admin }
  } = req;

  if (!admin.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!admin.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  const finalUser = new Admins(admin);

  finalUser.setPassword(admin.password);

  return finalUser
    .save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  const {
    body: { admin }
  } = req;

  if (!admin.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!admin.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportAdmin, info) => {
      if (err) {
        return next(err);
      }

      if (passportAdmin) {
        const user = passportAdmin;
        user.token = passportAdmin.generateJWT();

        return res.json({ user: user.toAuthJSON() });
      }

      return status(400).info;
    }
  )(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get("/current", auth.required, (req, res, next) => {
  const {
    payload: { id }
  } = req;

  return Admins.findById(id).then(admin => {
    if (!admin) {
      return res.sendStatus(400);
    }

    return res.json({ admin: admin.toAuthJSON() });
  });
});

// router.get('/', function (req, res, next) { /* etc */});

module.exports = router;
