'use strict';

var obj = {

    Name: "Kapil"
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log( stringObj);

var data = () => {

    console.log(stringObj);
    console.log("PERSON is" + typeof person);
    console.log(person.name, person.age , person.location);
    console.log();
    saveNotes(stringObj);

};

var persondata = '{"name":"Kapil", "age":"35", "location":"pleasanton"}';

var person = JSON.parse(persondata);

const fs = require('fs');

var saveNotes = (data) => {

    var notes = [];

    notes.push("data");
    notes.push("2342");

    console.log(notes);

    try {
        fs.writeFileSync("/playground/notes.json", data);
    }catch(e){

        console.log("error"+e);
    }

};


module.exports = {

    data,
    saveNotes
}

setTimeout( () => {
    console.log("hello after 1000ms");
},1000);