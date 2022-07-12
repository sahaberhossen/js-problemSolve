"use strict";

//javascript identefire;

//digit 123, we can't use beginning digit of varibale

//valid varibale
let fistName = "assis";
let _secondName = "kobir";
let $_thirdName = "sumon";

var names = "anisul islma"; //var global scope and funtion(){} scope

let name, age, cgpa; //let only {} block scope  reassing posible ,redeclare possible nah
name = "anusl";
age = 13;
cgpa = 2.33;

// console.log(cgpa);

let sumon = "student",
  korim = "general worker",
  rohim = "employee";
// console.log(korim);

const studentDetails = "all students"; //const block scope / redeclare and resign possible nah;

// swap variable;

let js = "javascript";

let python = js;
js = "java";

// console.log(python);

let myName = "javascript";
let myNewName = myName;

// console.log(myNewName);

let num1, num2, result;
(num1 = 10), (num2 = 4), (result = num1 * num2);
// console.log("my multiplation result is" + result);

//swap variable in javascript;

//4 way to swap variable;

let a = 5;
let b = 6;
let temp = a;
a = b;

// console.log("a ==" + a + "temp=" + temp);

let first = "javascript";
let second = "python";

[first, second] = [second, first];
// console.log(first, second);

//destructuring//

let [c, d] = [1, 2, 3];
[c, d] = [d, c];
// console.log(c, d);

// ONly Number allowed
{
  let a = 220;
  let b = 110;
  a = a + b;
  b = a - b;
  a = a - b;
  // console.log(a, b);
}

let s = 32; //100000

let e = 12; //001100     101100
let f = 9 << 2;
console.log(f);
