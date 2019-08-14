const router = require('express').Router();
const { getAllUsers, getUserFormsById, getUserFormResponces } = require('../db/queries');

// get all users
router.get('/', (req, res) => {
  getAllUsers()
  .then((users) => res.send(users))
  .catch((e) => res.send([]));
});

// get all forms from a user (not the actual responces just metadata)
router.get('/:id', (req, res) => {
  let id = req.params.id || -1;
  if(id == -1) res.send({ error: "some error" });
  getUserFormsById(id)
  .then((applicant) => res.send(applicant))
  .catch((e) => res.send({ error: "some error" }));
});

// get the responces from a user by their id and the form's id
router.get('/:userid/:formid/', (req, res) => {
  let userId = req.params.userid || false;
  let formId = req.params.formid || false;
  if(!userId || !formId) res.send({ error: "some error" });
  getUserFormResponces(userId, formId)
  .then((data) => res.send(data))
  .catch((e) => res.send({}));
});

module.exports = router;
