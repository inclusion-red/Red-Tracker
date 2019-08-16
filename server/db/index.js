const {Admin, Applicant, ApplicantForm, ApplicantResponse, Comment, Form, FormField} = require('./models');
const db = require('./config');

Comment.belongsTo(ApplicantForm);
Comment.belongsTo(Admin);

ApplicantResponse.belongsTo(ApplicantForm);
ApplicantResponse.belongsTo(FormField);


Form.belongsToMany(Admin, {through: 'FormAdmin'});
Admin.belongsToMany(Form, {through: 'FormAdmin'});

Form.belongsToMany(Applicant, {through: 'ApplicantForm', foreignKey: 'formId', constraints: false});
Admin.belongsToMany(Form, {through: 'ApplicantForm', foreignKey: 'applicantId', constraints: false});

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