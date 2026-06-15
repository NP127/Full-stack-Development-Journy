const dice =  [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png"
];
const diceElement1 = document.querySelector (".img1");
var random1 = Math.floor(Math.random() * 6);
diceElement1.setAttribute("src" , dice[random1]);
const diceElement2 = document.querySelector (".img2");
var random2 = Math.floor(Math.random() * 6);
diceElement2.setAttribute("src" , dice[random2]);