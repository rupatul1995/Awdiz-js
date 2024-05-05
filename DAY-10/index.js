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
var array = [8,9,5,7,6,9,8,5,4,2,4,8,6,,7,9,8,5,6,2,4,7,9,6,3,];
target=16;

// function FindTarget(array, target){
    
    for(var i=0; i<array.length; i++){
        for(var j=i+1; J<array.length; j++){
            for( var k=j+1; k<array.length; k++){
                if(array[i]+array[j]+array[k]===target){
                    console.log(array[i],array[j],array[k]);
                }
            }
        }
    }
// }
// function FindTarget(array, target)
