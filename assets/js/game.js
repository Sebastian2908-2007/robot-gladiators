var playerName = window.prompt("whatis your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "roberto";
var enemyHealth = 50;
var enemyAttack= 12;

var fight = function() {
    //Alert players that they are stsrting a round
    window.alert("Welcome to robot gladiators!");

    //Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
  enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know it worked
console.log(
    playerName + "attacked" +  enemyName + "." +enemyName + "now has" + enemyHealth + "health remaining."
);

//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
}
else {
    window.alert(enemyName + "still has" + enemyHealth + "health left.");
}
    //subtract the value of 'enemyAttack' from the value of 'playerHealth'  and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
    // log a resulting message to the console so we know it worked.
    console.log(
    enemyName + "attacked" + playerName + "."  + playerName +"now has" + playerHealth + "health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + "still has" + playerHealth + "health left");
    }
    };


fight()