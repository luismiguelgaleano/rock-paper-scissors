 function computerPlay() {
    return Math.floor(Math.random() * 3);
} 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    let result = 0;

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
        break;
        case 1:
        result = "you win";
        break;
        case 2: 
        result = "It is a tie!";
        break;
    }
    return result;
}

 function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Your selection");
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
    return;
}

game();