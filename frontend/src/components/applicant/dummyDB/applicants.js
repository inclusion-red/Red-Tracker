// var faker = require('faker');
import faker from 'faker';

let applicants={};

for(let i=0; i <= 10; i++){
  applicants[i] ={
    name: faker.name.findName(),
    email: faker.internet.email(),
  };
}

export default applicants;