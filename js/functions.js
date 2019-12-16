function playGame(playerInput) {
	clearMessages();
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);
	displayResult(computerMove, playerMove);
}

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

function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}
