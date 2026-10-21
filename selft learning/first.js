// keywprd let
let a=10, b=5;

let sum = a + b;
let sub = a - b;
let mul= a * b;

console.log("Total sum =" + sum);
console.log("Total of sub = " + sub);
console.log("Total of mul = " + mul);

let d = 10;
d=100;
// d jab yk domlai jong krouy
console.log(d)

// keyword var
var c = 10;
console.log(c)

//keyword const , const can't pdo domlai

const PI = 3.14;
console.log("PI = " + PI);

//Data Type: string, Number, BigIt, Boolean, underfined, null, 

let String = "Hello World";
let num1 = 42, num2 = 12;
let BigInt = 397589292437n;
let x = true;
let z;
const sym = Symbol('symbol');
const person = {
    name : "John",
    Age : 20,
};

console.log(String);
console.log(num1 + num2);
console.log(BigInt);
console.log(x);
console.log(z);
console.log(sym);
console.log(person);


//Object

const person1 = {
    //key: value
    name : "love",
    Age : 12,
};

console.log(person1);
console.log(person.name);
console.log("I'm " + person.Age + " Year old.");

//Exercise Object
let student = {
    name : "Vina",
    age: 20,
    address: {
        street: " 123 Main St ",
        city: " Phnom Penh ",
        state: " CA ",
        zip: " 12345 ",
    },
};

console.log(student);
// Accessign Objext Properties
console.log("Student name: " + student.name);
console.log("Student age: " + student.age);
console.log("Student address: " + student.address.street + ", " + student.address.city + ", " + student.address.state + ", " + student.address.zip,
);

//JavaScript Operator
// Arithmetic, Assignment, Comparisons, Conditional Operators

//1. Arithemetic Operator: +, *, /, %

let e = 15;
let o = 3;

let addition = e + o;
let subtraction = e - o;
let multiply = e * o;
let devide = e / o;
let modulus = e % o;

console.log("1. Addition : " + addition );
console.log("1. Subtraction : " + subtraction );
console.log("1. Multiply : " + multiply);
console.log("1. devide : " + devide);
console.log("1. modulus : " + modulus );

// 3. Comparison ==, ===, !=, !==, >, < >=,<=

// Exercise: Student Information
let studentName = "Keonho";
let score = 79;
let passmark = 50;

//Check

console.log(score == 80);
console.log(score )

