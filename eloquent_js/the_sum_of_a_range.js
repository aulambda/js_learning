function range(start, end) {
    var rangeArray = [];
    for (start; start <= end; start++) {
        rangeArray.push(start);

    }

return rangeArray;
}

function sum(array) {
    var result = 0;
    for (i = 0; i <= array.length; i =+ 1) {
        result += array.shift();
    }
    return result;
}

console.log(range(1, 10));
console.log(sum(range(1,10)));

function rangeExt(start, end, step) {
    var rangeArray = [];
    if (arguments.length !== 3) {
        for (start; start <= end; start += 1) {
            rangeArray.push(start);
        }
    }
    else if (step > 0) {
        for (start; start <= end; start += step) {
            rangeArray.push(start);
        }
    }
    else if (step < 0) {
        for (start; start >= end; start -= 1) {
            rangeArray.push(start);
        }
    }

return rangeArray;
}
console.log(rangeExt(1, 10, 2));
console.log(rangeExt(5, 2, -1));
