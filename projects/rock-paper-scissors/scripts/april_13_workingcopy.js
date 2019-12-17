
        

           

                function playRound(playerSelection, computerSelection) {

                    let matchresult = "Something went wrong";
                    // before bug I got player input and computer input inside of this function.
                         
                        
                        if (playerSelection == computerSelection) {
                        matchresult = "tie" ;
                
                        document.getElementById("tieNotification").innerHTML = 'That was a tie, we are going to redo this round';
                        return 'tie'; 
                        
                        } else {
                                    switch(playerSelection) {
                                        case "rock" :
                                        
                                    
                                            if (computerSelection == "scissors") {
                                                matchresult = "Player Win" ;
                                                gameObject.playerScore++;
                                        
                                                } else {
                                                matchresult = " Computer Wins";
                                                gameObject.computerScore++;
                                                }
                                                break;
                                        case "paper" :
                                                if (computerSelection == "rock") {
                                                matchresult = "Player Wins" ;
                                                gameObject.playerScore++;
                                                } else {
                                                matchresult = " Computer Wins";
                                                gameObject.computerScore++;
                                                }
                                                break;
                                        
                                        case  "scissors" :
                                        
                                                if (computerSelection == "paper") {
                                                matchresult = "Player Wins" ;
                                                gameObject.playerScore++;
                                                } else {
                                                    matchresult = " Computer Wins";
                                                    gameObject.computerScore++;
                                                }
                                        
                                    
                                
                                    } 
                    
                                 } 
                                 
                      results = 'The player chose'  + ' ' + playerSelection + ' ' + 'and the computer chose' +  ' ' +    computerSelection +  '   the result is a ' + '' + matchresult
                    document.getElementById("roundresults").innerHTML = results;
                    document.getElementById("playerScore").innerHTML = gameObject.playerScore ;
                    document.getElementById("computerScore").innerHTML = gameObject.computerScore ;

                    //alert("Computer Score is " + computerScore);
                
                    return results;
                    
                    
                } 