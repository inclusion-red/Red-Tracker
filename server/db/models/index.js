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
  bcrypt.genSalt(saltRounds, (err, salt) => {
    this.dataValues.salt = salt;
    bcrypt.hash(password, salt, (err, hash) => {
      this.dataValues.hash = hash;
    });
  });
};

Admin.prototype.validatePassword = async (username, password) => {
  const match = await bcrypt.compare(password, username.hash);

  if (match) {
    return true;
  } else {
    return false;
  }
};

Admin.prototype.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this.id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    "secret"
  );
};

Admin.prototype.toAuthJSON = function() {
  return {
    id: this.id,
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
