let computerMove = '';
function bloxroll() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 39) {
        computerMove = 'Kilo';
    } else if (randomNumber >= 1 / 39 && randomNumber < 2 / 39) {
        computerMove = 'Rocket';
    } else if (randomNumber >= 2 / 39 && randomNumber < 3 / 39) {
        computerMove = 'Spin';
    } else if (randomNumber >= 3 / 39 && randomNumber < 4 / 39) {
        computerMove = 'Chop';
    } else if (randomNumber >= 4 / 39 && randomNumber < 5 / 39) {
        computerMove = 'Spring';
    } else if (randomNumber >= 5 / 39 && randomNumber < 6 / 39) {
        computerMove = 'Bomb';
    } else if (randomNumber >= 6 / 39 && randomNumber < 7 / 39) {
        computerMove = 'Smoke';
    } else if (randomNumber >= 7 / 39 && randomNumber < 8 / 39) {
        computerMove = 'Spike';
    } else if (randomNumber >= 8 / 39 && randomNumber < 9 / 39) {
        computerMove = 'Flame';
    } else if (randomNumber >= 9 / 39 && randomNumber < 10 / 39) {
        computerMove = 'Falcon';
    } else if (randomNumber >= 10 / 39 && randomNumber < 11 / 39) {
        computerMove = 'Ice';
    } else if (randomNumber >= 11 / 39 && randomNumber < 12 / 39) {
        computerMove = 'Sand';
    } else if (randomNumber >= 12 / 39 && randomNumber < 13 / 39) {
        computerMove = 'Dark';
    } else if (randomNumber >= 13 / 39 && randomNumber < 14 / 39) {
        computerMove = 'Diamond';
    } else if (randomNumber >= 14 / 39 && randomNumber < 15 / 39) {
        computerMove = 'Light';
    } else if (randomNumber >= 15 / 39 && randomNumber < 16 / 39) {
        computerMove = 'Rubber';
    } else if (randomNumber >= 16 / 39 && randomNumber < 17 / 39) {
        computerMove = 'Barrier';
    } else if (randomNumber >= 17 / 39 && randomNumber < 18 / 39) {
        computerMove = 'Ghost';
    } else if (randomNumber >= 18 / 39 && randomNumber < 19 / 39) {
        computerMove = 'Magma';
    } else if (randomNumber >= 19 / 39 && randomNumber < 20 / 39) {
        computerMove = 'Quake';
    } else if (randomNumber >= 20 / 39 && randomNumber < 21 / 39) {
        computerMove = 'Buddha';
    } else if (randomNumber >= 21 / 39 && randomNumber < 22 / 39) {
        computerMove = 'Love';
    } else if (randomNumber >= 22 / 39 && randomNumber < 23 / 39) {
        computerMove = 'Kitsune';
    } else if (randomNumber >= 23 / 39 && randomNumber < 24 / 39) {
        computerMove = 'Spider';
    } else if (randomNumber >= 24 / 39 && randomNumber < 25 / 39) {
        computerMove = 'Sound';
    } else if (randomNumber >= 25 / 39 && randomNumber < 26 / 39) {
        computerMove = 'Phoenix';
    } else if (randomNumber >= 26 / 39 && randomNumber < 27 / 39) {
        computerMove = 'Portal';
    } else if (randomNumber >= 27 / 39 && randomNumber < 28 / 39) {
        computerMove = 'Rumble';
    } else if (randomNumber >= 28 / 39 && randomNumber < 29 / 39) {
        computerMove = 'Pain';
    } else if (randomNumber >= 29 / 39 && randomNumber < 30 / 39) {
        computerMove = 'Blizzard';
    } else if (randomNumber >= 30 / 39 && randomNumber < 31 / 39) {
        computerMove = 'Gravity';
    } else if (randomNumber >= 31 / 39 && randomNumber < 32 / 39) {
        computerMove = 'Paw';
    } else if (randomNumber >= 32 / 39 && randomNumber < 33 / 39) {
        computerMove = 'Mammoth';
    } else if (randomNumber >= 33 / 39 && randomNumber < 34 / 39) {
        computerMove = 'T-Rex';
    } else if (randomNumber >= 34 / 39 && randomNumber < 35 / 39) {
        computerMove = 'Dough';
    } else if (randomNumber >= 35 / 39 && randomNumber < 36 / 39) {
        computerMove = 'Shadow';
    } else if (randomNumber >= 36 / 39 && randomNumber < 37 / 39) {
        computerMove = 'Venom';
    } else if (randomNumber >= 37 / 39 && randomNumber < 38 / 39) {
        computerMove = 'Control';
    } else if (randomNumber >= 38 / 39 && randomNumber < 1) {
        computerMove = 'Spirit';
    }

    console.log(computerMove);
    let result = '';
    if (computerMove === 'Kilo') {
        result = 'Congratulations, you rolled Kilo!';
    } else if (computerMove === 'Rocket') {
        result = 'Congratulations, you rolled Rocket!';
    } else if (computerMove === 'Spin') {
        result = 'Congratulations, you rolled Spin!';
    } else if (computerMove === 'Chop') {
        result = 'Congratulations, you rolled Chop!';
    } else if (computerMove === 'Spring') {
        result = 'Congratulations, you rolled Spring!';
    } else if (computerMove === 'Bomb') {
        result = 'Congratulations, you rolled Bomb!';
    } else if (computerMove === 'Smoke') {
        result = 'Congratulations, you rolled Smoke!';
    } else if (computerMove === 'Spike') {
        result = 'Congratulations, you rolled Spike!';
    } else if (computerMove === 'Flame') {
        result = 'Congratulations, you rolled Flame!';
    } else if (computerMove === 'Falcon') {
        result = 'Congratulations, you rolled Falcon!';
    } else if (computerMove === 'Ice') {
        result = 'Congratulations, you rolled Ice!';
    } else if (computerMove === 'Sand') {
        result = 'Congratulations, you rolled Sand!';
    } else if (computerMove === 'Dark') {
        result = 'Congratulations, you rolled Dark!';
    } else if (computerMove === 'Diamond') {
        result = 'Congratulations, you rolled Diamond!';
    } else if (computerMove === 'Light') {
        result = 'Congratulations, you rolled Light!';
    } else if (computerMove === 'Rubber') {
        result = 'Congratulations, you rolled Rubber!';
    } else if (computerMove === 'Barrier') {
        result = 'Congratulations, you rolled Barrier!';
    } else if (computerMove === 'Ghost') {
        result = 'Congratulations, you rolled Ghost!';
    } else if (computerMove === 'Magma') {
        result = 'Congratulations, you rolled Magma!';
    } else if (computerMove === 'Quake') {
        result = 'Congratulations, you rolled Quake!';
    } else if (computerMove === 'Buddha') {
        result = 'Congratulations, you rolled Buddha!';
    } else if (computerMove === 'Love') {
        result = 'Congratulations, you rolled Love!';
    } else if (computerMove === 'Kitsune') {
        result = 'Congratulations, you rolled Kitsune!';
    } else if (computerMove === 'Spider') {
        result = 'Congratulations, you rolled Spider!';
    } else if (computerMove === 'Sound') {
        result = 'Congratulations, you rolled Sound!';
    } else if (computerMove === 'Phoenix') {
        result = 'Congratulations, you rolled Phoenix!';
    } else if (computerMove === 'Portal') {
        result = 'Congratulations, you rolled Portal!';
    } else if (computerMove === 'Rumble') {
        result = 'Congratulations, you rolled Rumble!';
    } else if (computerMove === 'Pain') {
        result = 'Congratulations, you rolled Pain!';
    } else if (computerMove === 'Blizzard') {
        result = 'Congratulations, you rolled Blizzard!';
    } else if (computerMove === 'Gravity') {
        result = 'Congratulations, you rolled Gravity!';
    } else if (computerMove === 'Paw') {
        result = 'Congratulations, you rolled Paw!';
    } else if (computerMove === 'Mammoth') {
        result = 'Congratulations, you rolled Mammoth!';
    } else if (computerMove === 'T-Rex') {
        result = 'Congratulations, you rolled T-Rex!';
    } else if (computerMove === 'Dough') {
        result = 'Congratulations, you rolled Dough!';
    } else if (computerMove === 'Shadow') {
        result = 'Congratulations, you rolled Shadow!';
    } else if (computerMove === 'Venom') {
        result = 'Congratulations, you rolled Venom!';
    } else if (computerMove === 'Control') {
        result = 'Congratulations, you rolled Control!';
    } else if (computerMove === 'Spirit') {
        result = 'Congratulations, you rolled Spirit!';
    }

    //alert(`Computer picked ${computerMove}.  ${result}`);
    document.getElementById('result').innerHTML = `${result}`
}
