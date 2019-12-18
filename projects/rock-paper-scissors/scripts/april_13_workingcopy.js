
        

           





                function playRound(playerSelection, computerSelection) {

                    let matchresult = '';
                    
                         
                        
                        if (playerSelection == computerSelection) {
                        playRound.matchresult = "tie" ;
                
                        document.getElementById("tieNotification").innerHTML = 'That was a tie, we are going to redo this round';
                        return 'tie'; 
                        
                        } else {
                                    switch(playerSelection) {
                                        case "rock" :
                                        
                                    
                                            if (computerSelection == "scissors") {
                                                playRound.matchresult = "Player Win" ;
                                                gameObject.playerScore++;
                                        
                                                } else {
                                                playRound.matchresult = " Computer Wins";
                                                gameObject.computerScore++;
                                                }
                                                break;
                                        case "paper" :
                                                if (computerSelection == "rock") {
                                                playRound.matchresult = "Player Wins" ;
                                                gameObject.playerScore++;
                                                } else {
                                                playRound.matchresult = " Computer Wins";
                                                gameObject.computerScore++;
                                                }
                                                break;
                                        
                                        case  "scissors" :
                                        
                                                if (computerSelection == "paper") {
                                                playRound.matchresult = "Player Wins" ;
                                                gameObject.playerScore++;
                                                } else {
                                                    playRound.matchresult = " Computer Wins";
                                                    gameObject.computerScore++;
                                                }
                                        
                                    
                                
                                    } 
                    
                                 } 
                    
                    gameObject.roundCurrent++;
                    let results = 'The player chose'  + ' ' + playerSelection + ' ' + 'and the computer chose' +  ' ' +    computerSelection +  '   the result is a ' + '' + playRound.matchresult
                    document.getElementById("roundresults").innerHTML = results;

                    gameObject.updateScoreboard();
                    
                
                    
                    
                    
                } 