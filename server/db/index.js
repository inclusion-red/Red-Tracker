const {Admin, Applicant, ApplicantForm, ApplicantResponse, Comment, Form, FormField} = require('./models');
const db = require('./config');

ApplicantForm.belongsTo(Form);
ApplicantForm.belongsTo(Applicant);


Comment.belongsTo(ApplicantForm);
Comment.belongsTo(Admin);

ApplicantResponse.belongsTo(ApplicantForm);
ApplicantResponse.belongsTo(FormField);


Form.belongsToMany(Admin, {through: 'FormAdmin'});
Admin.belongsToMany(Form, {through: 'FormAdmin'});
FormField.belongsTo(Form);

module.exports = {
  Admin,
  Applicant,
  ApplicantForm,
  ApplicantResponse,
  Comment,
  Form,
  FormField,
  db,
}