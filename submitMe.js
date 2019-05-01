
/*
Vison:

This function takes no parameters, yet .  I understand that it will need to to have parameters to qualify as "functional programming".  Later I may wrap this as a method inside of a class that I create.

Description:

This function is meant to be called from an event listener.  It declares a variable , playerSelection, and sets it equal to the playerInput HTML element.
*/

function submitMe() {
    document.getElementById("roundresults").innerHTML = ' ';
    document.getElementById("output").innerHTML = 'shouldnotseethis';
    document.getElementById("gameTally").innerHTML = gameObject.roundCurrent;
    //need to change gameTally to roundTally or something more appropriate so everything 
    //matches.

    playerSelection = inputSanitization(document.getElementById("playerInput").value); // i repeat myself with getElementId , this could
    //be a function instead.
    playRound(playerSelection, computerPlay());
    }
    
    
    function inputSanitization(getInput) {
       
     getInput = getInput.toLowerCase();
    
     switch(getInput) {
      case 'paper' : 
       getInput = 'paper';
       break ;
      case  'rock' :
       getInput = 'rock';
       break ;
      case 'scissors' :
       getInput = 'scissors';
       break ;
       default: getInput = "hello" ;
       }
         
        
            return getInput;
            
            
            
           }