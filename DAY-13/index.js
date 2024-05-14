// array.map:-> similar to for loop
// const array=[1,2,3,4,5,6,7,8];
// const array2 =array.map((number)=>number +2);
// console.log(array2);

// array.forEach:-> print all element of given array
// const array=[1,2,3,4];
// array.forEach((ele)=>console.log(ele));

// Array.reduce:-> addition of all element of array

// const array1=[1,2,3,4,5,6];
// const sum=array1.reduce((accumulator, currentValue)=> accumulator+currentValue,0);
// console.log(sum);

// Array.concat:-> combine to array

// const array1=["rupali","vaishali"];
// const array2=["poonam","rohit"];
// const array3= array1.concat(array2);
// console.log(array3);

// array.find:-> find one number who is grether than 2

// const array=[1,2,3,4,5,6];
// const array1=array.find((array)=>array>2);
// console.log(array1);

// Array.findIndex:=-> find index of array element

const number = [5, 6, 7, 8, 9];
const index = number.findIndex((value) => value >77);
console.log(index);


// const array =[1,2,3,4,5,"cat","dog"];
// const array1 =array.includes("cat");
// console.log(array1);


// const array =[1,2,3,4,5,"cat","dog"];
// const array1 =array.includes("abc");
// console.log(array1);