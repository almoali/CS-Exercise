function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    }
    // Update the result in the corresponding div
    if (playerMove === 'rock') {
        document.getElementById('result').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    } else if (playerMove === 'paper') {
        document.getElementById('result2').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    } else if (playerMove === 'scissors') {
        document.getElementById('result3').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    }
}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    return computerMove;
}
