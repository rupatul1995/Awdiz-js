// Binary Search

// var numbers=[1,2,3,4,5,6,7,8,9,10];
// var target=2;

// function BinarySearch(array,target){
//     const midpoint = Math.ceil(array.length/2);

//        console.log(midpoint, array[midpoint]);

//     if(target==array[midpoint]){
//         console.log(midpoint);

//     }
// }
// BinarySearch(numbers,target);



// var numbers=[1,2,3,4,5,6,7,8,9,10];
// var target=5;

// function BinarySearch(array,target){
//     var left=0;
//     var right=array.length-1;
//     // console.log(left,right);

//     while(left <= right){
//         var midIndex =Math.floor((left+right)/2);

//         // console.log(midIndex,"midIndex",array[midIndex]);

//         if(array[midIndex]===target){
//             return midIndex;

//         }else if(array[midIndex]<target){
//             left=midIndex+1;

//         }else if(array[midIndex]>target){
//             right=midIndex-1;
//         }
        
//     }
// }
// console.log(BinarySearch(numbers,target));



            //  0 1 2 3 4 5 6 7 8 9 = index
var numbers=[1,2,3,4,5,6,7,8,9,10];
var target=7;

function BinarySearch(array,target){
    var left=0;  //0 ,4+1=5
    var right=array.length-1;  //10-1=9 , 9-1=8
    // console.log(left,right);

    while(left <= right){  //(0<=9) true ,(5<=9) true,(5<=8) true
        var midIndex =Math.floor((left+right)/2);  //4.5 (midindex)-> 4 value 5  ,14/2= 7 VALUE 8, 6 value 7

        // console.log(midIndex,"midIndex",array[midIndex]);

        if(array[midIndex]===target){ //5==7 false , 8==7 false  ,7==7 true
            return midIndex; // (6)

        }else if(array[midIndex]<target){  //5<7 true , 8<7 false
            left=midIndex+1;

        }else if(array[midIndex]>target){ //8>7 true
            right=midIndex-1;
        }
        
    }
}
console.log(BinarySearch(numbers,target));