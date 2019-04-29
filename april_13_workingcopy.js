
        

           

                function playRound(playerSelection, computerSelection) {

                    let matchresult = "Something went wrong";
                    // before bug I got player input and computer input inside of this function.
                         
                        let computerScore = 0;
                        let playerScore = 0;
                        if (playerSelection == computerSelection) {
                        matchresult = "tie" ;
                
                        document.getElementById("output").innerHTML = 'That was a tie, we are going to redo this round';
                        return 'tie'; 
                        
                        } else {
                                    switch(playerSelection) {
                                        case "rock" :
                                        
                                    
                                            if (computerSelection == "scissors") {
                                                matchresult = "Player Win" ;
                                                playerScore++
                                        
                                                } else {
                                                matchresult = " Computer Wins";
                                                computerScore++
                                                }
                                                break;
                                        case "paper" :
                                                if (computerSelection == "rock") {
                                                matchresult = "Player Wins" ;
                                                playerScore++
                                                } else {
                                                matchresult = " Computer Wins";
                                                computerScore++
                                                }
                                                break;
                                        
                                        case  "scissors" :
                                        
                                                if (computerSelection == "paper") {
                                                matchresult = "Player Wins" ;
                                                playerScore++
                                                } else {
                                                    matchresult = " Computer Wins";
                                                    computerScore++
                                                }
                                        
                                    
                                
                                    } 
                    
                                 } 
                                 
                      results = 'The player chose'  + ' ' + playerSelection + ' ' + 'and the computer chose' +  ' ' +    computerSelection +  '   the result is a ' + '' + matchresult
                    document.getElementById("roundresults").innerHTML = results;
                    document.getElementById("output").innerHTML = playerScore ;
                    //alert("Computer Score is " + computerScore);
                
                    return results;
                    
                    
                } 