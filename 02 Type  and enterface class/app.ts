// const num1 = document.getElementById("num1")! as HTMLInputElement;
// const num2 = document.getElementById("num2")! as HTMLInputElement;
// const btn = document.getElementById("btn")!;
let cl = console.log;


// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// btn.addEventListener("click", function (eve) {
//   cl(add(+num1.value, +num2.value));
// })


// let x = 10;
// cl(typeof x, x)

// let z: any;

// // x = "hallo "

// interface Ipreson {
//   fname: string;
//   lname: string;
//   contact: number;
//   email: string;
// }

// let person: Ipreson = {
//   fname: "shrikant",
//   lname: "bhadke",
//   contact: 7544815326,
//   email: "shri@gmail.com"
// }

// console.log(person)


// interface Ipreson1 {
//   fname: string;
//   lanme: string;
//   contact: number;
//   skills: string[];
//   earing: number[];
//   data: any[];
// }

// let person: {
//   fname: string,
//   lname: string,
//   contact: number,
//   email: string,
//   skills: string[],
//   nickName?: string
// } = {
//   fname: "shrikant",
//   lname: "bhadke",
//   contact: 45623,
//   email: "shri@gamil.com",
//   skills: ["HTML", "CSS", "Angular"]
// }

type Tparson = {
  fname: string,
  lname: string,
  contact: number,
  email: string,
  skills: string[],
  nickName?: string
  // role: (number | string)[],
  role: [string, number]
}

interface Iperson {
  fname: string,
  lname: string,
  contact: number,
  email: string,
  skills: string[],
  nickName?: string
  // role: (number | string)[],
  role: [string, number]
}

class Person {
  fname: string;
  lname: string;
  contact: number;
  email: string;
  skills: string[];
  nickName?: string;
  getfullname() {
    // ............Person.........Person.......
  }
}
let person: Tparson = {
  fname: "shrikant",
  lname: "bhadke",
  contact: 45623,
  email: "shri@gamil.com",
  skills: ["HTML", "CSS", "Angular"],
  role: ["hallo", 25],
}

cl(person)


function add(num1: number, num2: number, showresult: boolean, phrase: string) {
  if (showresult === true) {
    let result = num1 + num2
    cl(phrase + result)
  } else {
    return num1 + num2;
  }
}


(add(100, 200, true, "The addition of "));


let hobbies: string[] = ["cricket", "codding", "pinting"]


for (let hoby of hobbies) {
  cl(hoby.toUpperCase());
}

// hobbies.push(100); erroe shows