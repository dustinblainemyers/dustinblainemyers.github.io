
        

           





                function playRound(playerSelection, computerSelection) {

                gameObject.playerChoice = playerSelection;
                gameObject.computerChoice = computerSelection;
                    
                    
                    
                         
                        
                        if (playerSelection === computerSelection) {
                        gameObject.tie++
                
                        
                        
                        } else if (computerSelection === "scissors" && playerSelection === "rock" ||
                                   computerSelection === "rock" && playerSelection === "paper" ||
                                   computerSelection === "paper" && playerSelection == "scissors") {

                                    
                                    gameObject.playerScore++;

                        } else {
                                    
                                    gameObject.computerScore++;
                        }
                                            
                                              
                    gameObject.updateRound()
                    
                    gameObject.updateScoreboard();


                    
                    
                    

                    
                
                    
                    
                    
                } 



                