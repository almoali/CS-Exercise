let computerMove = '';
function pickHeadOrTails() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 0.5) {
        computerMove = 'Head';
    } else if (randomNumber >= 0.5 && randomNumber < 1) {
        computerMove = 'Tails';
    }
    console.log(computerMove);
    let result = '';
    if (computerMove === 'Head') {
        result = 'You win';
    } else if (computerMove === 'Tails') {
        result = 'You lose';
    }
    //alert(`Computer picked ${computerMove}. `);
    document.getElementById('result').innerHTML = `Computer picked ${computerMove}. ${result}`
}

function pickHeadOrTails2() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 0.5) {
        computerMove = 'Head';
    } else if (randomNumber >= 0.5 && randomNumber < 1) {
        computerMove = 'Tails';
    }
    console.log(computerMove);
    let result = '';
    if (computerMove === 'Tails') {
        result = 'You win';
    } else if (computerMove === 'Head') {
        result = 'You lose';
    }
    //alert(`Computer picked ${computerMove}. `);
    document.getElementById('result').innerHTML = `Computer picked ${computerMove}. ${result}`
}