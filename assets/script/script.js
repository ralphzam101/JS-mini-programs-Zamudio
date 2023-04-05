function checkInt() {
  let inputNum = document.querySelector("#integerNum").value;
  let number = parseFloat(inputNum);

  if (number == 0) {
    document.getElementById("result").innerHTML = "This is Zero";
  } else if (number < 0.99 && number > -0.99) {
    document.getElementById("result").innerHTML = "Not an Integer";
  } else if ( number > 0) {
    document.getElementById("result").innerHTML = "This is a Positive Integer";
  } else if ( number < 0) {
    document.getElementById("result").innerHTML = "This is a Negative Integer";
  } else {
    document.getElementById("result").innerHTML = "Not an Integer";
  }
}


function checkNum() {
  let number = document.querySelector("#oddEven").value;

  if (number == 0) {
    document.getElementById("result").innerHTML = "This is Zero";
  } else if (Math.abs(number % 2) < .99 && Math.abs(number % 2) > .0001) {
    document.getElementById("result").innerHTML = "Not a whole Number";
  } else if (Math.abs(number % 2) == 0) {
    document.getElementById("result").innerHTML = "This is an Even Number";
  } else if (Math.abs(number % 2) !== 0) {
    document.getElementById("result").innerHTML = "This is an Odd Number";
  } else {
    document.getElementById("result").innerHTML = "Not a Number";
  }
}


function checkAge() {
  let yourAge = document.querySelector("#age").value;
  let yourName = document.querySelector("#name").value;
  let yourFil = document.querySelector('input[name="naturalizeFil"]:checked').value;
  let yourYear = document.querySelector('input[name="yearFil"]:checked').value;

  if (yourAge >= 18 && yourFil == "true" && yourYear == "true") {
    document.getElementById("voteResult").innerHTML = "Yes! " + yourName + ", You can Vote.";
    alert("Yes! " + yourName + ", You can Vote.");
  } else  {
    document.getElementById("voteResult").innerHTML = "Sorry, " + yourName + ", You cannot Vote.";
    alert("Sorry, " + yourName + ", You cannot Vote.");
  } 
}


// function checkNum() {
//   let number = document.querySelector("#oddEven").value;

//   if (number == 0) {
//     document.getElementById("result").innerHTML = "This is Zero";
//   } else if (Math.abs(number % 2) == 0) {
//     document.getElementById("result").innerHTML = "This is an Even Number";
//   } else if (Math.abs(number % 2) !== 0) {
//     document.getElementById("result").innerHTML = "This is an Odd Number";
//   } else {
//     document.getElementById("result").innerHTML = "Not a Number";
//   }
// }