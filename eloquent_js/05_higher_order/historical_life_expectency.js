/* When we looked up all the people in our data set that lived more than 90 years, only the
 * latest generation in the data came out. Lets take a closer look at that phenomenon.
 * Compute and output the average age of the people in the ancestry data set per century. A
 * person is assigned to a century by taking their year of death, dividing it by 100, and
 * rounding it up, as in 'Math.ciel(person.died/100).
 *
 * For bonus points, write a function 'groupBy' that abstracts the grouping operation. It
 * should accept as arguments an array and a function that computers the group for an element
 * in the array and returns an object that maps group names to arrays of group members.
 *
 * Hint: The essence of this example lies in grouping the elements of a collection by some
 * aspect of theirs--splitting the array of ancestors into smaller arrays with the ancestors for
 * each century.
 *
 * During the grouping process, keep an object that asssociates century names(numbers) with
 * arrays of either person objects or ages. Since we do not know in advance what categories we
 * add the person or age to the array for the proper century.
 *
 * Finally a for/in loop can be used to print the average ages for the individual centuries.
 */

// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

// begin exercise code
function averageAgeByCentury(array) {
    var centuries = {};
    array.forEach(function(person) {
                var personCentury = Math.ceil(person.died/100);
                if (centuries[personCentury] === undefined)
                        centuries[personCentury] = [];
                else 
                        centuries[personCentury].push(person.died - person.born);
        }); 
        console.log(centuries);
       for (var century in centuries) {
                if (centuries[century].length >= 2)
                        console.log(century + ": " + average(centuries[century]));
                
                else
                        console.log(century + ": 0");
       }
    console.log(centuries);
}

averageAgeByCentury(ancestry);
