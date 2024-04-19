// Difference between var let const
// 1. Redeclare and Reassign
//          Redeclare       Reassign
// var =   possible        possible
// let =   not possible    possible
// const =  not possible    not possible

//  1. Scope 
//  2. Hoisting 

// 1. Scope

// var - global scope
// let const - block scope


// 2. Hoisting
// var - hoisting applicable
// let const - hoisting not applicable

// console.log("hellow");
// console.log("hii");

// function Greeting(){
//     console.log("welcome");
// }
// console.log(Greeting());
// console.log("hii");      


// var number=20;
// console.log(number);

// var number=20;
// {
// console.log(number);
// }
// {
// let number=10;
// }
//     console.log(number);

//     let number = 10;
// {
// console.log(number);

// }

// {
//     let number = 10;
//     {
//       console.log(number);
//     }
//   }

// let firstNumber = 10;
// {
//   const secondNumber = 20;
//   var thirdNumber = 30;
//   console.log(firstNumber);
//   {
//     {
//         console.log(thirdNumber);
//         console.log(firstNumber);
//       }
//       console.log(secondNumber);
//     }
//   }

//   console.log(thirdNumber);

// mynumber = 10;
// console.log(mynumber);

// var mynumber;


mynumber = 10;
console.log(mynumber);

let mynumber;


