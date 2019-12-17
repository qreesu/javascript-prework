const playGame = function (playerInput) {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove);
}

const getMoveName = function (moveId) {
    if (moveId == 1) {
        return 'kamień';
    } else if (moveId == 2) {
        return 'papier';
    } else if (moveId == 3) {
        return 'nożyce';
    }
}

const displayResult = function (computerMove, playerMove) {
    if (playerMove === computerMove) {
        printMessage('Ty i komputer wybraliście ' + computerMove.toUpperCase() + '. Zatem jest remis w tej rundzie')
    } else {
        printMessage('Komputer wybrał ' + computerMove.toUpperCase() + ', a Ty wybrałaś/eś ' + playerMove.toUpperCase());
        if ((playerMove === 'kamień' && computerMove === 'nożyce') || (playerMove === 'papier' && computerMove === 'kamień') || (playerMove === 'nożyce' && computerMove === 'papier')) {
            printMessage('Wygrywasz rundę :) Brawo!!');
        } else {
            printMessage('Niestety, tym razem wygrywa komputer :(');
        }
    }
}

const printMessage = function (msg) {
    const div_messages = document.querySelector('#messages')
    const new_div_messages = document.createElement('div')
    new_div_messages.innerText = msg
    div_messages.prepend(new_div_messages)
}

const clearMessages = function () {
    const div_messages = document.querySelector('#messages')
    div_messages.innerText = ''
}