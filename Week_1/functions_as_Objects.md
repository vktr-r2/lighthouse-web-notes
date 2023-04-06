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