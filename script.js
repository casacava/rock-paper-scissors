function computerPlay() {
   const pick = ['rock', 'paper', 'scissors'];
   return pick[Math.floor(Math.random()) * pick.length];
}