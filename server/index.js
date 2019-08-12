const express = require("express");
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || "3001";
=======
const port = process.env.PORT || "3000";
let publicFolder = './public';

if(process.env.NODE_ENV === 'development') {
  publicFolder = '../frontend/public';
  //logging middleware
  const morgan = require('morgan');
  app.use(morgan('dev'));
}
>>>>>>> master


//static middlewaare
const path = require("path");
<<<<<<< HEAD
//app.use(express.static(path.join(__dirname, '..', 'frontend/public')));
=======
app.use(express.static(path.join(__dirname, publicFolder)));
>>>>>>> master

//parsing middleware for req.body
const bodyParser= require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api",require('./routes'));

app.get('*', function (req, res) {
<<<<<<< HEAD
  //res.sendFile(path.join(__dirname, '..','frontend/public/index.html'));
  res.send("hi");
=======
  res.sendFile(path.join(__dirname, `${publicFolder}/index.html`));
>>>>>>> master
});

//handling 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//
// const {db} = require('./db');
// db.sync({force: true})
// .then({

// })
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
