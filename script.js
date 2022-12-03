"use strict";

//Deciding the winner of the single round
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'Tie';
    }else if(playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "paper" && computerSelection === "rock" ||
             playerSelection === "scissors" && computerSelection === "paper"
            ){
        return true;
    }else if(playerSelection === "scissors" && computerSelection === "rock" ||
             playerSelection === "rock" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "scissors"
            ){
        return false;
    }
}

//Generating computer input selection
function computerPlay() {
    let randomizer = Math.floor(Math.random() * 3); 
    let randomSelection = ["rock", "paper", "scissors"][randomizer];
    return randomSelection;
}

//Storing computer input selection
const computerSelection = computerPlay();


function game() {
    let playerScore = 0;
    let botScore = 0;

    //Looping the game for 5 rounds
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if(playerSelection !==  'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            console.log(`Please enter a valid input: 'rock', 'paper', or 'scissors'`);
            break;
        }
        let result = playRound(playerSelection, computerSelection);

        //
        if(result === 'Tie'){
            console.log("It's a tie");
        }else if(result){
            console.log(`You have won!🥳 ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }else{
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            botScore++;
        }
        console.log(`Player score: ${playerScore} |\tComputer score: ${botScore}`);
    }
    //Printing overall results to the console
    console.log(`\nPlayer's overall score: ${playerScore} |\tComputer's overall score: ${botScore}`);

    //Declaring the winner
    if(playerScore > botScore){
        console.log('Player have won🎊🎊');
    }else if(playerScore == botScore){
        console.log('Scores have been tied!!!');
    }else{
        console.log('Computer have won');
    }
}

//Calling the game function
game();
