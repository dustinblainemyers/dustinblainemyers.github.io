const gameObject = {

    computerScore: 0, /* iterates every time the computer wins a round.  Future improvements will make this "player2Score" instead.  This will 
                          de-couple this object from the computers plays .  In order to play as a computer I will add an abstraction layer that interacts 
                          with the game object indirectly whenever a computer player is involved.*/
    playerScore: 0,
    roundCurrent: 1,

    newGame(){

        this.computerScore = 0;
        this.playerScore = 0;
        this.roundCurrent = 1;
        this.updateScoreboard();
    },

    updateScoreboard() {

        document.getElementById("currentRound").innerHTML = this.roundCurrent;
        document.getElementById("playerScore").innerHTML = this.playerScore ;
        document.getElementById("computerScore").innerHTML = this.computerScore ;
    }
    // have a method to iterate the roundCurrent (current round).  Have a way of returning or doing a try/catch 

};