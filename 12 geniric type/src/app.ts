let cl = console.log;

let ages: Array<number>


let skills: Array<string>

interface Ibook {
  bookTitle: string;
  auther: string;
  noOfCopies?: number;
}

class BookShelif {
  constructor() {

  }
  addToShelf(newBook: Ibook) {

  }
  removeFromShelf(oldBook: Ibook) {

  }
}

let b1 = new BookShelif();

b1.addToShelf({
  bookTitle: "Rich dad poor Dad",
  auther: "Robert K.",
  noOfCopies: 10
})
interface Imagzine {
  magzineTitle: string,
  vol: Date,
  noOfCopies: number
}

class MagzineShelf {
  constructor() {

  }
  addToShelf(newmag: Imagzine) {

  }
  removeFromShelf(oldmag: Imagzine) {

  }
}

let m1 = new MagzineShelf();

m1.addToShelf({
  magzineTitle: "hallo",
  vol: new Date,
  noOfCopies: 23
})

class Shelf<T> {
  constructor() {

  }
  addToShelf(item: T) {

  }
  removeFromShelf(item: T) {

  }
}

let b2 = new Shelf<Ibook>();

b1.addToShelf({
  bookTitle: "Asami Asa mi",
  auther: "P.L.",
  noOfCopies: 10
})

let m2 = new Shelf<Imagzine>();

m2.addToShelf({
  magzineTitle: "string",
  vol: new Date,
  noOfCopies: 12
})

let age2: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
function shortArray<T>(arr: T[], removeCount: number) {
  // arr.splice(arr.length - removeCount, removeCount)

  arr.length = arr.length - removeCount;
  return arr;
}


let newAges = shortArray<number>(age2, 3)

cl(newAges)

newAges[0]//number methods give


skills = ["HTML", 'CSS3', 'JS', 'TS', "Angular"]

let newSkills = shortArray(skills, 2)

newSkills[0]///string methods give

interface Istudent {
  fname: string,
  age: number,
  profile: string
};

let std: Array<Istudent> = [
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

]

let newStd = shortArray<Istudent>(std, 1);

newStd[0];

// const promise: Promise<string> = new Promise((resolve,reject)=>{
// setTimeout(() => {
//   let error = Math.random()>0.5? false:true;
//   if(!error){
//     resolve("Success !!!")
//   }else{
//     reject("Error")
//   }
// }, 2000);
// })


const promise: Promise<Istudent[]> = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = Math.random() > 0.5 ? false : true;
    if (!error) {
      resolve(std)
    } else {
      reject("Error")
    }
  }, 2000);
})

promise.then(res => {
  res[0]
})