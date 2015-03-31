function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

var numbers = [1, 2, 5, 4, 5], sum = 0;
forEach(numbers, function (number) {
	sum += number;
});
console.log(sum);


function repeatMe(who, repeat) {
    for (var i = 0; i < who.length; i++)
        repeat(who[i]);
}

var names = ["Cathy", "Lynn", "drew", "Raphael"], iffy = "";

repeatMe(names, function(name) {
    iffy = iffy + name;
});

console.log(iffy);
