/* Using the example data set from this chapter, compute the average age difference between
 * mothers and children (the age of the mother when the child is born). You can use the 'average'
 * function defined earlier in this chapter.
 *
 * Note that not all the mothers mentioned in the data are themselves present in the array. The
 * 'byName' object, which makes it easy to find a person's object from their name, might be helpful
 * here.
 *
 * Hint: Because not all elements in the 'ancestry' array produce useful data (we can't compute the
 * age difference unless we know the birth date of the mother), we will have to apply 'filter' in
 * some manner before calling 'average'. You could do it as a first pass, by defining a
 * hasKnownMother function and filtering on that first. Alternatively, you could start by calling
 * 'map' and in your mappying function return either the age difference or 'null' if no mother is
 * known. Then, you can call 'filter' to remove the 'null' elements before passing the array to
 * average.
 */

// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

// begin exercise code
var averageDifference = ancestry.filter(function(person) {
  return byName[person.mother] !== null;
}).map(function(person) {
  return byName[person.mother].born - person.born;
});
console.log(average(averageDifference));
