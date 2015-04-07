function noisy(f) { // declares a function called noisy that takes one parameter, 'f'. based on the contents of noisy we can tell that f needs to be a function.
    return function(arg) { // noisy returns an anonymous function which takes one paremeter 'arg'
        console.log("calling with", arg); // logs a string and the parameter arg
        var val = f(arg); // sets a variable equal to the value of the function passed in as 'f' when called with the arg parameter
        console.log("called with", arg, "- got", val); // logs a string, the arg parameter, anothe string and the val variable
        return val; // returns the value of the val variable
    };
}

function transparentWrapping(f) { // declares a function that takes one parameter 'f' which should be a function itself
    return function() { // returns an anonymous function
        return f.apply(null, arguments); 
    };
}

