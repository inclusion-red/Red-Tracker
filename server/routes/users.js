const router = require('express').Router();
//const { getAllUsers, getUserFormsById, getUserFormResponces } = require('../db/queries');
//const {Admin, Applicant, ApplicantForm, ApplicantResponse, Comment, Form, FormField} = require('../db/models');
const {Applicant, Form, FormField, ApplicantResponse} = require('../db/models');

// get all users (i don't think we need this)
router.get('/', (req, res) => {
  Applicant.findAll()
    .then((users) => res.send(users))
    .catch((e) => res.send({ error: e }));
});

// get all forms from a user (not the actual responses just metadata)
router.get('/:id', (req, res, next) => {
  let applicantId = req.params.id;
  Applicant.findOne({
    where: {id: applicantId},
    include: [{model: Form}]})
    .then((forms) => res.send(forms))
    .catch((e) => next(e));
});

// get the responces from a user by their id and the form's id
// also get the formfield and the applicant response, form title
router.get('/:userid/:formid/', (req, res, next) => {
  let userId = req.params.userid || false;
  let formId = req.params.formid || false;
  if(!userId || !formId) res.send({ error: "some error" });
  Applicant.findOne({
    where: {id: userId},
    include: [{
      model: Form,
      include: [{
        model: FormField,
        include: [{
          model: ApplicantResponse
        }]
      }]
    }
    ]
  })
    .then((forms) => res.send(forms))
    .catch((e) => next(e));
});

module.exports = router;
