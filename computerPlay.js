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
     
  
  
 }
   return randomResult;
 
        }


        