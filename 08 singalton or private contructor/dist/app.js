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
class AccountingDepartment extends Department {
    constructor(dId, financeReport) {
        super("accounting", dId);
        this.dId = dId;
        this.financeReport = financeReport;
        this.lastReport = financeReport[financeReport.length - 1];
    }
    static getInstance(id) {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepartment(id, []);
            return this.instance;
        }
    }
    describe() {
        cl(`This is accounting Department ${this.dname} and id is ${this.dId}.`);
    }
    printAllReport() {
        cl(this.financeReport);
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
cl(AccountingDepartment.getInstance("D-568"));
cl(AccountingDepartment.getInstance("D-754"));
//# sourceMappingURL=app.js.map