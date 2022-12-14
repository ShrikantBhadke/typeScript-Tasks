let cl = console.log;


class Department {

  private empArray: string[] = [];
  constructor(public dname: string, protected readonly dId: string) {

  }
  describe() {
    cl(`This is department${this.dname} and id is ${this.dId}.`)
  }
  addEmp(emp: string) {
    // this.dId = "D-562"
    this.empArray.push(emp);
  }
  printNoOfEmp() {
    cl(`No of empl are ${this.empArray.length}`)
  }
}

// let accounting = new Department("accounting", "D-523");

// cl(accounting)
// accounting.describe();
// accounting.addEmp("jhon");
// accounting.printNoOfEmp();
// cl(accounting)

// accounting.dId = "D-523"

class AccountingDepartment extends Department {

  constructor(public dname: string, readonly dId: string, private financeReport: string[]) {
    super(dname, dId);
  }
  addFinanceReport(report: string) {
    this.financeReport.push(report)
  }
  printAllReport() {
    cl(this.financeReport)
  }
}

let accounting = new AccountingDepartment("accounting", "D-243", [])
cl(accounting)
accounting.describe()
accounting.addEmp("Jone Doe");
accounting.printNoOfEmp();
accounting.addFinanceReport("TDS");
cl(accounting)