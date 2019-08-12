const router = require("express").Router();
//var util = require('util');
var passport = require("passport");
//var fs = require('fs');
//var request = require("request");
const bcrypt = require("bcrypt");
const uuidv4 = require("uuid/v4");
const LocalStrategy = require("passport-local").Strategy;
const Admin = require("../db/admin");
const pool = require("../passport");

router.use("/users", require("./admins"));

router.get("/login", function(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/users"); //send to Admin Page
  } else {
    res.render("login", {
      title: "Log in",
      userData: req.user,
      messages: {
        danger: req.flash("danger"),
        warning: req.flash("warning"),
        success: req.flash("success")
      }
    }); //try again please
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/users", //Admin Page
    failureRedirect: "/login", //Try again please
    failureFlash: true
  }),
  function(req, res) {
    if (req.body.remember) {
      req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
    } else {
      req.session.cookie.expires = false; // Cookie expires at end of session
    }
    res.redirect("/"); //Send them back home
  }
);

// handling 404
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});
module.exports = router;
