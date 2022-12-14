var cl = console.log;
var add = function (n1, n2) { return n1 + n2; };
var sub = function (n1, n2) { return n1 - n2; };
var mult = function (n1, n2) { return n1 * n2; };
var divi = function (n1, n2) { return n1 / n2; };
function calc(n1, n2, cb) {
    return (cb(n1, n2));
}
var r = calc(12, 45, mult);
cl(r);
