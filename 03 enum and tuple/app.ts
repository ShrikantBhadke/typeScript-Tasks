
let cl = console.log;


enum Roles { CANDIDATE, HR_ADMIN, SUPER_ADMIN }
// enum Roles { CANDIDATE = "A", HR_ADMIN = "B", SUPER_ADMIN = "C" }


let person = {
  fname: "jon",
  lname: "Doe",
  email: "jd@gmail.com",
  role: Roles.HR_ADMIN
}


if (person.role === 1) {
  cl("redirect to Hr admin dashbord")
}

// function add(n1: number, n2: number): number {
//   return n1 + n2;
//   // return "" + n1 +n2;
// }

function combine(str1, str2): string {
  return `${str1} ${str2}`;
}


function add2(n1: number, n2: number): void {
  cl(n1 + n2)
  // return (n1 + n2);
}


function printobj(): { fname: string, lname: string } {
  return ({
    fname: "shri",
    lname: "bhadke"
  })
}

function add(n1: number, n2: number): number {
  return (n1 + n2);
}

function substraction(n1: number, n2: number): number {
  return (n1 - n2);
}

function mult(n1: number, n2: number): number {
  return (n1 * n2);
}

function divi(n1: number, n2: number): number {
  return (n1 / n2);
}

function calculator(n1: number, n2: number, cb): number {
  return cb(n1, n2);

}