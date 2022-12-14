"use strict";
let cl = console.log;
let person = {
    name: "jane",
    age: 45,
    greet: function (phrase) {
        cl(`${phrase} World`);
    },
};
person.greet("Hallo");
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    greet() {
        cl("hallo world");
    }
}
let p = new Person(45, "hallo");
cl(p);
let add = (n1, n2) => n1 + n2;
let e1 = {
    name: "ram",
    startDate: new Date(2022, 5, 11),
    privilages: [],
};
cl(e1);
const info = document.getElementById("info");
info.value = "Hallo Friends";
//# sourceMappingURL=app.js.map