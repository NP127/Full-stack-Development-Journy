var Heading = $("h1");

class Game {
  constructor() {
    this.active = false;
    this.sequnce = [];
    this.playerSequence = [];
    this.iteration = 1;
    this.gameOver = false;
    this.score = 0;
  }

  startGame() {
    this.active = true;
    this.playerSequence = [];
    this.runGame();
  }

  runGame() {
    // this.sequnce = [];
    $("h2").text("Score: " + this.score);
    this.playerSequence = [];
    this.arreySequecner();
    this.sequencItr();
  }
  // Display simon presses
  sequencItr() {
    Heading.text("Listen closely");
    this.active = false;

    for (let x = 0; x < this.sequnce.length; x++) {
      setTimeout(() => {
        const buttonIndex = this.sequnce[x];
        $("button").eq(buttonIndex).addClass("PlayAwait");
        setTimeout(() => {
          $("button").eq(buttonIndex).removeClass("PlayAwait");
        }, 500);
      }, x * 700);
    }
    setTimeout(() => {
      this.active = true;
      Heading.text("Your turn");
    }, this.sequnce.length * 700);

    console.log(this.sequnce);
  }

  arreySequecner() {
    // for (let i = 0; i < this.iteration; i++) {
    //   this.sequnce.push(Math.floor(Math.random() * 4));
    // }
    this.sequnce.push(Math.floor(Math.random() * 4));
  }

  playerPress(buttonIndex) {
    if (!this.active) return;

    this.playerSequence.push(buttonIndex);

    $("button").eq(buttonIndex).addClass("PlayAwait");
    setTimeout(() => {
      $("button").eq(buttonIndex).removeClass("PlayAwait");
    }, 300);
    console.log(this.playerSequence);

    this.checkAnswer();
  }

  checkAnswer() {
    const lastIndex = this.playerSequence.length - 1;

    if (this.playerSequence[lastIndex] !== this.sequnce[lastIndex]) {
      this.gameOver = true;
      $("body").addClass("redflash");
      setTimeout(() => {
        $("body").removeClass("redflash");
      }, 300);
      Heading.text("Game Over! Press A to restart");
      this.active = false;
      return;
    }

    if (this.playerSequence.length === this.sequnce.length) {
      this.score = this.score + 10;
      this.nextRound();
    }
  }

  nextRound() {
    this.active = false;
    this.playerSequence = [];
    this.iteration++;

    setTimeout(() => {
      this.runGame();
    }, 1000);
  }

  resetGame() {
    this.sequnce = [];
    this.playerSequence = [];
    this.iteration = 1;
    this.gameOver = false;
    this.active = false;
    this.score = 0;
  }
}

const game = new Game();
Heading.text("Hit A to start the game");

$("body").on("keypress", function (e) {
  if (e.key.toLowerCase() === "a") {
    game.resetGame();
    game.startGame();
  }
});

$("button").on("click", function () {
  const buttonIndex = $("button").index(this);
  game.playerPress(buttonIndex);
});
