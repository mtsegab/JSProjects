This part helps to better 
understand DOM manipulation....how to access and change values.

1. DOM manipulation
2. EvenListners
3. Changing style property


TODO outline:
set out the conditions. 
null > win > too high > too low

const = you can only initialize. Use var if you want to change

************
you can define function with our without a 'variable' handle

function addDecl(a,b) { return a + b;} --> function declaration
const addExpr = function(a,b) {return a + b}
const addArrow = (a,b) => a + b;

Good practice is to declare all the variables and function before usage.

var --> create property at the window (global) level.
We can not change const --> for premitive data types. For const JS
objects what you store in the stack is the obj Heap memory address. that
means you can technically change properties of the JS object.
**********

this keyword
this -> points to the owner of the function. and only assigned when the function
is actually called.

Method -> this = <Object that is calling the method> (meaning the obj which is the owner of the method)
Simple function call this = undefined
Arrow functions this = <this of surrounding function (lexical this)> (pr the window if called on the openspace)
Event Listner this = <DOM element that the handler is attached to>


*********
Stack Memory: Execution trace: where premitive types are stored.
              We also store the address for the 
Heap Memory: where JS Objects are stored

*********
Prototypal Inheritance
Event Loop
How the DOM Really Works

Object.assign() Vs DeepCopy.

NB: to add elt in an array --> jessicaCopy.family.push('Mary')..where family being an array.

Section 9: Data structures, Modern Operators and Strings
- Destructuring Arrays: switching vairables --> [main,secondary] = [secondary, main]
- Destructuring Objects:(very important) use exact property names for the variables
    const { fri: {open, close}} = openingHours;
    console.log(open, close);
    
- The Spread Operators(...)
    const newArr = [1,2, ...arr] ===> helps to extract elts from an array
    Use it only when you would have created comma separated values

    Iterables: are arrays, strings, maps, sets but not objects.
    `${}` ==> is called template literals
    Recap the prompt function
    the spread operator is actually a deep copy/deep clone when used for object copying


- Rest Pattern and Parameters
    for variables:
        const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, 
                                                ...restaurant.starterMenu];
    Rest: in action 
    const add = function (...numbers){ // ==> typically when you donot want to limit the #inputs
        //Rest param helps to collect everything in a single array
        let sun = 0;
        for (let i = 0; i< numbers.length; i++) sum += numbers[i]
    };
    here the ...numbers parameter(at the function definition) is to pack the spread numbers into an array
    whereas the add(...x); for const x = [23, ,5, 7] is spreading the array

    spread vs rest:
    spread ==> otherwise use VALUES separated by comma ==> that could have been explicity as comma separated values
    rest ==> otherwise use VARIABLE names separated by comma ==> technically params
- Looping Arrays: The for-of Loop
    const properties = Object.keys(openingHours);
    const values = Object.values(openingHours);
    const entries = Object.entries(openingHours);
    
    Another Example:
    for (const [key, {open, close}] of entries){
        console.log(`On ${key} we open at ${open}) and close at ${close}`);
    }

- Enhanced Object Literals
    obj literals
    also optional chaining
- Maps: Fundamentals
- Which data Structure to Use?


NB: Arrays are objects....saved in the heap.

**************
More About Functions
**************

 Passing by refrence Vs Passing by value:
 We do not pass by reference in JS but we can pass the reference of the obj to a function.


First Class and Higher Order functions
First class Functions are first class citizens => they are just another "type" of objects
(These are just concepts)

Higher Order Functions - A function that receives another function as an arguement, 
that returns a new function or both.

***
Closure: function returning another function
in a regular function call 'this' key word returns 'undefined'. There has to been
an obj owning the method with the 'this' key word.

How can you do that?
call - 
apply - same as call but only allows to pass 1 array after the obj name
bind - returns a new function with a 'this' referring to the object binded

'this' key word is set dynamically! So always check who is calling it, who actually own it.

***
Example: 
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
>> this is because lufthansa.buyPlane only grabs the function with the dynamic 'this'
inside it and we have to manually define to which object we specifically want to bind to.
If not then it will be bound to the mth/obj calling the addEventListener (i.e the button obj)

creating a more specific function from a more general >> using bind


Section 11:
Working with Arrays --> 105 min 
Numbers, Dates, Intl and Timers --> 43 min
Advanced DOM --> 115

Section 11:
arr.slice(indext)
arr.slice(-1) --> is the last elt of the array --> returns a new array
splice = a mutating slice
arr.reverse --> this mutates
arr.concat(arr2) == [...arr, ...arr2] 
arr.join('-')
arr.at(index) --> very intuitive


NB: Always check mdn documentation

ForEach Vs for loop
continue and break doesnt work

_variable -> a throw away variable

map -> doesnt mutate. creates a new array. Applies an operation on all original array elements
filter -> returns a new array fr elts filtered against a condition
reduce -> reduces all array elts down to a single value

forEach Vs map --> forEach has got a side effect. It mutates.

Functional Programming --> Very important

reducer ex:
const balance = movements.reduce(function(acc, cur, i, arr){
    return acc + cur;
}, 0)// the second param is the initial value we want to set for the acc

The whole idea of using a reducer is when we expect one single value at the end of the operation.
Reducer is the MVP -> by far the most powerful method

JS has got find method
const account = accounts.find(acc => acc.owner === 'John DOoe')
find is when we want a result based of one unique search criterion

findIndex == find but the index instead of the value

******
Asynchronous
//To differ execution for some definate time 
setTimeout((ingredient1, ingredient2) => console.log(`printing ${ingredient1} and ${ingredient2}`), 
3000, ...ingredients)

//To execute every some time
setInterval(function(){
    const now = new Date();
    console.log(now);
}, 1000)

const min = String(Math.trunc(time/60)).padStart(2,0); //whats pad start doing?
Ex: 
'abc'.padStart(10); // " abc"
'abc'.padStart(10, "foo"); // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"

clearInterval(*pass the timers var name) == clearTimeout == break

TODO: #181. Implementing a Countdown Timer
The above is a must be done!!!

Section
OOP

1. Abstraction
2. Encapsulation --> private fields
3. Inheritance
4. Polymorphism

State -->refers to the data of the object

Unlike classical OOP we create objects from a function (constructor function) not from a class.

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}; // this approches save the duplication for each instance had you created this method inside the constructor function

jonas.__proto__ === Person.prototype;
jonas.hasOwnProperty('firstName');

{} --> to create object literals ==> empty objects

TODO: check #92
TODO: Finish everything in OOO starting from 212
(weekend goal)
TODO: Mapty is a must to do project. It covers all the necessary details
regarding functions and OOO.

Section :
Asynchronous Programming:

AJAX : Asynchronous JS And XML --> basically to communicate with remote web servers.
JSON : JS Object Notation --> it is the String format of an obj (JS object)

To give the call backs sequence then what you do is to put the second callback function inside the first.
And this actually gives a callback hell. 

Remedy: Promises --> after ES6
EX: fetch --> is a promise 
A place holder for a future value

Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping
call back hells. --> flat chain of promises
Summary: Avoid calling a callback inside another callback

Handling/catching unfullfilled/rejected promises. One catch at the end of the chain is enough.


lesson: #257, 258, 259, 262 - 266

MicroTasks Queue --> for Promises. 
It has a priority over Callback Queues --> I think MicroQueues == Priority Queues
Be careful when working with promises and Timers at the same time. Timers are put in the callback Queue
so it is after all the promises are executed that the timer will get the chance. This explains why setTimeout
is not always guaranteed. You can only be sure that the timedout fun will execute no sooner than the timeout value
but could take longer.

Promisifying: Wrapping callback based functions into Promises.

Section: Modern JavaScript Development

Bundling --> Transpiling/Polyfilling (Babel) --> JS Bundle
webpack | parcel
Why modules?
- Compose Software
- Isolate components
- Abstract code
- Organize code
- Reuse code

Modules --> allows you to import and export values --> it works typically like pointer
Modules are imported before execution


ES2022: using Await outside Asynch function. --> it is called Top Level Await
why do we need Await?? it that the same as Promises?...just confused

Good Practice:
Functions --> do only one thing
Do not use more than 3 Parameters
Use arrow functions when possible for readability

OOP:
use ES6 classes
Do not use arrow functions as methods....will prevent you from using 'this' key word.

Avoid Nested classes
Avoid for loops, use array methods instead
Avoid callback-based async APIs

Async Code:
Consume promises with async/await for best readability
Handle erroes and promise rejections
