const {Admin, Applicant, ApplicantForm, ApplicantResponse, Comment, Form, FormField} = require('./models');
const db = require('./config');

Comment.belongsTo(ApplicantForm);
Comment.belongsTo(Admin);

// ApplicantResponse.belongsTo(ApplicantForm);
// ApplicantResponse.belongsTo(FormField);
//FormField.hasMany(ApplicantResponse);

FormField.belongsToMany(ApplicantForm, {through: 'applicantResponse', foreignKey: 'formfieldId', constraints: false});
ApplicantForm.belongsToMany(FormField, {through: 'applicantResponse', foreignKey: 'applicantFormId', constraints: false});



Form.belongsToMany(Admin, {through: 'FormAdmin'});
Admin.belongsToMany(Form, {through: 'FormAdmin'});

Form.belongsToMany(Applicant, {through: 'applicantForm', foreignKey: 'formId', constraints: false});
Applicant.belongsToMany(Form, {through: 'applicantForm', foreignKey: 'applicantId', constraints: false});

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
