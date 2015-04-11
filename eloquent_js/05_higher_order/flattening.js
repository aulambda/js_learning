/* Use the reduce method in combination with the concat method to 
 * "flatten" an array of arrays into a single array that has all the
 * elements of the input arrays 
 */
var arrayOfArrays = [[1,2], [3,4], [5,6]];

// console.log(arrayOfArrays[1].concat(arrayOfArrays[2]));
console.log(arrayOfArrays.reduce(function(a,b){
        return a.concat(b);
}));
