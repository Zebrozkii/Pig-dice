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
  this.currentTurn += 1
  if(this.currentTurn % 2 != 0){
    this.currentPlayer = this.players[0]
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
}
};

Player.prototype.tallyUp = function(){
  var number = 0;
  for(var i = 0; i<this.currentRoll.length; i++){
    number += this.currentRoll[i];
  };
  return number;
  this.currentRoll = [];
};


/*     User Interface Logic     */
var playerList = new PlayerList();
var player = new Player("Player1");
var player2 = new Player("Player2");
playerList.addPlayer(player);
playerList.addPlayer(player2);
