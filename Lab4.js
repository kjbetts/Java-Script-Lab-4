var user = {
  health: 40,
  healsRemaining: 2,
  wins: 0,
  generateAttackDamage: function(){
   return Math.floor(Math.random() * 3 + 1);
  },
  heal: function(){
    this.healsRemaining--;
    return Math.floor(Math.random() * 10 + 1);
  }

}
var grant = {
  name: grant,
  health: 10,
  generateAttackDamage: function(){
    return Math.floor(Math.random() * 5 + 1);

  },


}

var userHealthBar = document.getElementById("userHealth");
var grantHealthBar = document.getElementById("grantHealth");
var userWins = document.getElementById("user.wins");
var btn = document.getElementById("start-button");
btn.onclick = function(){
  var showDiv = document.getElementById("game");
  showDiv.style.display = "block";
  var hideDiv = document.querySelector(".startbutton")
  hideDiv.style.display = "none"
}

var attackBtn = document.getElementById("attackbutton")
attackBtn.onclick = function(){
  user.health -= user.generateAttackDamage();
  user.health--;
  grant.health -= grant.generateAttackDamage();
  grant.health--;

if(grant.health <= 0){
  user.wins++;
  grant.health = 10;
  

}
 updateDisplay();

}
var healBtn = document.getElementById("healbutton")
healBtn.onclick = function(){
  user.health += user.heal();
  updateDisplay();

}
var quitBtn = document.getElementById("quitbutton")
quitBtn.onclick = function(){
window.location.reload();
}


    function updateDisplay() {
        userHealthBar.value = user.health;
        grantHealthBar.value = grant.health;
        userWins.value = user.wins;
        console.log(user.wins);

    }

    // function updateMessage(newMessage) {
    //     messageEl.innerText = newMessage;
    // }
