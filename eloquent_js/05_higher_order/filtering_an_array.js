// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

// begin example code
function filter(array, test) { // 
    var passed = [];
    for (var i = 0; i < array.length; i ++) {
	if (test(array[i]))
	    passed.push(array[i]);
    }
    return passed;
}

console.log(filter(ancestry, function(person) {
    return person.born > 1900 && person.born < 1925;
}));

