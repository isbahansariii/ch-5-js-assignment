/*
Objective:
Create a JavaScript guessing game where the user attempts to guess a randomly generated number within a specified range. The game provides feedback on each guess and continues until the correct number is guessed or the user exits by entering 0. Demonstrates basic user interaction and control flow.
*/


// Guessing game
console.log("\n\n5.1");

const max = 10;
const randomNum = Math.floor(Math.random() * max) + 1;
let check = 0;
while(!check){
    let guess = Number(prompt(`Enter a number from 1 to ${max}:\nFor exit press 0.`));
    if(guess === 0){
        break;
    }
    if(randomNum === guess){
        alert("Bingo! You won.");
        check = 1;
    }
    else if(randomNum > guess){
        alert("Guesse is Low, Try again!");
    }
    else if(randomNum < guess){
        alert("Guess is High, Try again!");
    }
    else{
        alert("It is not a number. Try again with the number.");
    }
}