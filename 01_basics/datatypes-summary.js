//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************************memory

// stack (primitive) , heap(non primitive)

let myYoutubename = "saloni"
let anothername = myYoutubename
anothername = "chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userone={
    email : "user@gmial.com",
    upi: "abcd"
}

let usertwo = userone
usertwo.email="abc@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

