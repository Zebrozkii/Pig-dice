function Player(name, score){
  this.name = name,
  this.score = 0
};

Player.prototype.updateScore =function(){
  var scoreIncrease = 0
  scoreIncrease += dice.tallyUp()
};


function Dice (currentRoll){
  this.currentRoll = []
};

Dice.prototype.roll = function(){
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

Dice.prototype.tallyUp = function(){
  var number = 0;
  for(var i = 0; i<dice.currentRoll.length; i++){
    number += dice.currentRoll[i];
  };
  console.log(number);
  dice.currentRoll = []
};

var dice = new Dice();
var player = new Player("Dave");
