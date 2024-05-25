//console.log('connected');

let calBody = document.querySelector(".calculator-body");
let button = document.querySelectorAll("button");
let displayScreen = document.getElementById("screen");

//console.log(button.length);

for (let i = 0; i < button.length; i++) {
  //console.log(button[i]);
  button[i].addEventListener("click", () => {
    if (button[i].innerHTML == "=") {
      displayScreen.innerHTML = eval(displayScreen.innerHTML);
    } else {
      if (button[i].innerHTML == "C") {
        displayScreen.innerHTML = "";
      } else {
        displayScreen.innerHTML += button[i].innerHTML;
      }
    }
  })
}