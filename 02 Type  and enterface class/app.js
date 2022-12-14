// const num1 = document.getElementById("num1")! as HTMLInputElement;
// const num2 = document.getElementById("num2")! as HTMLInputElement;
// const btn = document.getElementById("btn")!;
var cl = console.log;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getfullname = function () {
        // ............Person.........Person.......
    };
    return Person;
}());
var person = {
    fname: "shrikant",
    lname: "bhadke",
    contact: 45623,
    email: "shri@gamil.com",
    skills: ["HTML", "CSS", "Angular"],
    role: ["hallo", 25]
};
cl(person);
function add(num1, num2, showresult, phrase) {
    if (showresult === true) {
        var result = num1 + num2;
        cl(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
(add(100, 200, true, "The addition of "));
var hobbies = ["cricket", "codding", "pinting"];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hoby = hobbies_1[_i];
    cl(hoby.toUpperCase());
}
// hobbies.push(100); erroe shows
