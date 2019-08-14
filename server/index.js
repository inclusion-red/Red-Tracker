const express = require("express");
const app = express();
const port = process.env.PORT || "3001";
let publicFolder = './public';

if(process.env.NODE_ENV === 'development') {
  publicFolder = '../frontend/public';
  //logging middleware
  const morgan = require('morgan');
  app.use(morgan('dev'));
}


//static middlewaare
const path = require("path");
app.use(express.static(path.join(__dirname, publicFolder)));

//seed
// const seed = require('./seed');
// seed();

//parsing middleware for req.body
const bodyParser= require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api",require('./routes'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, `${publicFolder}/index.html`));
});

//handling 500 errors
app.use(function (err, req, res) {
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
