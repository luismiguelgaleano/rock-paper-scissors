const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const gameRoundResult = document.querySelector("#game-round-result");
const gameResult = document.querySelector("#game-result");
const gameScoreHuman = document.querySelector("#game-score-human");
const gameScoreComputer = document.querySelector("#game-score-computer");

 function computerPlay() {
    return Math.floor(Math.random() * 3);
} 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    let result = 0;
    
    if (!(Number(gameScoreHuman.textContent) >= 5) && !(Number(gameScoreComputer.textContent) >= 5)) {
        
    switch (playerSelection) {
        case "rock":
            playerSelection = 0;
            switch (computerSelection) {
                case 0:
                result = 2;
                break;
                case 1:
                result = 1;
                break;
                case 2:
                result = 0;
                break;
            }
            break;
        case "paper":
            playerSelection = 1;
            switch (computerSelection) {
                case 0:
                result = 0;
                break;
                case 1:
                result = 2;
                break;
                case 2:
                result = 1;
                break;
            }
            break;
        case "scissors":
            playerSelection = 2;
            switch (computerSelection) {
                case 0:
                result = 1;
                break;
                case 1:
                result = 0;
                break;
                case 2:
                result = 2;
                break;
            } 
            break;
    }

    switch (result) {
        case 0:
        result = "you lose";
        gameScoreComputer.textContent = Number(gameScoreComputer.textContent) + 1;
        break;
        case 1:
        result = "you win";
        gameScoreHuman.textContent = Number(gameScoreHuman.textContent) + 1;
        break;
        case 2: 
        result = "It is a tie!";
        break;
    }
    gameRoundResult.textContent = result;
    return result;
   }
    if(Number(gameScoreHuman.textContent) > Number(gameScoreComputer.textContent)) {
            gameResult.textContent = "You Win!";
        } else {
            gameResult.textContent = "You Lose!";
        }
   result = "The game has ended";
   gameRoundResult.textContent = result; 
   return result;
}


rock.addEventListener("click", () => {
    console.log(playRound("rock", computerPlay()));
});
paper.addEventListener("click", () => {
    console.log(playRound("paper", computerPlay()));
});
scissors.addEventListener("click", () => {
    console.log(playRound("scissors", computerPlay()));
});


