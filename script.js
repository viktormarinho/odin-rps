let computerScore = 0;
let playerScore = 0;
let draws = 0;

const startBtn = document.querySelector('#btn');
const gameContainer = document.querySelector('.game-container');

startBtn.addEventListener('click', (e) => {
    startBtn.parentElement.style.opacity = '0%';
    gameContainer.style.opacity = '100%';
});

const playButtons = document.querySelectorAll('.game-btn');
playButtons.forEach( (button) => {
    button.addEventListener('click', clickButton);
    // AAAAAAAAA ARRUMAR ISSO URGENTE PQP
    button.param = button;
});

// ESSA FUNC TEM QUE FUNFAR PLO AMOR D DEUS!
function clickButton(evt){
    let button = evt.currentTarget.param;
    button.classList.remove('game-btn');
    const jogada = button.classList.value;

    
    let res = playRound(jogada, computerPlay())
    document.querySelector('.result').textContent = res[0];
    if (res[1] == 1){   
        draws++;
    }else if(res[1] == 2){
        playerScore++;
    }else if(res[1] == 3){
        computerScore++;
    }

    button.classList.add('game-btn');

    if (playerScore + draws + computerScore == 5){
        finalizar();
    }
}
function finalizar(){
    if (computerScore == playerScore){
        document.querySelector('.result2').textContent = 'Draw!';
    }else if(computerScore > playerScore){
        document.querySelector('.result2').textContent = 'You Lose!';
    }else if (playerScore > computerScore){
        document.querySelector('.result2').textContent = 'You Win!';
    }
    document.querySelector('.result').textContent = `Draws: ${draws}\ncomputer score: ${computerScore}\nplayer score: ${playerScore}`;
    playerScore = 0; 
    draws = 0; 
    computerScore = 0;

    playButtons.forEach( (button) => {
        button.removeEventListener('click', );
    });
}


function computerPlay(){
    let random = Math.floor(Math.random() * 3) + 1

    if (random == 1){
        return 'Rock'
    }else if (random == 2){
        return 'Paper'
    }else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

    if (playerSelection == computerSelection){
        return [`Draw! both players used ${playerSelection}`, 1]
    }else if ((playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock')){
        return [`You win! ${playerSelection} beats ${computerSelection}`, 2]
    }else if ((computerSelection == 'Scissors' && playerSelection == 'Paper') || (computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock')){
        return [`You lose! ${computerSelection} beats ${playerSelection}`, 3]
    }
    return console.error('alguma coisa deu merda');
}


