options = ['Rock', 'Paper', 'Scissor'];
function computerChoice(){
    index = Math.floor(Math.random()*options.length);
    choice = options[index];
    return choice;
}

function myChoice(){
    index = prompt('Press 1 for rock, 2 for paper and 3 for scissors');
    if (index == 1)
        userChoice = 'Rock';
    else if (index == 2)
        userChoice = 'Paper';
    else if (index == 3)
        userChoice = 'Scissor';
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

winnerChecker(playerChoice, computer);