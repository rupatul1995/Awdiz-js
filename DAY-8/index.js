// cd filename ,  cd ..- change directory (folder)

// Datatypes
// String
// Number
// Boolean
// undefined
// console.log()
// typeof()
// Varibles
// Var
// let
// const
// Scope
// block
// hoisting

// Conditional Statement
// 1. if else
// 2. switch

// Logical Operators
// && ||

// Function;
// Arrow function
// Traditional function


// var count;

// for (var i = 1; i <= 4; i++) {
//   if (count === undefined) {
//     count = i;
//   } else {
//     count += i;
//   }
// }
// console.log(count);

// 1st iteration :
// i = 1
// i <= 4 ; 1 <=  4 ; true
// 0 ; count +=  i;  count += 1 => 1
// i++; 1 -> 2


//1-10
//10-1


// for(var i=1; i<=10; i++){
//     console.log(i);
// }

// for(var i=10; i>0; i--){
//     console.log(i);
// }

// Q. Print reversae number from given array, use for loop .

// var array=[1,2,3,4,5,54,86,2,9]

// for(var i=1; i< array.length; i++){
//     console.log(array[i]);
// }

// Q .  find addition of numbers from array who are odd

// var array=[1,2,3,4,5,56,67,8];
// var count=0;
// for(var i=0; i < array.length; i++){
//     if(array[i] % 2 === 1){
//   count += array[i];
//     }
// }


// var array = [1, 2, 3,4,5];
// // array[0]
// var count = 0; // 1 + 5= 6
// for (var i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 1) {
//     count += array[i];
//   }
// }
// console.log(count, "count");

var name = "Awdiz";
console.log(name.length);

// Q. Given an array find name of student whose lenght is more than 5.
var students = ["rahul", "rohit", "virat", "rishabh"];

for (var i = 0; i < students.length; i++) {
  //   console.log("Hii");
  //   console.log(students[i]);
  if (students[i].length > 5) {
    console.log(students[i]);
  }
}