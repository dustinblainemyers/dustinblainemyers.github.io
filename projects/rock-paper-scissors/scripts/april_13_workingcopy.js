
        

           





                function playRound(playerSelection, computerSelection) {

                    let matchresult = '';
                    
                    
                    
                         
                        
                        if (playerSelection == computerSelection) {
                        gameObject.tie++
                
                        
                        
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
                    
                    gameObject.updateRound()
                    
                    gameObject.updateScoreboard();


                    
                    
                    

                    
                
                    
                    
                    
                } 



                