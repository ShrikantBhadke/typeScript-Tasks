var cl = console.log;
var Roles;
(function (Roles) {
    Roles[Roles["CANDIDATE"] = 0] = "CANDIDATE";
    Roles[Roles["HR_ADMIN"] = 1] = "HR_ADMIN";
    Roles[Roles["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
})(Roles || (Roles = {}));
// enum Roles { CANDIDATE = "A", HR_ADMIN = "B", SUPER_ADMIN = "C" }
var person = {
    fname: "jon",
    lname: "Doe",
    email: "jd@gmail.com",
    role: Roles.HR_ADMIN
};
if (person.role === 1) {
    cl("redirect to Hr admin dashbord");
}
// function add(n1: number, n2: number): number {
//   return n1 + n2;
//   // return "" + n1 +n2;
// }
function combine(str1, str2) {
    return "".concat(str1, " ").concat(str2);
}
function add2(n1, n2) {
    cl(n1 + n2);
    // return (n1 + n2);
}
function printobj() {
    return ({
        fname: "shri",
        lname: "bhadke"
    });
}
function add(n1, n2) {
    return (n1 + n2);
}
function substraction(n1, n2) {
    return (n1 - n2);
}
function mult(n1, n2) {
    return (n1 * n2);
}
function divi(n1, n2) {
    return (n1 / n2);
}
function calculator(n1, n2, cb) {
    return cb(n1, n2);
}
