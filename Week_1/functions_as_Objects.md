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

