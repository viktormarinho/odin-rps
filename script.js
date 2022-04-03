
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

function game(){
    computerScore = 0, playerScore = 0, draws = 0
    for (let i=0; i < 5; i++){
        let res = playRound(window.prompt('Choose between rock, paper or scissors'), computerPlay())
        console.log(res[0])
        if (res[1] == 1){
            draws++
        }else if(res[1] == 2){
            playerScore++
        }else if(res[1] == 3){
            computerScore++
        }
    }
    console.log(`Draws: ${draws}\ncomputer score: ${computerScore}\nplayer score: ${playerScore}`)
    if (computerScore == playerScore){
        console.log('Draw!')
    }else if(computerScore > playerScore){
        console.log('You lose!')
    }else if (playerScore > computerScore){
        console.log('You win!')
    }
}