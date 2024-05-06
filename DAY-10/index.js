// Q Given an array, find two numbers whose addition is target.
// var array = [1, 2, 3, 4, 5];
// var target = 6;
// function FindTarget(array, target){
// for(var i=0; i<array.length; i++){
//     for( var j=i+1; j<array.length; j++){
//         // console.log(array[i],array[j])
//         if ( array[i] + array[j] === target){
//             console.log(array[i],array[j]);
//         }
//     }
// }
// }
// FindTarget(array, target);

// Q Given an array, find three numbers whose addition is target.
// var array = [8,9,5,7,6,9,8,5,4,2,4,8,6,];
// target=10;

// function FindTarget(array, target){
    
//     for(var i=0; i<array.length; i++){
//         for(var j=i+1; j<array.length; j++){
//             for( var k=j+1; k<array.length; k++){
//                 if(array[i]+array[j]+array[k]===target){
//                     console.log(array[i],array[j],array[k]);
//                 }
//             }
//         }
//     }
// }
//  FindTarget(array, target)

// push:- add element to the end of array
// var array=[5,9,6,8,7]
// array.push(4);
// console.log(array);


// pop:-  remove element to the end of array
// var array=[5,9,6,8,7]
// array.pop();
// console.log(array);

//  unshift:-add element to the start of array
// var array=[5,9,6,8,7]
// array.unshift(4);
// array.unshift(8);
// console.log(array);


// shift:-remove element to the start of array
// var array=[5,9,6,8,7]
// array.shift(3);
// console.log(array);

// var students = ["rohit", "rohini", "rahul", "rishabh"];
// // (1,0) add string
// students.splice(1,0,"radhika");  
// console.log(students);


// var students = ["rohit", "rohini", "rahul", "rishabh"];
// // (1,2) replace string
// students.splice(0,2,"radhika");  
// console.log(students);

// var students = ["rohit", "rohini", "rahul", "rishabh"];
//  const newarray=students.slice(2,3,);  
// //  (2 start //3  start end)
// console.log(newarray);

// const todo = ["Do assignment", "Eat lunch", "Go home"];
// todo.splice(1, 3);
// console.log(todo);
//remove from array element


// const array3 = [1, 2, "a", "1a"];
// console.log(array3.toString());

const array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log(array2);

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
array1.sort((a, b) => b - a);
console.log(array1);

// function(){}

// const Myfunction = (message) => {
//   console.log(message);
// };
// Myfunction("Hii");

// function MyFunction() {
// }
// MyFunction();

// const MyFunciton = () => {
// };
// MyFunciton();