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
  console.log("Admin : / /////: ");
  console.log(admin);
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
  console.log("We made it!!!!");

  Admin.create(admin)
    .then(function(admin) {
      // you can now access the newly created task via the variable task
      console.log("In Routes Admin:", admin);
      console.log("Req Password: ", req.body.admin.password);
      admin.setPassword(req.body.admin.password);
      return admin.save().then(() => res.json({ admin: admin.toAuthJSON() }));
    })
    .catch(function(err) {
      // print the error details
      console.log(err, admin.email);
    });

  // const finalAdmin = await Admin.create(admin);

  // console.log("///////// Final Admin: ", finalAdmin);

  // finalAdmin.setPassword(admin.password);

  // return finalAdmin
  //   .save()
  //   .then(() => res.json({ user: finalAdmin.toAuthJSON() }));
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
    (err, passportAdmin) => {
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

// router.get('/', function (req, res, next) { /* etc */});

module.exports = router;
