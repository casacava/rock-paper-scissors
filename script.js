// variable making
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const pick = ['rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
// const desc = document.querySelector("#desc3");
const container = document.querySelector("#results-container");

// body.addEventListener("click", skipAnime());
// body.addEventListener("keydown", skipAnime());
buttons.forEach((button) => {
   button.addEventListener("click", () => {
     const img = button.querySelector("img");
     playerSelection = img.alt.toLowerCase();
      playRound(playerSelection, computerSelection);
      if (playerScore === 5 || computerScore === 5) {
       declareWinner();
      }
   });
});
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


//function for results
function displayResults(str) {
   container.animate([{ opacity: 0 }, { opacity: 1 }], {
     duration: 300,
     fill: "forwards",
     iterations: 1,
     delay: 0,
     easing: "ease-out",
   });
   container.textContent = str;
 }
 //function for winning logic
 function declareWinner() {
   rplContent();
   if (playerScore > computerScore) {
     endDesc.textContent = "You win! Congrats champ!!";
     returnMainBtn.innerText = "Play Again";
   } else {
     endDesc.textContent = "You lost......";
     returnMainBtn.innerText = "Try Again?";
   }
   fadeIn();
   let endDescSpan = endDesc.querySelectorAll("span");
   endDescSpan = Array.from(endDescSpan);
 
   endDescSpan[endDescSpan.length - 1].ontransitionend = () => {
     returnMainBtn.classList.add("fade-in");
   };
 }
 
 function rplContent() {
   main.classList.add("disappear");
   endAlrt.classList.remove("disappear");
   // desc.classList.remove("animate");
   endDesc.classList.add("animate");
 
   returnMainBtn.addEventListener("click", () => {
     main.classList.remove("disappear");
     endAlrt.classList.add("disappear");
   //   desc.classList.add("animate");
     returnMainBtn.classList.remove("fade-in");
     resetGame();
   });
 }

 //restart game
function resetGame() {
   fadeIn();
   container.textContent = "";
   playerScore = 0;
   computerScore = 0;
   keepPlayerScore();
   keepCompScore();
 }
 
function keepPlayerScore() {
   let playerScoreBox = document.querySelector("#player-score");
 
   playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
     duration: 300,
     fill: "forwards",
     iterations: 1,
     delay: 0,
     easing: "ease-out",
   });
 
   playerScoreBox.textContent = playerScore;
 }
 function keepCompScore() {
   let computerScoreBox = document.querySelector("#computer-score");
 
   computerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
     duration: 300,
     fill: "forwards",
     iterations: 1,
     delay: 0,
     easing: "ease-out",
   });
 
   computerScoreBox.textContent = computerScore;
 }
