
function submitMe(playerSelection) {
    document.getElementById("roundresults").innerHTML = ' ';
    
    /*document.getElementById("currentRound").innerHTML = gameObject.roundCurrent;
    //need to change gameTally to roundTally or something more appropriate so everything
    //matches. */

    gameObject.updateScoreboard();

   playRound(playerSelection, computerPlay());
    }

    // if (gameObject.roundCurrent)