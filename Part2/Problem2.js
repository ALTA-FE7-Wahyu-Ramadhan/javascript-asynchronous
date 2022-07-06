// Randomize Colors
const listColors = ["green", "yellow", "blue", "orange", "red"];

function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * listColors.length);
  if (randomNumber > 4) {
    return new Promise((reject) => {
      setTimeout(() => {
        reject("Failed to get random color, please try again");
      }, 3000);
    });
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(listColors[randomNumber]);
      }, 3000);
    });
  }
}

console.log(getRandomColor(listColors))