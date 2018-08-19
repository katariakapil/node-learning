console.log("hello world");

const fs = require('fs');
const os = require('os');
const util = require('./util.js');
const jsonutil = require('./playground/json.js');
const yargs = require('yargs');

const _ = require('lodash');

hello('ss','ss');

function hello(a , b){

    console.log(a,b);
}
/*

fs.appendFile("newfile.txt", "data goes here for file ", function error (err) {

  if (err) {

    console.log("Error creating file...");
  }

});

const user = os.userInfo();

//remember template is in withing  `  not single quotes...

console.log(`hello ${user.username}`);

util.addnotes(1, 3);

util.addnotes1();

var rest = _.isString(2342342);
console.log(rest);



//get args from console

const data = process.argv[2];

console.log(data);

if (data === 'add') {

  console.log('add');
}

const argv = require('yargs')

console.log(argv.argv);

util.substring(argv.argv.add,argv.argv.body);

console.log(jsonutil.data());

*/