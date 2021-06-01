let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result > p');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
const finalMessage = document.querySelector('.final-message > p');
const restartBtn = document.getElementById('restart');



rock_btn.addEventListener('click', () => game('Rock'));

paper_btn.addEventListener('click', () => game('Paper'));

scissors_btn.addEventListener('click', () => game('Scissors'));

restartBtn.addEventListener('click', () => location.reload());

function win(player, computer) {
  playerScore++
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = player + ' ' + 'beats' + ' ' + computer + '.' + ' ' + 'You won!'
}

function lost(player, computer) {
  computerScore++
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computer + ' ' + 'beats' + ' ' + player + '.' + ' ' + 'You lost!'
}

function draw() {
  result_p.innerHTML = 'Draw'
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function game(playerSelection) {
  computerSelection = computerPlay();
  
  if (playerSelection === computerSelection) {
    draw();
  }
  else if (
    playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper'
  ) {
    win(playerSelection, computerSelection);
  } else if(
    playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Rock'
  ){
    lost(playerSelection, computerSelection);
  }

  if(isGameOver()) {
    if(playerScore > computerScore) {
      rock_btn.disabled = true;
      paper_btn.disabled = true;
      scissors_btn.disabled = true;
      finalMessage.innerHTML = 'Congratulation! You won the game!';
    } else if(computerScore > playerScore) {
      rock_btn.disabled = true;
      paper_btn.disabled = true;
      scissors_btn.disabled = true;
      finalMessage.innerHTML = 'You lost the game.';
    }
  }
}

function computerPlay() {
  let array = ['Rock', 'Paper', 'Scissors'];
  return array[Math.floor(Math.random() * array.length)];
};