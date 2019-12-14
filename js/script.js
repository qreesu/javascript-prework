let roundNumber = Math.floor(Math.random() * 3 + 1);

let computerMove;
if (roundNumber === 1) {
  computerMove = 'kamień';
} else if (roundNumber === 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}

let playerInput = prompt('Wybierz swój ruch!\n1: kamień\n2: papier\n3: nożyce.');

let playerMove;
if (playerInput === '1') {
  playerMove = 'kamień';
} else if (playerInput === '2') {
  playerMove = 'papier';
} else if (playerInput === '3') {
  playerMove = 'nożyce';
} else {
  console.log('nieprawidłowy wybór! - wprowadź liczbę z zakresu od 1 do 3')
}

if (playerInput < 4 && playerInput !== '') {
  if (playerInput == roundNumber) {
    console.log('remis');
  } else if ((playerInput === '1' && roundNumber === 3) || (playerInput === '2' && roundNumber === 1) || (playerInput === '3' && roundNumber === 2)) {
    console.log('wygrałeś rundę :) brawo!!')
  } else {
    console.log('komputer wygrał rundę :(')
  }
  console.log('Ty wybrałeś: ' + playerMove);
  console.log('Komp wybrał: ' + computerMove);
}