//snakes and ladders game
const shallPassed = 30;
let steps = 0;
function generateRandomSteps() {
  //don't touch it
  return Math.ceil(Math.random() * 10);
}
function generateRandomSecond() {
    //don't touch it
  //in milliseconds
  return Math.ceil(Math.random() * 10) * 1000;
}

function snakesAndLaddersGame(stepNow, seconds, callback) {
    let step = stepNow;
    let second = seconds;
    let interval = setInterval(() => {
        if (step >= shallPassed) {
            clearInterval(interval);
            callback(true);
        } else {
      step += generateRandomSteps();
      second += generateRandomSecond();
      setTimeout(() => {
        snakesAndLaddersGame(step, second, callback);
    }, second);
}
}, second);
}

console.log(generateRandomSteps);