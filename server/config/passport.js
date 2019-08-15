const passport = require("passport");
const LocalStrategy = require("passport-local");

const { Admin } = require("../db");

passport.use(
  new LocalStrategy(
    {
      usernameField: "admin[email]",
      passwordField: "admin[password]"
    },
    (email, password, done) => {
      Admin.findOne({ email })
        .then(admin => {
          if (!admin || !admin.validatePassword(email, password)) {
            return done(null, false, {
              errors: { "email or password": "is invalid" }
            });
          }

          return done(null, admin);
        })
        .catch(done);
    }
  )
);
