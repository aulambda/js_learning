function deepEqual(a, b) {
	var aProps = [];
	var bProps = [];
	var result = false;
	if (a == b)
		return true;
	else if (a == null || b == null || typeof a !== 'object' || typeof b !==
		'object')
		return false;
	else
		for (var prop in a) {
			aProps.push(a[prop]);
		}
	for (prop in b) {
		bProps.push(b[prop]);
	}
	return aProps.toString() == bProps.toString();

}

var nine = {
	hi: 3,
	bye: 3
};
var ten = {
	hi: 3,
	bye: 3
};
var eleven = {
	hi: 3,
	bye: 4
};
var twelve = null;
var six = 6;
var seven = 6;

console.log(deepEqual(nine, {
	hi: 3,
	bye: 3
}));
