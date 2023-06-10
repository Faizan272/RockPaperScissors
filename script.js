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
    if (userChoice != 'Rock' && userChoice != 'Paper' && userChoice != 'Scissor'){
        console.log("Give correct input and refresh browser");
        return null;
    }
    return userChoice;
}

function winnerChecker(playerChoice, computerChoice){
    if (playerChoice == "Rock" && computerChoice == "Paper"){
        alert("Computer Wins");
        winner = 'Computer';
    } 
    else if (playerChoice == "Paper" && computerChoice == "Scissor"){
        alert("Computer Wins");
        winner = 'Computer';
    }
    else if (playerChoice == "Scissor" && computerChoice == "Rock"){
        alert("Computer Wins");
        winner = 'Computer';
    }
    if (playerChoice == "Paper" && computerChoice == "Rock"){
        alert("Player Wins");
        winner = 'Player';
    } 
    else if (playerChoice == "Scissor" && computerChoice == "Paper"){
        alert("Player Wins");
        winner = 'Player';
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissor"){
        alert("Player Wins");
        winner = 'Player';
    } 
    else if (playerChoice == computerChoice){
        alert("Draw!");
        winner = 'Draw';
    }
    return winner;
}

function game(n){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < n; i ++){
        playerChoice = myChoice();
        computer = computerChoice();
        console.log("You chose " + playerChoice)
        console.log("Computer chose " + computer)
        winner = winnerChecker(playerChoice, computer);
        if (winner == 'Computer')
            computerScore += 1
        else if (winner == 'Player')
            playerScore += 1
        else if (winner == 'Draw'){
            i -= 1;
        }
    }
    console.log("Player : Computer = " +  playerScore  + " : " + computerScore);
}

game(5);
