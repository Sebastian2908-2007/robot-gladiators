var playerName = window.prompt("whatis your robot's name?");
var playerMoney= 10;
var playerHealth = 200;
var playerAttack = 50;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; console.log(enemyNames); 
var enemyHealth = 50;
var enemyAttack= 12;

var fight = function(enemyName) { //fight function statements
    //repeat and execute as long as enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {//ask to fight or pay to skip
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
          // if player chooses to skip  confirm and stop the loop
         if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + "has decided to skip this fight. goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        
               //remove enemy's health by subtracting the amount set in the player Attack variable
               enemyHealth = enemyHealth -playerAttack;
               console.log(
                   playerName + "atacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
               );
        
               // check enemy's health
               if (enemyHealth <= 0) {
                   window.alert(enemyName + "has died");
                   
                   // award player money for winning
                   playerMoney = playerMoney =20;
                   // leave while loop since enemy is dead
                   break;
               }else {
                   window.alert(enemyName + "still has" + enemyHealth +"health left.");
               }
        
               //remove players health by subtracting the amount set in the enemyAttack variable
               playerHealth = playerHealth - enemyAttack;
               console.log(
                   enemyName + "atacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining"
               );
        
               // check players health
               if (playerHealth <= 0) {
                   window.alert(playerName + "has died");
                   //leave while loop if player is dead
                   break;
               } else {
                   window.alert(playerName + "still has" + playerHealth + "health left.");
                }
               
           }

    };
    
// fight enemys by looping over them and fighting one at a time

var startGame = function() { //debugger;
 //reset player stats
 playerHealth = 200;
 playerAttack = 10;
 playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
          window.alert("Welcome to robot Gladiators! round " + (i + 1) );

          // pick new enemy to fight based on the index of the index of the enemyNames array
          var pickedEnemyName = enemyNames[i];

          //reset enemyHealth before starting new fight
       enemyHealth =50;
        // use debugger to pause script from running and sheck whats going on at that moment in the code
       // debugger;
      
       // pass the pickedEnemyName variables value into the fight function, where it will assume the value of enemyName parameter
      fight(pickedEnemyName);
      }
    else {
        break;
     }
    }
        // after the loop ends , player is either out if health or enemies to fight
       endGame();
        
};

  
//function to end entire game
var endGame = function() {
    // if player is still alive, player wins
     if (playerHealth > 0) {
         window.alert("Great job , you've survived the game! you now have a score of" + playerMoney + ".");
     }
        else {
         window.alert("You've lost your robot in battle");
     }
     // asl player if they'd  like to play again
     var playAgainConfirm = window.confirm("Would you like to play again?");

     if (playAgainConfirm) {
         // restart the game
         startGame();
     }
     else {
         window.alert("Thank you for playing Robot Gladiators! Come Back soon!");
     }
    };
startGame();

    //make var for each new  operator
    //create a function