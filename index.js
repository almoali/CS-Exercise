let computerMove = '';

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    let result = '';
    if (computerMove === 'Rock') {
        result = 'tie';
    } else if (computerMove === 'Paper') {
        result = 'you lose';
    } else {
        result = 'you win';
    }

    document.getElementById('result').innerHTML = `You picked Rock. Computer picked ${computerMove}. ${result}.`;
}

function pickComputerMove2() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    let result = '';
    if (computerMove === 'Rock') {
        result = 'you win';
    } else if (computerMove === 'Paper') {
        result = 'tie';
    } else {
        result = 'you lose';
    }

    document.getElementById('result2').innerHTML = `You picked Paper. Computer picked ${computerMove}. ${result}.`;
}

function pickComputerMove3() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    let result = '';
    if (computerMove === 'Rock') {
        result = 'you lose';
    } else if (computerMove === 'Paper') {
        result = 'you win';
    } else {
        result = 'tie';
    }

    document.getElementById('result3').innerHTML = `You picked Scissors. Computer picked ${computerMove}. ${result}.`;
}

document.getElementById('rockBtn').addEventListener('click', pickComputerMove);
document.getElementById('paperBtn').addEventListener('click', pickComputerMove2);
document.getElementById('scissorsBtn').addEventListener('click', pickComputerMove3);
