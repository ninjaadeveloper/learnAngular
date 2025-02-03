"use strict";
// console.log("Hello from TS")
Object.defineProperty(exports, "__esModule", { value: true });
var myname = "Touqeer"; //implicit typing
// myname = 15; //cause an error
// console.log(myname);
var username = "hamza"; //explicit typing
var userage = 19;
var usergender = true;
//any datatype
var dontnow;
dontnow = "Hamza"; //string
dontnow = 15; //number
dontnow = true; //boolean
function printName() {
    return "Hello from TS function return type : string";
}
var result = printName();
// console.log(result);
function greetings(welcome) {
    return "Good Morning : " + welcome.toUpperCase();
}
// console.log(greetings("Touqeer"));
console.log(greetings("Aliyan"));
var students = ["Aliyan", "Osama", "Ahad"];
function getSudent(student) {
    return "\n        Student name is ".concat(student.stdname, ",\n        Student age is ").concat(student.age, " and\n        the gender is ").concat(student.gender, ".\n        ");
}
var Mudassir = {
    stdname: "Mudassir",
    age: 22,
    gender: true,
};
console.log(getSudent(Mudassir));
;
