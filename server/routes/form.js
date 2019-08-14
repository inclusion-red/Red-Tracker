const router = require('express').Router();
const { getAllForms, getFormById, updateForm, createForm } = require('../db/queries');

// get all forms
router.get('/', (req, res) => {
  getAllForms()
    .then((forms) => res.send({ forms: forms }))
    .catch((e) => res.send({ error: e }));
});

// get form by id
router.get('/:id', (req, res) => {
  let id = req.params.id || -1;
  if(id == -1) res.send({ error: "some error" });
  getFormById(id)
    .then((form) => res.send(form))
    .catch((e) => res.send({ error: e }));
});

// post a new form
router.post('/new', (req, res) => {
  createForm('')
    .then((data) => res.send(data))
    .catch((e) => res.send({ error: e }));

})

// update a form by id
router.post('/update/:id', (req, res) => {
  let id = req.params.id || -1;
  if(id == -1) res.send({ error: "some error" });
  updateForm(id)
    .then((data) => res.send(data))
    .catch((e) => res.send({ error: e }));
});


module.exports = router;
