// load dependencies
require("./code/load")("code/ancestry.js",
	"code/chapter/05_higher_order.js", "code/intro.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
// begin example code
var min = ancestry[0];
for (var i = 1; i < ancestry.length; i++) {
	var cur = ancestry[i];
	if (cur.born < min.born)
		min = cur;
}

console.log(min);

function average(array) {
	function plus(a, b) {
		return a + b;
	}
	return array.reduce(plus) / array.length;
}

function age(p) {
	return p.died - p.born;
}

function male(p) {
	return p.sex == "m";
}

function female(p) {
	return p.sex == "f";
}

console.log(average(ancestry.filter(male).map(age)));

console.log(average(ancestry.filter(female).map(age)));
