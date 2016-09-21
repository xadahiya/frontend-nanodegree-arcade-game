// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var loc = generateEnemyLocation();
    this.x = loc.x;
    this.y = loc.y;
    this.speed = getRandomInt(100, 200);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

//Creates location objects with x and y coordinates
var Loc = function(x,y){
    this.x = x;
    this.y = y;
}


//Generate random row for enemy placement
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Generates enemy starting location
function generateEnemyLocation(){
    return new Loc(0, getRandomInt(1, 3)*73);

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

 //manages enemy location   
    if(this.x < 606){
        this.x = this.x +(dt*this.speed);
    }
    else{
        this.x = 0;
        this.y = getRandomInt(1, 3)*73;
        this.speed = getRandomInt(100, 200);
    }

    //to handle collisions
    if (Math.floor(this.x) == player.x && this.y == player.y){
        Player.x = 202;
        player.y = 365;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.x = 202;
    this.y = 365;
    this.sprite = 'images/char-boy.png';
};
//Player update() method
Player.prototype.update = function(dt){
    if (this.y == 0){
        this.y = 365;
    }

};

//Player render() method
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player handleInput() method
Player.prototype.handleInput = function(keyCode){
    console.log(this.x);
    if(keyCode == "up"){
        if(this.y >= 73){
            this.y -= 73;
            // console.log(this.y);
        }
        else{
            this.y = 365;
        }
    }
    else if (keyCode == "down"){
        if(this.y < 365){
            this.y += 73;
        }
        else{
            this.y = 365;
        }
    }
    else if (keyCode == "left"){
        if(this.x>0){
            this.x -= 101;
        }
        
    }
    else if(keyCode == "right"){
        if(this.x<404){
            this.x += 101;
        }
    
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [new Enemy(), new Enemy(), new Enemy()];
player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
