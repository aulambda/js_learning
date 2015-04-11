/* Arrays also come with the standard methods 'every' and 'some'. Both take a predicate function
 * that, when called with an array element as argument, returns true or false. Just like && returns
 * true only when the expression on both sides are true, 'every' returns true only when the
 * predicate returns true for all elements of the array. Similarly, 'some' returns true as soon as
 * the predicate returns true for any of the elements. They do not proces more elements than
 * neccesary-- for example, if 'some' finds that the predicate holds from the first element of the
 * array, it will not look at the values after that. 
 *
 * Write two functions, 'every' and 'some' that behave like these methods, except that they take the
 * array as their first argument rather than being a method.
 *
 * Hint: The functions can follow a similar pattern to the defintion of 'forEach' at the beginning
 * of the chapter, excep that they must return immediately (with the right value) when the predicate
 * function returns 'false' or 'true'. Don't forget to put another return statement after the loop
 * so that the function also returns the correct value when it reaches the end of the array.
 */
// Load dependencies:
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

// Exercise
var testArray1 = ["cat", "cat", "cat", "dog"], 
    testArray2 = ["feline", "feline", "feline"];
function some(array, test) {
  var result = 0;
  for (i = 0; i < array.length; i ++) {
    if (test(array[i]) === true)
      return result = true; 
  }
  return result;
}

function every(array, test) {
  var result = [];
  for (i = 0; array.length; i++) {
    if (test(array[i]) === false)
      result.push(false);
    else if (test(array[i]) === true)
      result.push(true);
  i}
  return result;
}

console.log(every(testArray1, function(index) {
  var indexValue = index == "cat";
  return indexValue;
}));


console.log(some(testArray1, function(index){
  var indexValue = index == "cat";
  return indexValue;
}));

