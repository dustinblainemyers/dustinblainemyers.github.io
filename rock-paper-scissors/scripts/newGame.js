/*
Vison:

This function takes no parameters, yet .  I understand that it will need to to have parameters to qualify as "functional programming".  Later I may wrap this as a method inside of a class that I create.

Description:

This function is meant to be called from an event listener.  It declares a variable , playerSelection, and sets it equal to the playerInput HTML element.
*/

    

function newGame() {
    var x = document.getElementById("game");
    if (x.style.display === "none") {
      x.style.display = "block";
  
      return document.getElementById("game").style.display = "block"; 
    }
  
   
  }
