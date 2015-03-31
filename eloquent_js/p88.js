// load dependencies
require("./05_higher_order/code/load")("code/ancestry.js",
	"code/chapter/05_higher_order.js", "code/intro.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);


function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

console.log(filter(ancestry, function (person) {
	return person.born > 1900 && person.born < 1925;
}));

console.log(ancestry.filter(function (person) {
	return person.father == "Carel Haverbeke";

}));
