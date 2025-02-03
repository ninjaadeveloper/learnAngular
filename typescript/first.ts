// console.log("Hello from TS")

let myname = "Touqeer"; //implicit typing
// myname = 15; //cause an error
// console.log(myname);

let username: string = "hamza"; //explicit typing
let userage: number = 19;
let usergender: boolean = true;

//any datatype

let dontnow: any;
dontnow = "Hamza"; //string
dontnow = 15; //number
dontnow = true; //boolean


function printName(): string {
    return "Hello from TS function return type : string";
}

let result = printName();

// console.log(result);

function greetings(welcome: string): string {
    return "Good Morning : " + welcome.toUpperCase();
}

// console.log(greetings("Touqeer"));
console.log(greetings("Aliyan"));

let students: string[] = ["Aliyan", "Osama", "Ahad"];

// students.forEach(stdname => {
//     console.log(stdname);
// })

type studentType = {
    stdname: string,
    age?: number,
    gender: boolean
}

function getSudent(student : studentType){
        return `
        Student name is ${student.stdname},
        Student age is ${student.age} and
        the gender is ${student.gender}.
        `;
}

let Mudassir : studentType = {
    stdname : "Mudassir",
    // age : 22,
    gender :true,
}

console.log(getSudent(Mudassir));
;

// getSudent();

export { }