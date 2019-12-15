function getMoveName(moveId) {
    if (moveId == 1) {
        return 'kamień';
    } else if (moveId == 2) {
        return 'papier';
    } else if (moveId == 3) {
        return 'nożyce';
    }
}

function displayResult(computerMove, playerMove) {
    if (playerInput == randomNumber) {
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

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch:\n1 -> kamień\n2 -> papier\n3 -> nożyce');
let playerMove;
if (playerInput === null) {
    printMessage('Może jednak zagrasz ze mną...?\nWciśnij F5')
} else if ((playerInput < 1 || playerInput > 3) || playerInput === '') {
    printMessage('Nieprawidłowy wybór. Wybierz liczbę z zakresu od 1 do 3');
} else {
    playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove);
}