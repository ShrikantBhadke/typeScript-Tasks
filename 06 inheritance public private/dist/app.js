"use strict";
let cl = console.log;
class Department {
    constructor(dname, dId) {
        this.dname = dname;
        this.dId = dId;
        this.empArray = [];
    }
    describe() {
        cl(`This is department${this.dname} and id is ${this.dId}.`);
    }
    addEmp(emp) {
        this.empArray.push(emp);
    }
    printNoOfEmp() {
        cl(`No of empl are ${this.empArray.length}`);
    }
}
class AccountingDepartment extends Department {
    constructor(dname, dId, financeReport) {
        super(dname, dId);
        this.dname = dname;
        this.dId = dId;
        this.financeReport = financeReport;
    }
    addFinanceReport(report) {
        this.financeReport.push(report);
    }
    printAllReport() {
        cl(this.financeReport);
    }
}
let accounting = new AccountingDepartment("accounting", "D-243", []);
cl(accounting);
accounting.describe();
accounting.addEmp("Jone Doe");
accounting.printNoOfEmp();
accounting.addFinanceReport("TDS");
cl(accounting);
//# sourceMappingURL=app.js.map