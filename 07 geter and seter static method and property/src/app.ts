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

class ItDepartment extends Department {

  constructor(readonly dId: string) {
    super("it", dId);
  }
  describe(): void {
    cl(`This is it Department ${this.dname} and id is ${this.dId}.`)
  }
}

let it1 = new ItDepartment("d-568");
it1.describe()

class AccountingDepartment extends Department {
  private lastReport: string
  constructor(readonly dId: string, private financeReport: string[]) {
    super("accounting", dId);
    this.lastReport = financeReport[financeReport.length - 1];
  }

  describe(): void {
    cl(`This is accounting Department ${this.dname} and id is ${this.dId}.`)

  }

  printAllReport() {
    cl(this.financeReport)
  }
  get accessLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report is Prasent");
    }
  }

  set accessLastReport(val: string) {
    if (!val) {
      throw new Error("Please provide proper Value");

    } else {
      this.financeReport[this.financeReport.length - 1] = val;
      this.lastReport = val
    }
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

let accounting = new AccountingDepartment("D-243", ["form-16"])
cl(accounting)
accounting.describe()
accounting.addEmp("Jone Doe");
accounting.addEmp("shri")
accounting.printNoOfEmp();
accounting.addFinanceReport("TDS");
accounting.addFinanceReport("dsjhf");
accounting.addFinanceReport("sdbjks");

cl(accounting)

cl(accounting.accessLastReport)

cl(AccountingDepartment.creatEmp("shree"))


cl(Department.startDate);
cl(AccountingDepartment.startDate)









// class SupportDepartment extends Department {
//   constructor(pId: string, private ticketArray: string[]) {
//     super("support", pId)
//   }
//   addTicket(ticket: string) {
//     this.ticketArray.push(ticket)
//   }
//   printAllTickets() {
//     cl(this.ticketArray)
//   }
// }

// let s1 = new SupportDepartment("D-254", []);

// cl(s1)
// s1.addTicket("Support1");
// s1.printAllTickets();
// s1.addEmp("Jhon")
// s1.describe();
// s1.printNoOfEmp()
// cl(s1);