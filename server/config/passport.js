const sequelize = require("sequelize");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Admin = sequelize.model("Admin");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]"
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
