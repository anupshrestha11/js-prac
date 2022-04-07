// nested function scope
/*
let a = 10

function outer() {
    let b = 20

    function inner(){
        let c = 30
        console.log(a, b, c)
    }

    inner()
}

outer()
*/

// closure
/*
function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
     return inner
}

const fn = outer()
fn();
fn();
*/

// Funtion Currying
/*
function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
       return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));
*/

// Prototype inheritence
/*
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// const person1 = new Person("John", "Doe");
// const person2 = new Person("Bruce", "Wayne");

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// ----Prototype inheritance 
function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Figting Crime");
};

SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero("Bruce", "Wayne");
*/

//class - classes.js

// Iterables and Iterators
/*
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Anup", done: false };
        } else if (step === 2) {
          return { value: "John", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};



for (const word of obj) {
  console.log(word)
}


for (const ch of "Anup") {
  console.log(ch)
}
*/

// Generators

function sayHello() {
  return "Hello";
}

function sayWorld() {
  return "World";
}

function* generatorFunction() {
  yield sayHello();
  yield sayWorld();
}

const generatorObject = generatorFunction();
for (const word of generatorObject) {
  console.log(word);
}
