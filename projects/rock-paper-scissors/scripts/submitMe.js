
function submitMe(playerSelection) {
    document.getElementById("roundresults").innerHTML = ' ';
    
    

    gameObject.updateScoreboard();

   playRound(playerSelection, computerPlay());
    }

    // if (gameObject.roundCurrent)