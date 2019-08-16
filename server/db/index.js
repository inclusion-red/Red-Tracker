const {Admin, Applicant, ApplicantForm, ApplicantResponse, Comment, Form, FormField} = require('./models');
const db = require('./config');

Comment.belongsTo(ApplicantForm);
Comment.belongsTo(Admin);

ApplicantResponse.belongsTo(ApplicantForm);
ApplicantResponse.belongsTo(FormField);
FormField.hasMany(ApplicantResponse);


Form.belongsToMany(Admin, {through: 'FormAdmin'});
Admin.belongsToMany(Form, {through: 'FormAdmin'});

Form.belongsToMany(Applicant, {through: 'ApplicantForm', foreignKey: 'formId', constraints: false});
Applicant.belongsToMany(Form, {through: 'ApplicantForm', foreignKey: 'applicantId', constraints: false});

FormField.belongsTo(Form);
Form.hasMany(FormField);

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