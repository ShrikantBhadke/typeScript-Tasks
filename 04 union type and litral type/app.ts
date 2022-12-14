
let cl = console.log;

// let x: number | string;

// x = 4;
// x = "hallo";

// type comb = number | string;
// type resCon = "as-string" | "as-number"
// function combine(n1: comb, n2: comb resultConv: resCon): comb {
//   let result;
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     result = n1 + n2;
//   } else {
//     result = n1.toString() + n2.toString();
//   }
//   if (resultConv === "as-number") {
//     result = +result;
//   } else {
//     result.toString();
//   }
//   return result;
// }

// let add = combine(120, 452, "as-number")

// cl(add);



// type add = (n1: number, n2: number) => number;

// let add1: add = (n1: number, n2: number) => n1 + n2;


// let r = add1(12, 54)

// cl(r)


// let x: any
// let y = "hallo";

// x = y;
// cl(typeof x);


// let x: unknown;
// let y: string = "hallo"

// if (typeof y === "string") {
//   x = y;
//   cl(x);
// }

// type comb = number | string
// type resultConvert = "as-string" | "as-number";

// function comibine(n1: comb, n2: comb resultcon: resultConvert): comb {
//   let result;
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     result = n1 + n2
//   } else {
//     result = n1.toString() + n2.toString()
//   }
//   if (resultcon = "as-number") {
//     result = +result
//   } else {
//     result = result.toString()
//   }
//   return result;
// }


// let r = comibine(12, "45", "as-number")

// cl(r, typeof r)
type Operration = (n1: number, n2: number) => number
type OperationFun = (n1: number, n2: number, cb: Operration) => number


let add: Operration = (n1: number, n2: number) => n1 + n2;
let sub: Operration = (n1: number, n2: number) => n1 - n2;
let mult: Operration = (n1: number, n2: number) => n1 * n2;
let divi: Operration = (n1: number, n2: number) => n1 / n2;

function calc(n1: number, n2: number, cb): number {
  return (cb(n1, n2))

}


let r = calc(12, 45, mult);

cl(r);