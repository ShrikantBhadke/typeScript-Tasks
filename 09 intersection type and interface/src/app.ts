let cl = console.log;

interface Iperson {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let person: Iperson = {
  name: "jane",
  age: 45,
  greet: function (phrase: string) {
    cl(`${phrase} World`);
  },
};

person.greet("Hallo");

interface Igreetable extends Iname {
  greet(): void;
}

interface Iname {
  name: string;
}

// class Person implements Igreetable, Iname {
class Person implements Igreetable {
  age: number;
  name: string;
  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
  greet(): void {
    cl("hallo world");
  }
}

let p = new Person(45, "hallo");
cl(p);

// type Addfun = (n1: number, n2: number) => number;

interface Addfun {
  (n1: number, n2: number): number;
}

let add: Addfun = (n1: number, n2: number) => n1 + n2;

type x = string | number;

type Emp = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  privilages: string[];
};

type ElevetdEmp = Emp & Admin; // intersection

let e1: ElevetdEmp = {
  name: "ram",
  startDate: new Date(2022, 5, 11),
  privilages: [],
};

cl(e1);

//typecasting
const info = document.getElementById("info")! as HTMLInputElement;

info.value = "Hallo Friends";
