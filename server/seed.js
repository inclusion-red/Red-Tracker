const {db} = require('./db');

//models
const {Admin} = require('./db');

//data
const {adminJSON} = require('./db/data');

const seed = function () { 
  db.sync({force: true})
    .then( async () => {
      console.log("----------------------");
      console.log("Start seeding database");
      console.log("----------------------");

      //generate Admins
      await Promise.all(adminJSON.map(user => Admin.create(user)));
      console.log("Data seeded")

      console.log("-----------------------------------------");
      console.log("Populated Database with Seed Successfully");
      console.log("-----------------------------------------");
      process.exit(0);
    });
}

seed();
module.exports = seed;