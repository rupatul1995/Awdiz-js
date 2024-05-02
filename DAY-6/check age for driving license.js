
function CheckNumber() {
    const age = document.getElementById("age").value;
    console.log( age, "age")
    if(age < 18){
        
        alert("You are Not Eligiable for Driving License");
    }
    else if(age==18) {
        
        alert("You are Eligiable for only Learning License");
       }
       else{
        alert("You are Eligiable for Driving License");
       }

}
















