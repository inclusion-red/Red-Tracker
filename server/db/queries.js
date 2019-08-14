// for now i am using dummy data. sequelize queries return a promise so i am simulating so that when we change it to sequelize then the rest of the code using the functions should stay the same.

const admin = require('../dummy/admin');
const applicant = require('../dummy/applicant');
const applicant_form = require('../dummy/application_form');
const application_responce = require('../dummy/application_responce');
const comment = require('../dummy/comment');
const form_field = require('../dummy/form_field');
const form = require('../dummy/form');

// ---------------------------------------
// form functions

// resolves with all forms
function getAllForms() {
  return new Promise((resolve, reject) => {
    if(!form) reject(new Error("forms is not found"));
    return resolve(form);
  });
}

// resolves with one form and form inputs by id
function getFormById(id) {
  return new Promise((resolve, reject) => {
    if(!form) reject(new Error("forms is not found"));
    let formData = {};
    for(let i in form) {
      if(form[i].formid == id) {
        formData.form = form[i];
        break;
      }
    }
    let form_field_data = [];
    for(let j in form_field) {
      if(form_field[j].formid == id) form_field_data.push(form_field[j]);
    }
    formData.form_field = form_field_data;
    // should reject if none is found or something
    resolve(formData)
  });
}

// resolves to to form that was updated (or should probably resolve to boolean to send less data)
function updateForm(id) {
  return new Promise((resolve, reject) => {
    if(!form) reject(new Error("forms is not found"));
    resolve(true);
  });
}

// resolve to new form created (should probably resolve to form id to send less data)
function createForm() {
  return new Promise((resolve, reject) => {
    if(!form) reject(new Error("forms is not found"));
    // should probably return form that was created
    resolve(true);
  });
}

// ---------------------------------------
// user queries

// resolves with all users
function getAllUsers() {
  return new Promise((resolve, reject) => {
    if(!applicant) reject(new Error('applicants cannot be found'));
    resolve(applicant);
  });
}

// resolves with all forms for one applicant by id of applicant
function getUserFormsById(id) {
  return new Promise((resolve, reject) => {
    if(!applicant) reject(new Error('applicants cannot be found'));
    let applicant_data = {};
    for(let i in applicant) {
      console.log(id ,applicant[i]);
      if(applicant[i].applicantid == id) {
        applicant_data.applicant = applicant[i];
        break;
      }
    }
    if(!applicant_data.applicant) resolve({});
    let userForms = [];
    for(let j in applicant_form) {
      console.log('form', applicant_form[j])
      if(applicant_form[j].applicantid == id) {
        userForms.push(applicant_form[j]);
      }
    }
    applicant_data.application_form = userForms;
    resolve(applicant_data);
  });
}

// resolves to user's responces (should probably also return the form data (form and form_field))
function getUserFormResponces(userid, formid) {
  return new Promise((resolve, reject) => {
    if(!applicant) reject(new Error('applicants cannot be found'));
    resolve([]);
  });
}


module.exports = {
  getAllForms,
  getFormById,
  updateForm,
  createForm,
  getAllUsers,
  getUserFormsById,
  getUserFormResponces
};
