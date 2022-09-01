function myFunction() {
  const fImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  var randomIndex = Math.floor(Math.random() * fImages.length);
  document.getElementById("myFirstImage").src = fImages[randomIndex];
  var randomIndex2 = Math.floor(Math.random() * fImages.length);
  document.getElementById("mySecondImage").src = fImages[randomIndex2];

  if (randomIndex > randomIndex2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (randomIndex < randomIndex2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

myFunction();
