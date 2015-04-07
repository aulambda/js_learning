// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

//begin example code

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"]; // defines a variable consisting of an array with three names

function isInSet(set, person) { //declares a function 'isInSet' that recieves 2 arguments, 'set' and 'person'
    return set.indexOf(person.name) > -1; // checks the set for an entry that has a name value which matches the person variable, returns the index of that entry if it is greater than -1
}
console.log(ancestry.filter(function(person) { // huh?
    return isInSet(theSet, person);
}));
console.log(ancestry.filter(isInSet.bind(null, theSet)));
