let correctNumber = getRandomNumber()

window.onload = function() {
    document.getElementById('number-submit').addEventListener('click', playgame);
    document.getElementById('restart-game').addEventListener('click', initgame);
}

function playgame() {
    let numberGuess = document.getElementById('number-guess').value;
    console.log(numberGuess, correctNumber);
    displayResult(numberGuess)  
}

function initgame() {
    
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100)+1;
    return randomNumber;
}

function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
        showNumberAbove();
    } else if (numberGuess < correctNumber) {
        showNumberBelow();
    } else {
        showYouWon();
    }
}

function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType) {
        case 'warning':
            dialog = "<div class='alert alert-warning' role='alert'>";
            break;
        case 'won':
            dialog = "<div class='alert alert-success' role='alert'>";
            break;
    }
    dialog += text;
    dialog += '</div>';
    return dialog;
}

function showYouWon(){
    const text = 'Awesome job! You got it!';
    let dialog = getDialog('won', text);
    
    document.getElementById('result').innerHTML = dialog
}

function showNumberAbove(){
    const text = 'Your guess is too high!';
    let dialog = getDialog('warning', text);

    document.getElementById('result').innerHTML = dialog
}

function showNumberBelow(){
    const text = 'Your guess is too low!';
    let dialog = getDialog('warning', text);

    document.getElementById('result').innerHTML = dialog
}