# js_learning
This repo contains all my messing around while I am trying to learn JS
# Goals
    1. Complete Eloquent Javascript Book
    2. Review Codeschool Sections on JS
    3. Review JS Builtins
    4. Complete Codeschool Sections on Node, express and Ember.
    5. Carryout 2 learning projects using JS, node, express and ember.
    6. Find another book to deepen learning.
    7. Make an open source contribution, maybe to Atom editor.

Each weekday, I will spend 45+ minutes working to learn JS, each weekend, 1.5+ hours.
# Journal
##3.21.15
Worked on a few examples from chapter 3 of eloquent JS and one of the exercises. **Definitely hit 1.5 hour goal.**
##3.22.15
Learning: Don't worry about efficiency until you are sure the program is too slow.
Learning: What makes closures special is they allow pre-programmed versions of existing functions to be called with different values. They help you create multiple versions of existing functions really.
Learning: Functions can call other functions that are declared in the global scope.

Completed all the exercises from chapter 3 and started on chapter 4. Got to page 67 while working a precision grind. Starting to learn about objects and how to calculate correlation. May come back to this tonight. **A few Hours**

##3.23.15
Completed **over 45 minutes** of work today. Worked on chapter 4 of Eloquent Javascript.  Definitely struggling to understand everything we did with objects and arrays. Got a bit nervous because of the correlation formula, should return to this chapter and these concepts. Got to page 74, section "The arguments object".
Later, I finished the chapter 4 reading and completed the first exercise on page 78, "The sum of a range"

## 3.24.15
I'm working on the other exercises at the end of eloquent javascript and I clearly need more practice with arrays. Also, i need to annotate my code more. **Got an hour and a half or so in**

## 3.25.15
*the name used in a for in loop (ie, for (var name in object) is a new variable declared in the calling of the loop to stand for the properties of the object*
**Spent a few hours** working on the last exercise from Chapter 4. Eventually figured it out, used stackoverflow, MDN and the hints in Eloquent Javascript. I did end up looking at the answer, but was able to do it a different way, the way I had wanted too before. I should look at how operators work a bit more, the `typeof` operator threw me off a bunch. I should also explore how callbacks work. Got to page 83
## 3.28.15
*I finally get the thing going on in page 83 of eloquent javascript*
```javascript
 function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
 }

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
    sum += number;
});
```
the parameter in the function being called as a parameter of 'forEach' is really just a nickname for `array[i]` because the function is replacing the action parameter that gets called with `array[i]` as it's parameter. That was confusing, but I think i get it!
## 3.31.15
Spent **2.5 hours** working on eloquent javascript today. Finished reading chapter five. I struggled with understanding the paramter/function situation in the last example even though I had understood it earlier on. Next time I code I need to finish inputting all of the examples into .js files and annotating them so that I understand the concepts in the chapter before going on to the exercises. May miss studying tomorrow.

## 4.3.15
Spent **25 Minutes** annotating the first section of chapter 5. Using vim now, since I am finding the gui environment of atom easier to be distracted in, and it seems a better investment to get really comfortable in vim than just learning the usefull keybindings for the vim-mode in atom. Also, vim with airline and solarized theme is prettier and more minimal than atom anyways. Need to figure out tmux to make testing code jsut as easy as it was with cmd-i in atom.
