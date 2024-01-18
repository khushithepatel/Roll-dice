if (window.performance.navigation.type === 1) {
  var n = Math.random();
  n = n * 6 + 1;
  n = Math.floor(n);

  if (n == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  }
  if (n == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  }
  if (n == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  }
  if (n == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  }
  if (n == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  }
  if (n == 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }

  var m = Math.random();
  m = m * 6 + 1;
  m = Math.floor(m);

  if (m == 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  if (m == 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  if (m == 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  if (m == 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  if (m == 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }
  if (m == 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }

  if (m > n) {
    document.querySelector("h2").textContent = "Player 2 won!";
  } else if (n > m) {
    document.querySelector("h2").textContent = "Player 1 won!";
  } else {
    document.querySelector("h2").textContent = "It's a tie";
  }
}
