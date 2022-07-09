//snakes and ladders game
const shallPassed = 30;
let steps = 0;
let turn = 0;

function generateRandomSteps() {
  //don't touch it
  return Math.ceil(Math.random() * 10);
}

function generateRandomSecond() {
  //don't touch it
  //in milliseconds
  return Math.ceil(Math.random() * 10) * 1000;
}
function snakesLaddersGame(stepNow, seconds, callback) {
  setTimeout(() => {
    turn += 1;
    console.log(
      `step ini membutuhkan ${seconds / 1000} detik untuk menyelesaikannya`
    );
    console.log(`step ini membutuhkan ${stepNow} langkah. Sehingga langkahnya bertambah dari ${steps} menjadi
  ${(steps += stepNow)}`);
    callback(steps);
  }, seconds);
}

function checkStep(steps) {
  if (turn >= 5) {
    if (steps >= shallPassed) {
      console.log(
        `Congratulations tou have passed this game! And your total step is ${steps}`
      );
    } else {
      console.log(`Goodbye you didn't passed this game because your step only ${steps}, because minimum step
      to pass this game is ${shallPassed}. Game Over`);
    }
  }
}

function theGame() {
  snakesAndLaddersGame(
    generateRandomSteps(),
    generateRandomSeconds(),
    checkStep
  );
  snakesAndLaddersGame(
    generateRandomSteps(),
    generateRandomSeconds(),
    checkStep
  );
  snakesAndLaddersGame(
    generateRandomSteps(),
    generateRandomSeconds(),
    checkStep
  );
  snakesAndLaddersGame(
    generateRandomSteps(),
    generateRandomSeconds(),
    checkStep
  );
  snakesAndLaddersGame(
    generateRandomSteps(),
    generateRandomSeconds(),
    checkStep
  );
  console.log("Let the game begin");
}

theGame();

console.log(generateRandomSteps);
