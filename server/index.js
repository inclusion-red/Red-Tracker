const express = require("express");
const app = express();
const port = process.env.PORT || "3000";

//logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

//static middlewaare
const path = require("path");
app.use(express.static(path.join(__dirname, '..', 'frontend/public')));

//parsing middleware for req.body
const bodyParser= require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api",require('./routes'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..','frontend/public/index.html'));
});

//handling 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});