// load dependencies
require("./05_higher_order/code/load")("code/ancestry.js",
	"code/chapter/05_higher_order.js", "code/intro.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);

// start example code
function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var overNinety = ancestry.filter(function(person) {
    return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
    return person.name;
}));

console.log(overNinety.map(function(person) {
    return person.name;
}));
