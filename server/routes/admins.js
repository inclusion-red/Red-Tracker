const router = require('express').Router();

// GET requests to /api/admins/
router.post('/', (req, res) => {
  res.send({});
});

// Post to create a new admin
router.post('/new', (req, res) => {
  res.send({
    success: 'true'
  });
});

// router.get('/', function (req, res, next) { /* etc */});

module.exports = router;
