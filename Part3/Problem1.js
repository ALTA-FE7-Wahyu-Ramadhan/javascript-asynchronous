const shallPassed = 30;
let steps = 0;

function generateRandomSteps() {
  // don`t touch it
  return Math.ceil(Math.random() * 10);
}

function generateRendomSeconds() {
  // don`t touch it
  //in milliseconds
  return Math.ceil(Math.random() * 10) * 1000;
}
// console.log(generateRendomSeconds());

function snakeAndLaddersGame(stepNow, seconds) {
  return new Promise(() => {
    setTimeout(() => {
      console.log(
        `step ini membutuhkan ${seconds / 1000} detik untuk menyelesaikanya\n`
      ),
        console.log(
          `step ini mendapatkan ${stepNow}\nsehingga langkah nyaa bertambah dari ${steps} menjadi ${(steps +=
            stepNow)}\n`
        );
    }, seconds);
  });
}
// snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds());

(async () => {
  snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds());
  snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds());
  await snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds());
  snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds());
})();
