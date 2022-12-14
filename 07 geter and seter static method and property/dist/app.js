"use strict";
let cl = console.log;
class Department {
    constructor(dname, dId) {
        this.dname = dname;
        this.dId = dId;
        this.empArray = [];
    }
    addEmp(emp) {
        this.empArray.push(emp);
    }
    printNoOfEmp() {
        cl(`No of empl are ${this.empArray.length}`);
    }
    static creatEmp(empName) {
        return { name: empName };
    }
}
Department.startDate = 12456464;
class ItDepartment extends Department {
    constructor(dId) {
        super("it", dId);
        this.dId = dId;
    }
    describe() {
        cl(`This is it Department ${this.dname} and id is ${this.dId}.`);
    }
}
let it1 = new ItDepartment("d-568");
it1.describe();
class AccountingDepartment extends Department {
    constructor(dId, financeReport) {
        super("accounting", dId);
        this.dId = dId;
        this.financeReport = financeReport;
        this.lastReport = financeReport[financeReport.length - 1];
    }
    describe() {
        cl(`This is accounting Department ${this.dname} and id is ${this.dId}.`);
    }
    printAllReport() {
        cl(this.financeReport);
    }
    get accessLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No report is Prasent");
        }
    }
    set accessLastReport(val) {
        if (!val) {
            throw new Error("Please provide proper Value");
        }
        else {
            this.financeReport[this.financeReport.length - 1] = val;
            this.lastReport = val;
        }
    }
    addFinanceReport(report) {
        this.financeReport.push(report);
    }
    addEmp(emp) {
        if (emp === "shri") {
            return;
        }
        else {
            this.empArray.push(emp);
        }
    }
}
let accounting = new AccountingDepartment("D-243", ["form-16"]);
cl(accounting);
accounting.describe();
accounting.addEmp("Jone Doe");
accounting.addEmp("shri");
accounting.printNoOfEmp();
accounting.addFinanceReport("TDS");
accounting.addFinanceReport("dsjhf");
accounting.addFinanceReport("sdbjks");
cl(accounting);
cl(accounting.accessLastReport);
cl(AccountingDepartment.creatEmp("shree"));
cl(Department.startDate);
cl(AccountingDepartment.startDate);
//# sourceMappingURL=app.js.map