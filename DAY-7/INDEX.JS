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

// var number=1;
// console.log(number);

// set of codes

// calculation
//  additon-> {code}
//  subtraction->{code}

//   cupboard-> function -> addition
//   cupboard->subtraction
//   cupboard->multiplication
//   cupboard->
//   cupboard->

//   variable-> to store Data
//   function-> to store multiple lines of code

//   Traditional function->

//   function sametime(){
//     console.log("Inside from function");
    
//  }
//  sametime();
//  console.log("Outside from function");

//   function addition(){
//     var number1=5;
//     var number2=5;
//     return number1+number2;
//     console.log("hiiii0");
    
//  }1
//  const answer=addition();
//  console.log(answer, "answer");

// const number1=10;
// const number2=10;
// function Addition(){

//  return number1+number2;

// }
// function subtraction(){

//     return number1-number2;
    
//    }
//    console.log(subtraction(),Addition());

// const number1=10;
// const number2=10;

// function addition(first, second, third){
// return first+second;
// }

// function multiple(first, second, third){
//     return first*second;
//     }
//  function subtraction(first, second, third){
//         return first-second;
//         }

//  function diviton(first, second, third){
//             return first%second;
//             }
//             console.log(addition( number1,number2));
//             console.log(multiple( number1,number2));
//             console.log(subtraction( number1,number2)); 
//             console.log(diviton( number1,number2)); 
 
// function checkNumberIsEvenOrOdd(number){
//     if( number%2===0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }
// checkNumberIsEvenOrOdd(25);


//Array
// var students=["Rohit", "Nisha","Rohini","Vaishali"];
// console.log(students,"students");
// console.log(students.length);// start from 1,2,3...
// console.log(students[3]);//start from 0,1,2,3...
//console.log(students[students.length-1]);   //element of end

// Map()
// foreach()
// fillter()

//loops:
//1.for
//2.while


// for(starting: ending: sequence){
//     code;
// }

// Q. print number from 1 to 100, by using for loops

// for(var number =1;   number <= 5;  number++ ){
//     console.log(number);

// }




// // 1st Iteration :
// var number = 1;
// number <= 5, 1 <= 5, true;
// console.log(number);  1
// number++; 1 => 2

// 2nd Iteration :
// number = 2
// number <= 5; 2 <= 5;  true
// console.log(number ) 2
// number++; 2 => 3

// 3rd Iteration

// number = 3
// number <= 5 ; 3 <= 5; true
// console.log(number)  3
// number++; 3 => 4

// 4 th Iteration

// number = 4
// number <= 5 ; 4 <= 5 ; true
// console.log(number)  4
// number++. 4 -> 5

// 5th iteration

// number = 5
// number <=  5; 5 <= 5; true
// console.log(numberm) 5
// number++; 5 -> 6

// 6 th iteration

// number = 6
// number <= 5 ; 6 <= 5 : false

// stop

// Q Print number from 10 to 60 with gap of 4;

// for (var number = 10; number <= 60; number += 4){
//     console.log(number);
// }

// Q . Print number from 33 to 76 with gap of 3 but number also must be even
// var finalCount = 0;
// for(var i =33;  i<=76; i+=3){
//     if(i%2===0){
//     console.log(i );
// finalCount += i;

// }
// }
// console.log(finalCount);



//Q.Whats the addition of number from 23 to 89 with gap of 2 and number must be odd.

// var finalCount=0;
// for(var i=23; i<=89; i+=2){
//     if(i%2===1){
//         console.log(i);
//         finalCount += i;
//     }
// }
// console.log(finalCount);

// var finalCount=1
// ;
// for( var i=0; i<=5; i++){
//     finalCount=finalCount*i;
//     console.log(finalCount);
    
// }
// console.log(finalCount);


var finalCount;
for (var i = 1; i <= 5; i++) {
  if (finalCount == undefined) {
    finalCount = i;
  } else {
    finalCount = finalCount * i;
  }
}
console.log(finalCount);



