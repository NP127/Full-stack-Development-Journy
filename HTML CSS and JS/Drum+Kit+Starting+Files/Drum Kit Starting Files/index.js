const buttons = document.querySelectorAll(".drum");
const sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];
const images = ["crash.png", "kick.png", "snare.png", "tom1.png" ,"tom2.png","tom3.png","tom4.png"];

buttons.forEach((button, index) => {
  button.style.backgroundImage = `url('./images/${images[index]}')`;
  button.addEventListener("click", () => {
    playSound(sounds[index]);
  });
});

function playSound(soundFile) {
  var audio = new Audio(`./sounds/${soundFile}`);
  audio.play();
}

