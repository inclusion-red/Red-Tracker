// const sequelize = require("sequelize");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");

//??
// const Users = sequelize.model("Users");

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "user[email]",
//       passwordField: "user[password]"
//     },
//     (email, password, done) => {
//       Users.findOne({ email })
//         .then(user => {
//           if (!user || !user.validatePassword(password)) {
//             return done(null, false, {
//               errors: { "email or password": "is invalid" }
//             });
//           }

//           return done(null, user);
//         })
//         .catch(done);
//     }
//   )
// );

// var express = require("express");
// var app = express();
// var passport = require("passport");
// var request = require("request");
// var flash = require("connect-flash");
// const { Pool, Client } = require("pg");
// const bcrypt = require("bcrypt");
// const uuidv4 = require("uuid/v4");
// const LocalStrategy = require("passport-local").Strategy;
// const Admin = require("./db/admin");
// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   ssl: true
// });

// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     Admin.findOne({ username: username }, function(err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false);
//       }
//       if (!user.verifyPassword(password)) {
//         return done(null, false);
//       }
//       return done(null, user);
//     });
//   })
// );

// app.get("/login", function(req, res, next) {
//   if (req.isAuthenticated()) {
//     res.redirect("/account"); //send to Admin Page
//   } else {
//     res.render("login", {
//       title: "Log in",
//       userData: req.user,
//       messages: {
//         danger: req.flash("danger"),
//         warning: req.flash("warning"),
//         success: req.flash("success")
//       }
//     }); //try again please
//   }
// });

// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/account", //Admin Page
//     failureRedirect: "/login", //Try again please
//     failureFlash: true
//   }),
//   function(req, res) {
//     if (req.body.remember) {
//       req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
//     } else {
//       req.session.cookie.expires = false; // Cookie expires at end of session
//     }
//     res.redirect("/"); //Send them back home
//   }
// );

// module.exports = { pool };
