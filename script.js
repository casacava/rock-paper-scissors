const pick = ['rock', 'paper', 'scissors'];

//function for random computer pick
function computerPlay() {
   return pick[~~(Math.random * pick.length)];
}

//function for single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
   computerSelection = computerPlay().toLowerCase();
   playerSelection = playerSelection().toLowerCase();

if (computerSelection == playerSelection) {
   displayResults("Tied score!");   
} else if (
   (computerSelection == "rock" && playerSelection == "scissors") ||
   (computerSelection == "scissors" && playerSelection == "paper") ||
   (computerSelection == "paper" && playerSelection == "rock")
 ) {
   computerScore = ++computerScore;
   keepCompScore();
   if (computerScore === 1 || computerScore === 3) {
      displayResults(`Sorry! You lost! ${computerSelection} beats ${playerSelection}.`);
      }
else if (computerScore === 2 || computerScore === 4) {
   displayResults(
      `Ughhhhhhh. $(computerSelection) beats $(playerSelection).`
   );
} else {
   displayResults(`${computerSelection} beats ${playerSelection}!`);
}
} else {
   playerScore = ++playerScore;
   keepPlayerScore();
   if (playerScore === 1 || playerScore === 3) {
      displayResults(`Yay! You won! ${playerSelection} beats ${computerSelection}`);
   } else if (playerScore === 2 || playerScore === 4) {
      displayResults(`Congrats! ${playerSelection} beats ${computerSelection}`)
   } else {
      displayResults(`${playerSelection} beats ${computerSelection}!`);
   } 
}
}


