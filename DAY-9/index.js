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
// Traditional function
// array
// loops - for
// ++ --

// nested for loops


// syntax;-
//for (Start; end; sequence) {
    //   for (start; end; sequence) {
    //     for (start; end; sequence) {}
    //   }
    // }


// Q Given an array, find two numbers whose addition is target.


// var array=[1,2,3,4,5,6,7]
// var target=5;


// for(var i=0; i<array.length; i++){
//     for(var j=0; j<array.length; j++){
//         // console.log("inner for loop");
//         // count++
//         // j++
//         console.log(array[i], "+", array[j], "=", array[i] + array[j]);
        
//     }
//  // i++
// }
// console.log(count);



var array=[1,2,3,4,5,6,7]
var target=5;
for(var i=0; i<array.length; i++){
    for(var j=i+1; j<array.length; j++){
        if(array[i]+array[j]==5){
            console.log(array[i], array[j]);
        }
    }
}

    