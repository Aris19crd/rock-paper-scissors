

let myArray = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
};

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }

// +' - '+ ('Score:') +' '+ ('Player:') +' '+ playerScore++ +' / '+ ('Computer:') +' '+ computerScore;

function playRound(playerSelection, computerSelection) {
    // computerSelection = computerPlay().toLowerCase;
    // playerSelection = playerSelection.toLowerCase;
    if (playerSelection === computerSelection) {
        return ("Tie");
    } 
    
    // else if(
    //     (playerSelection === "rock" && computerSelection === "scissors") ||
    //     (playerSelection === "paper" && computerSelection === "rock") ||
    //     (playerSelection === "scissors" && computerSelection === "paper")
    // ) {
    //     return ("You won!")
    // } else {
    //     return ("You lost!")
    // }

    if(playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return ("You won! Rock beats Scissors");

    } else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return ("You won! Paper beats Rock");

    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return ("You won! Scissors beats Paper");

    } else if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return ("You lost! Paper beats Rock");

    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return ("You lost! Scissors beats Paper");

    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return ("You lost! Rock beats Scissors");
    }
    
}

function score() {
    return ('Score:') +' '+ ('Player:') +' '+ playerScore +' / '+ ('Computer:') +' '+ computerScore;
}

// function game() {
//     for(let i = 0; i <= 5; i++) {
//         return playRound(playerSelection, computerSelection);
//     }
// }


playerSelection = prompt("");
computerSelection = getRandomChoice();
// console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
// console.log(game())
