// load dependencies
require("./05_higher_order/code/load")("code/ancestry.js",
	"code/chapter/05_higher_order.js", "code/intro.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);

// start example code
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
}, 0));

// using the builtin reduce function
console.log(reduce([1,2,3,4], function(a, b) {
    return a + b;
}, 0));
