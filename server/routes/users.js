const router = require('express').Router();
//const { getAllUsers, getUserFormsById, getUserFormResponces } = require('../db/queries');
//const {Admin, Applicant, ApplicantForm, ApplicantResponse, Comment, Form, FormField} = require('../db/models');
const {Applicant} = require('../db/models');

// get all users (i don't think we need this)
router.get('/', (req, res) => {
  Applicant.findAll()
    .then((users) => res.send(users))
    .catch((e) => res.send({ error: e }));
});

// get all forms from a user (not the actual responses just metadata)
// router.get('/:id', (req, res, next) => {
//   let applicantId = req.params.id;
//   Applicant.findOne({
//     where: {id: applicantId},
//     include: [{model: Form}]})
//     .then((forms) => res.send(forms))
//     .catch((e) => next(e));
// });

// get the responces from a user by their id and the form's id
// also get the form and the inputs
// router.get('/:userid/:formid/', (req, res) => {
//   let userId = req.params.userid || false;
//   let formId = req.params.formid || false;
//   if(!userId || !formId) res.send({ error: "some error" });
//   getUserFormResponces(userId, formId)
//     .then((data) => res.send(data))
//     .catch((e) => res.send({ error: e }));
// });

module.exports = router;
