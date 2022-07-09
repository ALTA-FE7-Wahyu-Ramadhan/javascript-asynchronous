const shallPassed = 30;
let steps = 0;
let turn = 0;

function generateRandomSteps(){
    // dont touch it
return Math.ceil(Math.random()*10);
}

function generateRandomSeconds(){
    // dont touch it
    // in miliseconds
return Math.ceil(Math.random()*10)*1000;
}



function snakesAndLaddersGame(stepNow, seconds, callback){
    
    setTimeout(() => {
        turn += 1
        console.log(`step ini membutuhkan ${seconds/1000} detik untuk menyelesaikannya`);
        console.log(`Step ini mendapatkan ${stepNow} langkah. Sehingga langkahnya bertambah dari ${steps} menjadi ${steps+=stepNow}`)
        callback()
    }, seconds);


}

function checkStep() {
    if (turn >= 5){
        if (steps >= shallPassed){
            console.log(`Congratulation you have passed this game! And your total step is ${steps}`)
        } else {
            console.log(`Goodbye! You didn't passed this game because your step only ${steps}, because minimum step to pass this game is ${shallPassed}. Game Over`)
        }
    }
    
}

function theGame () {

    snakesAndLaddersGame(generateRandomSteps(),generateRandomSeconds(),checkStep);

    snakesAndLaddersGame(generateRandomSteps(),generateRandomSeconds(),checkStep);

    snakesAndLaddersGame(generateRandomSteps(),generateRandomSeconds(),checkStep);

    snakesAndLaddersGame(generateRandomSteps(),generateRandomSeconds(),checkStep);

    snakesAndLaddersGame(generateRandomSteps(),generateRandomSeconds(),checkStep);

    console.log(`Let the game begin`)    
}

theGame();