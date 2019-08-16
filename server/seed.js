const {db} = require('./db');

//models
const {Admin, Applicant, ApplicantForm, ApplicantResponse, Comment, Form, FormField} = require('./db');

//data
const {adminJSON, applicantJSON, applicantFormJSON, applicantResponseJSON, commentJSON, formJSON, formFieldJSON} = require('./db/data');

const seed = function () { 
  db.sync({force: true})
    .then( async () => {
      console.log("----------------------");
      console.log("Start seeding database");
      console.log("----------------------");

      //generate Admins
      const adminsData = await Promise.all(adminJSON.map(user => Admin.create(user)));
      console.log("Admins Data seeded")

      //generate Applicants
      await Promise.all(applicantJSON.map(user => Applicant.create(user)));
      console.log("Applicants Data seeded")

      //generate Forms
      //add Forms to Admins
      await Promise.all(formJSON.map(form => {
        Form.create(form).then(formObj => formObj.setAdmins(adminsData))
    
      }));
      console.log("Form Data seeded")
      console.log("Forms added to every Admin")

      //generate FormFields
      await Promise.all(formFieldJSON.map(formfield=> FormField.create(formfield)));
      console.log("FormField Data seeded")

      //generate ApplicantForm
      await Promise.all(applicantFormJSON.map(appform => ApplicantForm.create(appform)));
      console.log("ApplicantForm Data seeded")

      //generate Comments
      await Promise.all(commentJSON.map(comment => Comment.create(comment)));
      console.log("Comments Data seeded")

      //generate ApplicantResponse
      await Promise.all(applicantResponseJSON.map(res => ApplicantResponse.create(res)));
      console.log("ApplicantResponse Data seeded")

      
      console.log("-----------------------------------------");
      console.log("Populated Database with Seed Successfully");
      console.log("-----------------------------------------");
      process.exit(0);
    });
}

seed();
module.exports = seed;