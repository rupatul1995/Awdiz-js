//            10
//             0 ->  remainder

//           ____ 8 -> Quotient
//        2 / 17
//            16
//             1 ->  remainder

//             ____ 7 -> Quotient
//         2 / 15
//             14
//              1 ->  remainder

// 2. Switch - conditional statement

function CheckNumber() {
    const number = document.getElementById("number").value;
    console.log(number, "number");
    if (!number) {
      console.log("Please type the number.");
      alert("Please type the number.");
    } else if (number % 2 === 0) {
      console.log(`Number ${number} is Even.`);
      alert(`Number ${number} is Even.`);
    } else {
      console.log(`Number ${number} is Odd.`);
      alert(`Number ${number} is Odd.`);
    }
  }