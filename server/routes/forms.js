const router = require('express').Router();
//const { getAllForms, getFormById, updateForm, createForm } = require('../db/queries');
const {Form, FormField} = require('../db/models');

// get all forms
router.get('/', (req, res, next) => {
  Form.findAll()
    .then((forms) => res.send({ forms: forms }))
    .catch((e) => next(e));
});

router.get('/active', (req, res, next) => {
  Form.findAll({
    where: {
      active: true
    }
  })
    .then((forms) => res.send({ forms: forms }))
    .catch((e) => next(e));
});

// get form by id get forms data and and form inputs for one single form
router.get('/:id', (req, res, next) => {
  let formId = req.params.id;
  Form.findOne({
    where: {id: formId},
    include: [{model: FormField}]})
    .then((form) => res.send(form))
    .catch((e) => next(e));
});

// post a new form to along with the inputs
//example
// {
//   "active": true,
//   "formfields": [
//       {
//           "tag": "input",
//           "question": "name:",
//           "class": "",
//           "other_setting": null,
//           "formId": 1
//       },
//       {
//           "tag": "textarea",
//           "question": "Why did you apply?",
//           "class": "",
//           "other_setting": null,
//       }
//   ]
// }
router.post('/new', async (req, res, next) => {
  try {
    const newFormData = {"title": req.body.title, "active": req.body.active};
    const newFormFieldsData = req.body.formfields;
    console.log(req.body);

    const newForm = await Form.create(newFormData);
    if (!newForm) {
      res.status(400).send({message: "can't create this form"})
    }
    const newFormFields = await Promise.all(newFormFieldsData.map(fieldData => {
      FormField.create(fieldData).then(formFieldObj => newForm.setFormfields(formFieldObj));
    }));
    if (!newFormFields) {
      res.status(400).send({message: "can't create formfield inputs"})
    }
    res.status(200).send({message: "created successfully"})
  }
  catch(e) {
    next(e)
  }
})

// update a form by id (and inputs if any change might be easier to delete and make a new one)
// router.post('/update/:id', (req, res) => {
//   let id = req.params.id || -1;
//   if(id == -1) res.send({ error: "some error" });
//   updateForm(id)
//     .then((data) => res.send(data))
//     .catch((e) => res.send({ error: e }));
// });


module.exports = router;
