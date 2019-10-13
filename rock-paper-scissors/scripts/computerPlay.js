function computerPlay() {
    randomResult =  Math.floor(Math.random() * 3);
   
   switch(randomResult) {
   case 0:
     randomResult = "rock";
     break;
   case 1:
     randomResult = "paper";
     break;
   case 2:
     randomResult = "scissors";
     
  // in order to make this modular for other programs , I can take out the rock, paper , scissors so this function is not hard coded to this specific game.
  // The rock , paper, scissors should be passed in as arguments to this function.  I am not exactly sure yet how to create a function that accepts an indefinite number
  // of arguments.  I also would like to make the number of arguments passed = what Math.floor(Math.random() is multiplied by.  
  // for example --- random thought so what I can do is have the randomResult parameter accept an array.  So in this case I could declare the variable rpsChoices
  // like so : const rpsChoices = ['Rock','Paper','Scissors']; then I could go computerPlay(rpsChoices);  
  //  and randomResult = Math.floor(Math.random() * rpsChoices.length); (of course I would need to put the name of the paramater instead of the argument)
 }
   return randomResult;
 
        }


        