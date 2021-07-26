require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saul:SuperPassword@cluster10101.pqwlc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model( "Person", personSchema );


const createAndSavePerson = (done) => {
  
  var myPerson = new Person({
    name: "Saul", age: 90, favoriteFoods: ["fish", "eggs"]
  });

  myPerson.save( (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });

};

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol",     age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert",  age: 78, favoriteFoods: ["wine"]}
];

const createManyPeople = (arrayOfPeople, done) => {

  Person.create( arrayOfPeople, (err, people) => {
    if (err) return console.log(err);
    done(null , people);
  });

};

const findPeopleByName = (personName, done) => {

  Person.find( {name: personName}, (err, personFound) => {
    if (err) return console.log(err);
    done(null, personFound);
  });
  
};

const findOneByFood = (food, done) => {

  Person.findOne( {favoriteFoods: food}, (err, foodFound) => {
    if (err) return console.log(err);
    done(null , foodFound);
  });

};

const findPersonById = (personId, done) => {

  Person.findById( personId, (err, data) =>{
    if (err) return console.log(err);
    done(null, data);
  });

};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById( personId, (err, person) => {
    
    if (err) return console.log(err);

    person.favoriteFoods.push(foodToAdd);

    person.save( (err, updatedPerson) => {
      if (err) return console.log(err)
      done(null, updatedPerson);    
    });

  });

};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
