const Admin = require("./admin");
const Applicant = require("./applicant");
const ApplicantForm = require("./applicantForm");
const ApplicantResponse = require("./applicantResponse");
const Comment = require("./comment");
const Form = require("./form");
const FormField = require("./formField");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

Admin.prototype.setPassword = function(password) {
  const saltRounds = 10;
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(myPlaintextPassword, salt);
  this.salt = bcrypt.genSaltSync(saltRounds);
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

Admin.prototype.validatePassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

Admin.prototype.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    "secret"
  );
};

Admin.prototype.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT()
  };
};

module.exports = {
  Admin,
  Applicant,
  ApplicantForm,
  ApplicantResponse,
  Comment,
  Form,
  FormField
};
