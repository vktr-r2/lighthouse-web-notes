# JavaScript Functions as Objects

One of the distinctive things about JavaScript is that functions are first-class objects.

This means two important things:

* Functions can be stored in variables and passed around
* Functions can do everything that other objects can do (like having properties assigned to them)
Check this out:

```
const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);
```


So what is going on, and why is it special?

We assign a function to our variable myFn
An attribute someAttribute is assigned to that function object
A runner function is defined that runs the argument f that we pass it
We pass a reference to our myFn, which gets invoked by the runner function
As we continue with the course, we will be using this ability of JavaScript (and many other languages) to achieve many different goals.

So, in summary, the code is demonstrating a few different concepts in JavaScript, including:

The ability to add properties to function objects
The fact that functions are first-class objects in JavaScript, and can be passed around as arguments to other functions
The fact that functions can be executed by calling them as functions, even when they have additional properties or methods attached to them.


### In what case would you ever have to add and store a property to a function?

In JavaScript, functions are first-class objects and can be used to store and manipulate data just like any other object. This means that there are a few cases where you might want to add and store a property to a function:

Caching data: If a function performs a computationally expensive operation and returns a result, you might want to cache the result so that it can be reused later without having to recompute it. You can store the cached result as a property of the function.

Counting function calls: If you want to keep track of how many times a function has been called, you can add a counter property to the function and increment it each time the function is called.

Storing metadata: If you want to associate additional data with a function, you can store it as a property of the function. For example, you might want to store information about the author or date of creation of the function.

Passing data between functions: If you need to pass data between two functions and don't want to use global variables or closures, you can store the data as a property of a function and pass the function as an argument to the second function.

However, it's worth noting that adding properties to functions should generally be used sparingly and with caution. It can make the code harder to understand and maintain, and can also lead to unexpected behavior if the same function object is reused in different contexts. It's generally better to keep functions focused on a single responsibility and use other mechanisms (such as closures or separate objects) to manage additional data or state.




## Callback Functions

The most notable usage of having functions as values in JavaScript is a callback function.

A callback function:

Is a function passed (by reference) into another function (let's call that one the "receiver" function)

The receiver function is therefore accepting behavior to perform by calling the callback function that it now has access to
The receiver function can decide to call the callback function at any time, as many times as it wants

Let's look at an example:

```
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
```


This code illustrates how a function can be treated as an ordinary value and passed around to another function. We pass a reference to the function named actionWhenFound as an argument to another function findWaldo.

The function actionWhenFound is known as a callback function. It is first defined, then passed as an argument to another function, and finally executed once a specific event occurs.


### LETS BREAK IT DOWN FURTHER

This code defines a function findWaldo that takes two parameters: names and found. names is an array of names and found is a function that will be called when the name "Waldo" is found in the names array.

```
const findWaldo = function(names, found) {
```

The function uses a for loop to iterate over the names array.

```
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
```

If the current name in the loop is equal to the string "Waldo", then the found function is called.

```
    if (name === "Waldo") {
      found();   // execute callback
    }
```

The code then defines another function actionWhenFound that simply logs the message "Found him!" to the console.

```
const actionWhenFound = function() {
  console.log("Found him!");
}
```

Finally, the findWaldo function is called with an array of names and the actionWhenFound function as the found parameter. This means that when "Waldo" is found in the names array, the actionWhenFound function will be called and "Found him!" will be logged to the console.


```
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
```

```
//ORIGINAL IMPLEMENTATIONS//
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

const findWaldo = (names, found) => {
  names.forEach((name, canCallThisAnythingAndItWillAlwaysBeINDEX) => {
    if (name === "Waldo") {
      found(canCallThisAnythingAndItWillAlwaysBeINDEX);
  }})
}
;

const actionWhenFound = function(index) {
  console.log(`Found him at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// //INTERNAL NOTES//
// - Switched findWaldo to be a arrow function.  Still takes names array and found funciton as arguements
// - On the names array I call forEach method.  
//For each MUST have a callback function passed.  This function can take the following parameters/arguements: the current element in array will ALWAYS be first, index of that element in the array will ALWAYS be second, and the full array itself can be passed as a third arguement.
//This strict rule for forEach method is how my function above knew that the "index" argument passed second MUST reference the current index of the element we're working with.  I could have called that thing "cat" or "array" even and it would always pass me the index value for the element where we found Waldo

//FURTHER CURIOUSITY//
// So can forEach only work with those 3 arguements? (element, index, array) ??
// NO!! forEach can take as many arguments as you need, just like any function BUT those additional arguments MUST be the fourth arguement (or greater than 4th), otherwise the callback function will automatically assume you're looking to work with index or array.


//Damn it took a while but I got there eventually.

```



## Anonymous Functions

Functions do not need to be named, or even assigned to a variable. These are known as anonymous functions

The code example in the previous Functions As Objects exercise illustrated a (slightly oversimplified) case where a result is passed from one function (findWaldo) to a callback function.

Often a callback function would not be declared or assigned to a variable, but rather would be inline like this:

```
const findWaldo = (names, found) => {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);
    }
  });
}
;

// MORE ADVANCED IMPLEMENTATION
findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index) => 
  console.log(`Waldo is located at: ${index}!`));
```


We can notice here that the callback function defined "inline" here (function(result) { ... }) is not named, nor assigned to a variable. It exists only as an anonymous function, which is invoked by the function it gets passed into – in this example findWaldo.

Again, this may seem like a trivial nuance right now, but anonymous callback functions will be the topic of many lessons in the future. Most people find it confusing at first, so don't feel discouraged.



## ARROW FUNCTIONS

Arrow functions provide a new syntax for declaring anonymous functions, as show below.

```
// BEFORE: anonymous callback as function expression 
[1,2,3].forEach(function (num) {
  console.log('num: ', num);
});

// AFTER: anonymous callback as arrow function
[1,2,3].forEach((num) => {
  console.log('num: ', num);
});
```

In fact, for one liners JS allows us to further remove some characters:

```
[1,2,3].forEach(num => console.log('num: ', num));
```


### Caveat Regarding "this"

There's more to arrow functions than just the syntax difference, but that's a complicated subject. For now here's the simple explanation:

*Arrow functions don't get assigned a value for this (in the way that traditional function expressions do). It is therefore less common to come across arrow functions which make reference to this.*


#### Break it down further ####

In JavaScript, the value of the this keyword is determined by how a function is called. Traditionally, when you define a function using the function keyword, the value of this is determined by the context in which the function is called. For example:

```
const obj = {
  name: 'Alice',
  sayName: function() {
    console.log(this.name);
  }
};

obj.sayName(); // Output: "Alice"
```

In this example, the sayName function is defined as a method of the obj object. When the method is called using the dot notation (obj.sayName()), the value of this is set to the obj object.

However, with arrow functions, the value of this is not determined by how the function is called, but rather by where the function is defined. This means that arrow functions do not have their own this context, and instead inherit this from the enclosing lexical scope. For example:

```
const obj = {
  name: 'Alice',
  sayName: () => {
    console.log(this.name);
  }
};

obj.sayName(); // Output: undefined
```

In this example, the sayName function is defined as an arrow function. When the method is called using the dot notation (obj.sayName()), the value of this inside the arrow function is not set to the obj object, but rather inherits this from the enclosing lexical scope (which in this case is the global scope). Since this.name is undefined in the global scope, the output is undefined.

Because of this behavior, it is less common to come across arrow functions which make reference to this. However, arrow functions can still be useful in many cases, particularly when writing concise, functional-style code.





## Higher-Order Functions

Functions that take in callbacks are referred to as Higher Order Functions.

Actually, we can define them more accurately.

Higher-Order functions are any functions which operate on other functions.

This includes, but is not limited to, functions which take in functions (callbacks) as arguments.

This means that built-in functions such as forEach, filter, and others can be called "Higher-Order Functions".

Having functions available to us as values allows us to pass them around. In programming languages like JS which support this, we are able to create higher-order functions. This is a major part of Functional Programming. Functional Programming has various other aspects that we're not going to touch formally quite yet.




## USING MAP

### Array.prototype.map in Docs

In a later activity we will build our very own version of this function, so it will help to use it first.

The map function already exists in JavaScript. Let's play with the built-in version so that we can get acquainted it.

