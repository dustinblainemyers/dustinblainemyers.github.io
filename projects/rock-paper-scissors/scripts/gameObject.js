const gameObject = {

    computerScore: 0, /* iterates every time the computer wins a round.  Future improvements will make this "player2Score" instead.  This will 
                          de-couple this object from the computers plays .  In order to play as a computer I will add an abstraction layer that interacts 
                          with the game object indirectly whenever a computer player is involved.*/
    playerScore: 0,
    roundCurrent: 1,
    tie: 0,
    playerChoice:'',
    computerChoice:'',
    gameWinner: 'undecided',

    newGame(){

        this.computerScore = 0;
        this.playerScore = 0;
        this.roundCurrent = 1;
        
        this.tie = 0;
        this.gameWinner = 'undecided',
        this.updateScoreboard();
        document.getElementById("newGame").style.display = "none"
        document.getElementById("PlayerSelection").style.display = "block"
        
    },

    updateScoreboard() {

        document.getElementById("currentRound").innerHTML = this.roundCurrent;
        document.getElementById("playerScore").innerHTML = this.playerScore ;
        document.getElementById("computerScore").innerHTML = this.computerScore ;
        document.getElementById("tie").innerHTML = this.tie ;
        document.getElementById("gameWinner").innerHTML = this.gameWinner ;

        
    },

    updateRound() {

        if(this.roundCurrent < 5) {
            this.roundCurrent++

        } else {

        this.decideGameWinner();
            
            
        }
        
        
    },

    decideGameWinner() {
        if (this.playerScore === this.computerScore) {
            this.gameWinner = 'Tie';
            } else if (this.playerScore > this.computerScore) {

            this.gameWinner = 'Player';
            } else {

            this.gameWinner = 'Computer';
            }
        
            document.getElementById("newGame").style.display = "block";
            document.getElementById("PlayerSelection").style.display = "none";
            document.getElementById("endGameMessage").style.display = "block";
            
    }
    // have a method to iterate the roundCurrent (current round).  Have a way of returning or doing a try/catch 

};