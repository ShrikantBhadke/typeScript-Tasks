let cl = console.log;

type OperationFun = (n1: number, n2: number) => number;

function add(n1: number, n2: number): number {
  return n1 + n2;
}

const sub = (n1: number, n2: number): number => n1 - n2;
const multi = (n1: number, n2: number): number => n1 * n2;
const divi = (n1: number, n2: number): number => n1 / n2;

const calc = (n1: number, n2: number, cb: OperationFun) => cb(n1, n2);


let r1 = calc(12, 45, sub);
cl(r1)

// add1 = (str: string) => str;

// let r = add1("hallo");
// cl(r)

type combine = string | number

function combine(n1: combine, n2: combine): combine {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return n1.toString() + n2.toString()
  }
}

let r = combine("hallo", " world")

cl(r)


//class creat

class Department {
  dname: string;
  dId: string;
  private empArray: string[] = []
  constructor(departmentName: string, id: string) {
    this.dname = departmentName;
    this.dId = id;
  }
  describe() {
    cl(`this is a department ${this.dname} and id is ${this.dId}`)
  }
  addEmp(emp: string) {
    this.empArray.push(emp)
  }
  printnoOfemp() {
    cl(`number of emp are ${this.empArray.length}`)
  }
}

let accounting = new Department("accounting", "D-125");
accounting.addEmp("jhon Doe")
accounting.addEmp("Hallo")
// accounting.empArray[1] = "meya doe" // public
cl(accounting)
accounting.printnoOfemp();
// cl(accounting.dname)
// cl(accounting.dId)

// accounting.describe();

// let newAccounting: Department = {
//   describe: accounting.describe,
//   dname: "new accounting",
//   dId: "D-140"
// }

// newAccounting.describe();// undefine