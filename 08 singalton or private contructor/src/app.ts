let cl = console.log;


abstract class Department {
  static startDate: number = 12456464;
  protected empArray: string[] = [];
  constructor(public dname: string, protected readonly dId: string) {

  }
  // describe():void {
  //   cl(`This is department${this.dname} and id is ${this.dId}.`)
  // }

  abstract describe(): void;
  addEmp(emp: string): void {
    // this.dId = "D-562"
    this.empArray.push(emp);
  }

  printNoOfEmp(): void {
    cl(`No of empl are ${this.empArray.length}`)
  }

  static creatEmp(empName: string) {
    return { name: empName };
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
  private lastReport: string
  static instance: AccountingDepartment;
  private constructor(readonly dId: string, private financeReport: string[]) {
    super("accounting", dId);
    this.lastReport = financeReport[financeReport.length - 1];
  }
  static getInstance(id: string) {
    if (AccountingDepartment.instance) {
      return this.instance
    } else {
      this.instance = new AccountingDepartment(id, []);
      return this.instance;
    }

  }
  describe(): void {
    cl(`This is accounting Department ${this.dname} and id is ${this.dId}.`)

  }

  printAllReport() {
    cl(this.financeReport)
  }

  addFinanceReport(report: string) {
    this.financeReport.push(report)
  }

  addEmp(emp: string): void {
    if (emp === "shri") {
      return;
    } else {
      this.empArray.push(emp);
    }
  }
}

// let accounting = new AccountingDepartment("D-243", ["form-16"])

cl(AccountingDepartment.getInstance("D-568"))

cl(AccountingDepartment.getInstance("D-754"))






