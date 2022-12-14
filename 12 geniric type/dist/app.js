"use strict";
let cl = console.log;
let ages;
let skills;
class BookShelif {
    constructor() {
    }
    addToShelf(newBook) {
    }
    removeFromShelf(oldBook) {
    }
}
let b1 = new BookShelif();
b1.addToShelf({
    bookTitle: "Rich dad poor Dad",
    auther: "Robert K.",
    noOfCopies: 10
});
class MagzineShelf {
    constructor() {
    }
    addToShelf(newmag) {
    }
    removeFromShelf(oldmag) {
    }
}
let m1 = new MagzineShelf();
m1.addToShelf({
    magzineTitle: "hallo",
    vol: new Date,
    noOfCopies: 23
});
class Shelf {
    constructor() {
    }
    addToShelf(item) {
    }
    removeFromShelf(item) {
    }
}
let b2 = new Shelf();
b1.addToShelf({
    bookTitle: "Asami Asa mi",
    auther: "P.L.",
    noOfCopies: 10
});
let m2 = new Shelf();
m2.addToShelf({
    magzineTitle: "string",
    vol: new Date,
    noOfCopies: 12
});
let age2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function shortArray(arr, removeCount) {
    arr.length = arr.length - removeCount;
    return arr;
}
let newAges = shortArray(age2, 3);
cl(newAges);
newAges[0];
skills = ["HTML", 'CSS3', 'JS', 'TS', "Angular"];
let newSkills = shortArray(skills, 2);
newSkills[0];
;
let std = [
    {
        fname: "tony",
        age: 15,
        profile: "student"
    },
    {
        fname: "tony",
        age: 15,
        profile: "student"
    },
    {
        fname: "tony",
        age: 15,
        profile: "student"
    },
];
let newStd = shortArray(std, 1);
newStd[0];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = Math.random() > 0.5 ? false : true;
        if (!error) {
            resolve(std);
        }
        else {
            reject("Error");
        }
    }, 2000);
});
promise.then(res => {
    res[0];
});
//# sourceMappingURL=app.js.map