const passport = require("passport");
const router = require("express").Router();
const auth = require("./auth");
const { Admin } = require("../db");

// GET requests to /api/admins/
//POST new user route (optional, everyone has access)
router.post("/signup", auth.optional, async (req, res) => {
  const {
    body: { admin }
  } = req;

  //console.log("Admin: ", admin);

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

  Admin.create(admin)
    .then(function(admin) {
      admin.setPassword(req.body.admin.password);
      console.log("Admin Signup: ", admin);
      return admin.save().then(() => res.json({ admin: admin.toAuthJSON() }));
    })
    .catch(function(err) {
      console.log(err);
    });
});

//POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  const {
    body: { admin }
  } = req;
  console.log("admin: --------- ", admin);
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
    (err, passportAdmin) => {
      if (err) {
        return next(err);
      }
      console.log("Passport Admin: ", passportAdmin);
      if (passportAdmin) {
        const admin = passportAdmin;

        admin.token = passportAdmin.generateJWT();

        console.log("Admin Login: ", admin);

        return res.json({ admin: admin.toAuthJSON() });
      }

      return status(400).info;
    }
  )(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get("/current", auth.required, (req, res) => {
  const {
    payload: { id }
  } = req;

  return Admin.findById(id).then(admin => {
    if (!admin) {
      return res.sendStatus(400);
    }

    return res.json({ admin: admin.toAuthJSON() });
  });
});

router.get("/logout", function(req, res) {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

// router.get('/', function (req, res, next) { /* etc */});

module.exports = router;
