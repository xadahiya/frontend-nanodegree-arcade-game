// Enemies our player must avoid
var baseObj = function(sprite, loc){
    this.x = loc.x;
    this.y = loc.y;
    this.sprite = sprite;
}

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var sprite = 'images/enemy-bug.png';
    var loc = generateEnemyLocation();
    baseObj.call(this, sprite, loc);
    var random_speed = getRandomInt(150, 250);

    this.speed = random_speed;
    this.constructor = Enemy;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
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
    return new Loc(-100, getRandomInt(1, 3)*73);

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

 //manages enemy location   
    if(this.x < 606){
        this.x = this.x +(dt*this.speed);
    }
    else{
        var loc = generateEnemyLocation();
        this.x = loc.x;
        this.y = loc.y;
        this.speed = getRandomInt(150, 250);
    }

    //to handle collisions
    //As bug size is about 100px player will be squished within 100px
    if ( player.x < (this.x+50) && player.x > (this.x-50) && player.y < (this.y+39) && player.y > (this.y-39)){
        player.moveX = 0;
        player.moveY = 0;
        Player.x = 200;
        player.y = 400;
        alert("Oh no, you got squished! Wanna play again?");
        
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

    var sprite = 'images/char-boy.png';
    baseObj.call(this, sprite, new Loc(200, 400));
    this.moveX = 0;
    this.moveY = 0;
    this.speed = 4;
    this.constructor = Player;
};
//Player update() method
Player.prototype.update = function(dt){
    if (this.y < 30){
        this.moveX = 0;
        this.moveY = 0;
        this.x = 200;
        this.y = 400;
        alert("Congratulations, you won!");
        return;
    }
    
    if(this.moveX > 0 ){
        this.x += this.speed;
        this.moveX -= this.speed;
    }
    else if(this.moveX < 0){
        this.x -= this.speed;
        this.moveX += this.speed;
    }
    else if(this.moveY < 0){
        this.y -= this.speed;
        this.moveY += this.speed;
    }
    else if(this.moveY > 0){
        this.y += this.speed;
        this.moveY -= this.speed;
    }

};

//Player render() method
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player handleInput() method
Player.prototype.handleInput = function(key){

    if(this.moveX !== 0 || this.moveY !== 0) {
        return;
    }
    console.log(this.x, this.y);
    //handles bounds 
    if(key == "up" && this.y <= 54){
        return;    
    }
    else if (key == "down" && this.y >= 400){
        return;    
    }
    else if (key == "left" && this.x <= 10){
        return;
    }
    else if(key == "right" && this.x>= 390){
        return;
    }

    if(key == "up"){
        this.moveY -= 84; 
    }
    else if(key == "down"){
        this.moveY += 84;
    }
    else if(key == "left"){
        this.moveX -= 100;
    }
    else if(key == "right"){
        this.moveX += 100;
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
