const router = require('express').Router();

// GET requests to /api/admins/
router.get('/', (req, res, next) => res.send("ADMINS"));

module.exports = router;
