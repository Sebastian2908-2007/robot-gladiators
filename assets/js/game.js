

var fight = function(enemy) {
    
    //fight function statements
    //repeat and execute as long as enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {//ask to fight or pay to skip
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
          // if player chooses to skip  confirm and stop the loop
         if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + "has decided to skip this fight. goodbye!");
                // subtract money from playerMoney for skipping
                playerInfo.money = playerInfo.money - 10
               // playerInfo.money = math.max(0, playerInfo.money - 10)
                //console.log("playerInfo.money", playerInfo.money);
                shop();
                break;
            }
        }
        
               // generate random damage value based on player's attack power
               var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

               enemy.health = Math.max(0, enemy.health - damage);
        
               // check enemy's health
               if (enemy.health <= 0) {
                   window.alert(enemy.name + "has died");
                   
                   // award player money for winning
                   playerInfo.money = playerInfo.money =20;
                   // leave while loop since enemy is dead
                   break;
               }else {
                   window.alert(enemy.name + "still has" + enemy.health +"health left.");
               }
        
               //remove players health by subtracting the amount set in the enemy.attack variable
               var damage = randomNumber(enemy.attack - 3, enemy.attack);

               playerInfo.health = Math.max(0, playerInfo.health - damage);
        
               // check players health
               if (playerInfo.health <= 0) {
                   window.alert(playerInfo.name + "has died");
                   //leave while loop if player is dead
                   break;
               } else {
                   window.alert(playerInfo.name + "still has" + playerInfo.health + "health left.");
                }
               
           }

    };
    
// fight enemys by looping over them and fighting one at a time

var startGame = function() { //debugger;
 //reset player stats
 playerInfo.reset();

  for(var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
          window.alert("Welcome to robot Gladiators! round " + (i + 1) );
         // debugger;

          // pick new enemy to fight based on the index of the index of the enemy.names array
          var pickedEnemyObj = enemyInfo[i];
          
       
          //reset enemy.health before starting new fight
          pickedEnemyObj.health = randomNumber(40, 60);
           // use debugger to pause script from running and sheck whats going on at that moment in the code
          // debugger;
      
          // pass the pickedEnemy.name variables value into the fight function, where it will assume the value of enemy.name parameter
          fight(pickedEnemyObj);
          }
          if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            //ask if player wants touse store before next roun      
         var storeConfirm = window.confirm("the fight is over visit the store before next round? ");

         //if yes, tale them to the store() function
         if (storeConfirm) {
             shop();
         }
         
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
     if (playerInfo.health > 0) {
         window.alert("Great job , you've survived the game! you now have a score of" + playerInfo.money + ".");
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
    var shop = function() {
        var shopOptionPrompt = window.prompt(
           "Would you like to Refill your health , Upgrade your attack , or Leave the store? Please enter one: 'REFILL' , 'UPGRADE', or 'LEAVE' to make a choice."
        );
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
                playerInfo.refillHealth();
                break;
                case "UPGRADE":
                case "upgrade":
                    playerInfo.upgradeAttack();
                    break;
                    case"LEAVE":
                    case "leave":
                        window.alert("Leaving the store.");

                        //do nothing , so function will end
                        break;
                    default:
                        window.alert("you did not pick a valid option try again.");

                        // call shop again to force the player to pick a valid option
                        shop();
                        break;
        }
    };
    // function to generate a random numeric value
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };
    var getPlayerName = function() {

while (name === "" || name === null) {
    name = prompt("what is your robots name?");
}

        console.log("your robots name is" + name);
        return name; 

    };
    var playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        },
        refillHealth: function() {
            if (this.money >= 7) {
                window.alert("Refilling Player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
            }
            else {
                window.alert("You dont have enough money!");
            }
        },

        upgradeAttack: function() {
            if (this.money >= 7) {
                window.alert("Upgrading pllayer's attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -= 7;
            }
            else {
                window.alert("you dont have enough money!");
            }
        }
    };
    
    var enemyInfo = [
    {
        name:"Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
     }
    ];

startGame();
