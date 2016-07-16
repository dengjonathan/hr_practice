var $ = require('jquery');
var _ = require('underscore');


var testArr = [1,2,3];
var testObj = {author: 'Shakespeare', year: 1611};

/* SECTION 1: REPLICATE UNDERSCORE UTILITY FUNCTIONS */

// _.each(list, iteratee, [context])

// _.where(array, propertiesObj)

// _.bind(function, object, *arguments)

/* Replicate JQuery chaining functions */


/* SECTION 2: JS CONCEPTS */

// Explain how this works in JavaScript
// Explain how prototypal inheritance works
// Difference between: function Person(){}, var person = Person(), and var person = new Person()?
// What's the difference between .call and .apply?
// What is the difference between == and ===?

/* SECTION 3: Coding questions */

// Question: What is the value of foo?

var foo = 10 + '20';

// Question: How would you make this work?

add(2, 5); // 7
add(2)(5); // 7

// Question: What value is returned from the following statement?

"i'm a lasagna hog".split("").reverse().join("");

// Question: What is the value of window.foo?

( window.foo || ( window.foo = "bar" ));

// Question: What is the outcome of the two alerts below?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

// Question: What is the value of foo.length?

var foo = [];
foo.push(1);
foo.push(2);

// Question: What is the value of foo.x?

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

// Question: What does the following code print?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

//Question: Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?

  for(var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 10);
}

// Other interview q's http://thatjsdude.com/interview/js2.html#bindthis
