function wrapValue(n) { //declares a function called wrapValue that takes n as an argument
  var localVariable = n; //declares a variable local to the function that takes the n arguement as it's value
  return function() { return localVariable; }; // the wrapValue function returns an anonymous function which in itself returns the variable localVariable which is above it in lexical scope
}

var wrap1 = wrapValue(1); // declares a variable which calls the wrapValue function with 1 as the value of argument n
var wrap2 = wrapValue(2); // declares a variable which calls the wrapValue function with 2 as the value of argument n
console.log(wrap1());
console.log(wrap2());

// so, i think the thing that is unique here is that the variable localVariable is that each call to the anonymous nested function is recreating localVariable with a different value, so it remains accessible to the outer world, but in discrete calls
