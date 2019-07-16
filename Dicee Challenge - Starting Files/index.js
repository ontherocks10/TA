var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function diceImage() {
  var randomNumber1 = "images/dice" + randomNumber + ".png";
  return String(randomNumber1);
}

function diceImage2() {
  var randomNumber3 = "images/dice" + randomNumber2 + ".png";
  return String(randomNumber3);
}

if (diceImage() > diceImage2()) {
  document.querySelector('h1').innerHTML = 'Player one Wins!!!';
} else if (diceImage2() > diceImage()) {
  document.querySelector('h1').innerHTML = 'Player two Wins!';
} else {
  document.querySelector('h1').innerHTML = 'Draw';
}

document.querySelector("img.img1").setAttribute("src", diceImage());
document.querySelector("img.img2").setAttribute("src", diceImage2());


// var lucky = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
