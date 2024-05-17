//Promise:=>

//    function enterDate(){
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result=false;
//         if(result){
//             resolve("Data successfully recevied");
//         }else{
//             reject("Failed");
//         }
//     },2000)
//  });
//    }
// enterDate()
// .then((response)=>{
//     console.log(response, "response");
// })
// .catch((error)=>{
//     console.log(error,"error");
// })



// 2 time:=>

//     function enterDate(){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result=true;
//         if(result){
//            resolve ("Data successfully recevied");
//         }else{
//           reject("Failed");
//         }
//     })
    
// })
//     }
//     enterDate()
//     .then((response)=>{
//         console.log(response,"response")
//     })
//     .catch((error)=>{
//         console.log(error,"error")

//     })

// 3 time:=>

    function enterData(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const result=false;
         if(result){
            Response("data succssefully recevied");
         }else{
            reject("Failed");
         }
        })
    })
    }
    enterData()
    .then((response)=>{
        console.log(Response,"response");
    })
    .catch((error)=>{
     console.log(error,"error");
    })


    // 4 time:=>

//         function enterData(){
//         return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         const result=true;
//         if(result){
//            response("Data successfully recevied");
//         }else{
//           reject("Failed");

//     }
// })
// })
//         }
//         enterData()
//         .then((response)=>{
//        console.log(response,"response");
//         })
//         .catch((error)=>{
//             console.log(error,"error");
//         })