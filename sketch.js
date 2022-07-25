//let bullet; 
let invaderImg;
let spaceshipImg; 
let enemyBullet; 
let score; 
let lives; 
let startScreen = true 
let ScreenStart = 0
let invadersArray = [];
let invadersX = [25, 115, 205, 295, 385, 475, 25, 115, 205, 295, 385, 475, 25, 115, 205, 295, 385, 475, 25, 115, 205, 295, 385, 475];
let invadersY = [50, 50, 50, 50, 50, 50, 125, 125, 125, 125, 125, 125, 200, 200, 200, 200, 200, 200, 275, 275, 275, 275, 275, 275];
let myXPos, myYPos;
let mainCharacterInfo = [];
let myUp, myDown, myLeft, myRight; // Add Borders
let bullets;


// function preload(){
    
// }

function setup(){
    createCanvas(700,500);

    // Create invaders
    for (let i = 0; i < 24; i++) {
        let temp = new Invader(invadersX[i], invadersY[i]);
        invadersArray.push(temp);
    }

    // mainCharacterInfo = new MainCharacter()

    score = 0;
    myXPos = 250;
    myYPos = 400;
    rectMode(CENTER);
}

function draw(){
    background(0);
    if (startScreen){
        Screen();
        return;
    }
    startGame();

    
}


function startGame(){
    text("Score = " + score, 40, 20);

    // Creates the invaders
    for (let i = 0; i < invadersArray.length; i++) {
        fill(0, 255, 0);
        rect(invadersArray[i].xPos, invadersArray[i].yPos, 50, 50);
    }

    // Main character
    fill(255,0,0);
    rect(myXPos, myYPos, 100, 100);
    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }
    
    shoot();
    
    
    
}   

function shoot(){
    if (keyIsDown(UP_ARROW)) {
        fill(255);
        text('Shooting!!!', 250, 250, 100, 100);
        bullets = new Bullet(myXPos, myYPos);
        /*
        while (bullets.yPos > 0) { // While the bullets are still on the screen
            bullets.yPos -= 3;
            
            if () {  // If the bullet borders touch the borders of the alien
                // Remove the alien
            }
            
        }
        */

    }
}

function Screen() {
    if (mouseIsPressed === true) {
        startScreen = false;
    }

    if (startScreen === true) {
    background(255);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Click the Mouse to Begin", width / 2, height / 2);
    
    }

}

class Invader {
    constructor(x, y) {
        this.xPos = x;
        this.yPos = y;
        this.upBorder = x - 25;
        this.downBorder = x + 25;
        this.leftBorder = x - 25;
        this.rightBorder = x + 25;
    }
}

class Bullet{
    constructor(x, y){
        this.xPos = x;
        this.yPos = y;
        
    }
}

class MainCharacter {
    constructor(x, y) {
        this.xPos = x;
        this.yPos = y;
        this.upBorder = x - 25;
        this.downBorder = x + 25;
        this.leftBorder = x - 25;
        this.rightBorder = x + 25;
    }
}
