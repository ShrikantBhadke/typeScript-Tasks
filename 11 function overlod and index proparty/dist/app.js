"use strict";
let cl = console.log;
let e1;
e1 = {
    name: "Jone Doe",
    startDate: new Date(),
    privalages: ["Dsa"]
};
cl(e1);
e1.name;
e1.privalages;
e1.startDate;
let empl1 = {
    name: "shri",
    privalages: ["hallo", "ram"]
};
let empl2 = {
    name: "shri",
    startDate: new Date(),
};
empl2.name;
function printEmplInfo(e) {
    cl(e.name);
    if ("startDate" in e) {
        cl(e.startDate);
    }
    if ("privalages" in e) {
        cl(e.privalages);
    }
}
printEmplInfo(empl1);
printEmplInfo(empl2);
class Car {
    drive() {
        cl("Driving a car......");
    }
}
class Truck {
    drive() {
        cl("Driving a Truck......");
    }
    loadCargo(amount) {
        cl(`Loading cargo in truck having amount ${amount}`);
    }
}
function useVehical(v) {
    v.drive();
    if ("loadCargo" in v) {
        v.loadCargo(200);
    }
}
let c = new Car();
let t = new Truck();
useVehical(c);
useVehical(t);
function movingAnimal(animal) {
    if ("flyingSpeed" in animal) {
        cl(`Runing Speed of ${animal.flyingSpeed}`);
    }
    if ("runingSpeed" in animal) {
        cl(`Runing Speed of ${animal.runingSpeed}`);
    }
}
let anm1 = {
    flyingSpeed: 200
};
let anm2 = {
    runingSpeed: 500
};
movingAnimal(anm1);
movingAnimal(anm2);
//# sourceMappingURL=app.js.map