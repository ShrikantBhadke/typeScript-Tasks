const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const btn = document.getElementById("btn")!;
let cl = console.log;


function add(num1: number, num2: number) {
  return num1 + num2;
}

btn.addEventListener("click", function (eve) {
  cl(add(+num1.value, +num2.value));
})


let x = 10;
cl(typeof x, x)

let z: any;

// x = "hallo "

interface Ipreson {
  fname: string;
  lname: string;
  contact: number;
  email: string;
}

let person: Ipreson = {
  fname: "shrikant",
  lname: "bhadke",
  contact: 7544815326,
  email: "shri@gmail.com"
}

console.log(person)


interface Ipreson1 {
  fname: string;
  lanme: string;
  contact: number;
  skills: string[];
  earing: number[];
  data: any[];
}