var playerName = window.prompt("whatis your robot's name?");
var playerMoney= 10;
var playerHealth = 100;
var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; console.log(enemyNames); 
var enemyHealth = 50;
var enemyAttack= 12;

var fight = function(enemyName) { //fight function statements
    //repeat and execute as long as enemy-robot is alive
    while(enemyHealth > 0) {//ask to fight or pay to skip
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
        //if player chooses to fight, then  fight
           if (promptFight === "fight" || promptFight === "FIGHT") {
               //remove enemy's health by subtracting the amount set in the player Attack variable
               enemyHealth = enemyHealth -playerAttack;
               console.log(
                   playerName + "atacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
               );
        
               // check enemy's health
               if (enemyHealth <= 0) {
                   window.alert(enemyName + "has died");
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
               } else {
                   window.alert(playerName + "still has" + playerHealth + "health left.");
                }
                // if player chooses to skip 
            } else if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm the player wants to skip
                var confirmSkip = window.confirm("Are you sure you want to quit?");
        
                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + "has decided to skip this fight. goodbye!");
                    // subtract money from playerMoney for skipping
                    playerMoney = playerMoney -2;
                }
                //if no (false), ask  question again b running fight () again
                else {
                    fight();
                }
            } else{ 
                window.alert("You need to choose a valid option. Try again");
            } 

    }
    
//ask to fight or pay to skip
var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
//if player chooses to fight, then  fight
   if (promptFight === "fight" || promptFight === "FIGHT") {
       //remove enemy's health by subtracting the amount set in the player Attack variable
       enemyHealth = enemyHealth -playerAttack;
       console.log(
           playerName + "atacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
       );

       // check enemy's health
       if (enemyHealth <= 0) {
           window.alert(enemyName + "has died");
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
       } else {
           window.alert(playerName + "still has" + playerHealth + "health left.");
        }
        // if player chooses to skip 
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney -2;
        }
        //if no (false), ask  question again b running fight () again
        else {
            fight();
        }
    } else{ 
        window.alert("You need to choose a valid option. Try again");
    } 
    }; 
  for(var i = 0; i < enemyNames.length; i++) {
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
  }
