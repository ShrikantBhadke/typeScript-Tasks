var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("btn");
var cl = console.log;
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function (eve) {
    cl(add(+num1.value, +num2.value));
});
var x = 10;
cl(typeof x, x);
var z;
var person = {
    fname: "shrikant",
    lname: "bhadke",
    contact: 7544815326,
    email: "shri@gmail.com"
};
console.log(person);
