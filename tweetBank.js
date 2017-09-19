// This module will be responsible for holding 
// all of the tweets and giving us methods for interacting with them.

const _ = require('lodash'); //Lodash provides a long list of useful JavaScript functions
const data = [{id: 1,name: "hyunjoo", content: ["hello","xifeng is going down"]},{id:2,name: "xifeng", content: ["hyunjoo is da bes","hyunjoo is the winner"]}]; // storing tweets in this data array

function add (name, content,id) {
  data.push({ name: name, content: content, id:id});
}
function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}
module.exports = { add: add, list: list, find: find };

console.log(data);