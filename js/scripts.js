function PlayerList(players){
  this.players = [],
  this.currentID = 0,
  this.currentTurn= 1
};

PlayerList.prototype.addPlayer = function(player){
  player.id = this.assignID();
  this.players.push(player);
  this.currentPlayer = this.players[0]
};

PlayerList.prototype.assignID = function(){
  this.currentID += 1;
  return this.currentID;
}

PlayerList.prototype.changePlayer = function(){
  $("#arrow1").toggle();
  $("#arrow2").toggle();
  this.currentTurn += 1
  if(this.currentTurn % 2 != 0){
    this.currentPlayer = this.players[0];

  }
  else{
    this.currentPlayer = this.players[1]
  }
};

PlayerList.prototype.scoreUpdate = function(){
  this.currentPlayer.updateScore();
  this.changePlayer();
}

/*        Player Logic      */
function Player(name, score, currentRoll){
  this.name = name,
  this.score = 0,
  this.currentRoll = []
};

Player.prototype.updateScore =function(){
  this.score += this.tallyUp()
  this.currentRoll = [];
};

Player.prototype.roll = function(){
  var thisRoll = (Math.floor(Math.random() * (6)) + 1);
  if (thisRoll > 1){
  console.log(thisRoll);
  this.currentRoll.push(thisRoll);
}
else{
  console.log(thisRoll);
  this.currentRoll = [];
  playerList.changePlayer();
}
};

Player.prototype.tallyUp = function(){
  var number = 0;
  for(var i = 0; i<this.currentRoll.length; i++){
    number += this.currentRoll[i];
  };
  return number;

};


/*     User Interface Logic     */
var playerList = new PlayerList();
var player = new Player("Player1");
var player2 = new Player("Player2");
playerList.addPlayer(player);
playerList.addPlayer(player2);

function scoresReset(){
  $("#currentRoll").text(0);
  playerList.players[0].currentRoll= [];
  playerList.players[1].currentRoll = [];
  playerList.players[0].score = 0;
  playerList.players[1].score = 0;
  $("#playerOneScore").text(playerList.players[0].score);
  $("#playerTwoScore").text(playerList.players[1].score);
  playerList.currentTurn = 0;
  playerList.currentPlayer = playerList.players[0];
  $("h2").hide();
  $("#arrow1").show();
  $("#arrow2").hide();
};

$(function(){
  $("#roll").click(function(){
    playerList.currentPlayer.roll();
    $("h2").hide()
    $("#currentRoll").text(playerList.currentPlayer.tallyUp());
    $("#playerOneScore").text(playerList.players[0].score);
    $("#playerTwoScore").text(playerList.players[1].score);
  }); //end roll.click function

  $("#hold").click(function(){
    $("#currentRoll").text(0);
    playerList.scoreUpdate();
    $("#playerOneScore").text(playerList.players[0].score);
    $("#playerTwoScore").text(playerList.players[1].score);
      if(playerList.players[0].score >= 100){
        $("#playerOneCongrats").show();
      }
      else if(playerList.players[1].score >= 100){
        $("#playerTwoCongrats").show();
      }
  });  //end hold.click function

  $("#reset").click(function(){
    scoresReset();
  }); //end reset click function
}); //end document ready function
