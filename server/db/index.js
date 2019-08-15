const {Admin, Applicant, ApplicationForm, ApplicationResponse, Comment, Form, FormField} = require('./models');
const db = require('./config');

ApplicationForm.belongsTo(Form);

ApplicationForm.belongsTo(Applicant);




module.exports = {
  Admin,
  Applicant,
  ApplicationForm,
  ApplicationResponse,
  Comment,
  Form,
  FormField,
  db,
}