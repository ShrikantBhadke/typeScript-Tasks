let cl = console.log;

type Empl = {
  name: string;
  startDate: Date;
}

type Admin = {
  name: string;
  privalages: string[];
}

type ElevatedEmpl = Empl & Admin;


let e1: ElevatedEmpl;

e1 = {
  name: "Jone Doe",
  startDate: new Date(),
  privalages: ["Dsa"]
}

cl(e1);
e1.name
e1.privalages
e1.startDate

type NewEmpl = Empl | Admin

let empl1: Admin = {
  name: "shri",
  privalages: ["hallo", "ram"]
}

let empl2: NewEmpl = {
  name: "shri",
  startDate: new Date(),
}

empl2.name

function printEmplInfo(e: NewEmpl) {
  cl(e.name)
  if ("startDate" in e) {
    cl(e.startDate)
  }
  if ("privalages" in e) {
    cl(e.privalages)
  }
}

printEmplInfo(empl1)
printEmplInfo(empl2)


class Car {
  drive() {
    cl("Driving a car......")
  }
}

class Truck {
  drive() {
    cl("Driving a Truck......")
  }

  loadCargo(amount: number) {
    cl(`Loading cargo in truck having amount ${amount}`)
  }
}


type Vehical = Car | Truck

function useVehical(v: Vehical) {
  v.drive();

  if ("loadCargo" in v) {
    v.loadCargo(200)  /// in only Truck
  }
}


let c = new Car();
let t = new Truck();

useVehical(c)
useVehical(t)


interface Ibird {
  flyingSpeed: number
}

interface Ihorse {
  runingSpeed: number
}

type Animal = Ibird | Ihorse


function movingAnimal(animal: Animal) {
  if ("flyingSpeed" in animal) {
    cl(`Flying Speed of ${animal.flyingSpeed}`)
  }

  if ("runingSpeed" in animal) {
    cl(`Runing Speed of ${animal.runingSpeed}`)
  }
}

let anm1: Ibird = {
  flyingSpeed: 200
}

let anm2: Ihorse = {
  runingSpeed: 500
}

movingAnimal(anm1)
movingAnimal(anm2)