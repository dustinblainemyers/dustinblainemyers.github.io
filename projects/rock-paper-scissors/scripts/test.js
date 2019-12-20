const gameObject = {

    computerScore: 0, 
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
    },

    
    

};