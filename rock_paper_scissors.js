/*
a program that determines the winner of a Rock,Paper,or Scissors game.
*javascript-syntax-part-i*
__author: gordon.amamoo@amalitech.org
*/

//validate user input
const getUserChoice = userInput =>{
  //normalizing userInput to lower case string
  userInput=userInput.toLowerCase()

  //accept "bomb" cheat code
  if(userInput==="bomb")return userInput;

  if (userInput==="rock"||   userInput==="paper"||userInput==="scissors"){return userInput}
  else { console.log(`Error: '${userInput}' is not valid.\n`+
  " It must be either 'rock','paper' or 'scissors'")}
}

//simulating a computer's choice
const getComputerChoice=()=>{
//generate a random number between 0 and 2 inclusive
  const randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
     return "rock";
    case 1:
     return "paper";
    case 2:
     return "scissors"
  }
}
const determineWinner= (userChoice,computerChoice)=>{
  let message;
  const userMessage="user won the game!";
  const computerMessage="computer won the game!";
  //user wins for "bomb" input
  if (userChoice==="bomb")return console.log(userMessage);
  
  if (userChoice===computerChoice){
    return console.log("The game was a tie!");
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      message = computerMessage;
    } else {
      message = userMessage;
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === "scissors") {
      message = computerMessage;
    } else { message = userMessage }
  } else if (userChoice === 'scissors') {
    if (computerChoice === "rock") {
      message = computerMessage;
    } else { message = userMessage }
  }
  console.log(message)
}


const playGame=()=>{
const userChoice=getUserChoice('rock');
const computerChoice=getComputerChoice();
console.log(`user: ${userChoice}\n`+
`computer: ${computerChoice}`);
determineWinner(userChoice,computerChoice)
}
playGame();

