// array:-  var myarray=[4,6,8,6];


///Object:-
// syntax:-
// var myobject={ key:value, key2:value2, kye3:value3}

var studentDetails={ 
    name:"rahul", 
    age:22,
    location:"kamothe",
    working:false,
    friendname:["vaishali" ,"nitin","manisha","neha" ,[ "hii","hello","target" ]],
    marks:{HSC :86.60, SSC: 89.50}
   
}

// console.log(studentDetails);
// console.log(studentDetails.location);
// console.log(studentDetails.marks.SSC);


// console.log(studentDetails["age"]);
// console.log(studentDetails["friendname"].length);


// const keys =Object.keys(studentDetails);
// console.log(keys);
// const values =Object.values(studentDetails);
// console.log(values);


// const subarray=studentDetails.friendname[3];
// console.log(subarray[2]);
// for(var i=0;i<subarray.length;i++){
//     if(subarray[i]==="target"){
//         console.log(i)
//     }
// }

// for(let key in studentDetails){
//     console.log(key);
// }

for(let key in studentDetails){
    console.log(key, studentDetails[key]);
}