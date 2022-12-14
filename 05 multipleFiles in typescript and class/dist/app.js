"use strict";
let cl = console.log;
function add(n1, n2) {
    return n1 + n2;
}
const sub = (n1, n2) => n1 - n2;
const multi = (n1, n2) => n1 * n2;
const divi = (n1, n2) => n1 / n2;
const calc = (n1, n2, cb) => cb(n1, n2);
let r1 = calc(12, 45, sub);
cl(r1);
function combine(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
let r = combine("hallo", " world");
cl(r);
class Department {
    constructor(departmentName, id) {
        this.empArray = [];
        this.dname = departmentName;
        this.dId = id;
    }
    describe() {
        cl(`this is a department ${this.dname} and id is ${this.dId}`);
    }
    addEmp(emp) {
        this.empArray.push(emp);
    }
    printnoOfemp() {
        cl(`number of emp are ${this.empArray.length}`);
    }
}
let accounting = new Department("accounting", "D-125");
accounting.addEmp("jhon Doe");
accounting.addEmp("Hallo");
cl(accounting);
accounting.printnoOfemp();
//# sourceMappingURL=app.js.map