options = ['Rock', 'Paper', 'Scissor'];
function computerChoice(){
    index = Math.floor(Math.random()*options.length);
    choice = options[index];
    return choice;
}

function myChoice(){
    userChoice = prompt('Enter rock, paper or scissor');
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice.charAt(0).toUpperCase() +userChoice.slice(1);
    console.log(userChoice);
    return userChoice;
}
playerChoice = myChoice();
computer = computerChoice();

console.log("You chose " + playerChoice)
console.log("Computer chose " + computer)
function winnerChecker(playerChoice, computerChoice){
    if (playerChoice == "Rock" && computerChoice == "Paper"){
        alert("Computer Wins");
    } 
    else if (playerChoice == "Paper" && computerChoice == "Scissor"){
        alert("Computer Wins");
    }
    else if (playerChoice == "Scissor" && computerChoice == "Rock"){
        alert("Computer Wins");
    }
    if (playerChoice == "Paper" && computerChoice == "Rock"){
        alert("Player Wins");
    } 
    else if (playerChoice == "Scissor" && computerChoice == "Paper"){
        alert("Player Wins");
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissor"){
        alert("Player Wins");
    } 
    else if (playerChoice == computerChoice){
        alert("Draw!");
    }
}

//winnerChecker(playerChoice, computer);