options = ['Rock', 'Paper', 'Scissor'];
function computerChoice(){
    index = Math.floor(Math.random()*options.length);
    choice = options[index]
    console.log(choice);
}

function myChoice(){
    index = prompt('Press 1 for rock, 2 for paper and 3 for scissors');
    let userChoice;
    if (index == 1)
        userChoice = 'Rock';
    else if (index == 2)
        userChoice = 'Paper';
    else if (index == 3)
        userChoice == 'Scissor';
    console.log(userChoice);
}

myChoice();
computerChoice();