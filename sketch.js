//anim variables
let backIdle;
let frontIdle; 
let rightIdle; 
let leftIdle; 
let backWalk; 
let frontWalk; 
let rightWalk; 
let leftWalk; 

//background variables
let background1; 
let interior1;

//dialog variable
let introBackground; 
let dialogImg; 
let akujiImg; 
let npcImg; 

let itemMessage; 
let firstMessage; 
let currentMessage; 
let itemChange; 
let introMessage; 
let mushroomMessage;

//object img variables 
let houseImg; 
let houseImg2; 
let houseImg3;
let houseImg4; 
let houseImg5;
let houseImg6; 
let tsukiSmallImg; 
let itemImg; 
let signImg; 
let mushroomImg; 

//object visuals 
let house1; 
let house2; 
let house3; 
let house4; 
let house5; 
let house6; 
let tsukiSmall; 
let item; 
let signObj; 
let mushroomObj; 

//object lists 
let objectList1; 

//collision objects
let collider1; 
let collider2; 
let collider3; 

//collision lists
let collisionList1; 

//levels 
let level1; 
let level2; 

//current level 
let currentLevel; 


//grid variables 
let rows = 20;
let columns = 20; 
let grid = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,1,1,1,0,0,0,0,9,9,0,0,0,1,1,1,1,0,1],
[1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
[7,0,0,6,6,0,0,4,1,4,0,0,0,0,6,6,6,0,0,8],
[7,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,8],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
[1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
[1,0,1,2,2,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,10,10,0,0,0,0,0,1],
[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,12,0,1],
[1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1],  
[1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1],
[1,0,0,0,0,0,6,6,0,0,0,0,0,1,1,1,1,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],
[1,0,0,0,0,0,0,0,0,11,11,0,0,0,6,6,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

let level2Grid = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1],
[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,1,0,0,0,0,0,0,5,0,0,0,1,0,0,0,0,0,1],
[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,1,3,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],  
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

let levelGrid; 
let levelGrid2; 

let cellWidth; 
let cellHeight; 
let cell;
let finalJob; 

//background music 
let bgMusic; 
let collisionSound; 
let itemSound;
let doorSound; 

let inCollision = true; 
//controls the interaction delay 
let canInteract = true; 
let lastEPressTime = 0;
const eCooldown = 500; // Cooldown of 500 ms for E presses




let gameState = {
  gameEnd: false,
  dialog: true, //chaNGE THIS
  item: false,
  intro: true,
  dialogStarter: false, 
  reset: false,
  newGame: false,
 
};

const player = {
  x: 400,
  y: 200,
  h: (32*2) -30,
  w: 16 *2,
  speed: 3,
  defaultSpeed: 3,
  hidden: false, 
  canCollide: true, 
  
  anim: frontIdle, 
  

  //anim for walk 
  up() {
    this.changeAnimation(backWalk);
  },
  down() {
    this.changeAnimation(frontWalk);
  },
  left() {
    this.changeAnimation(leftWalk);
  },
  right() {
    this.changeAnimation(rightWalk);
  },
  
  //idle anim
  idleUp() {
    this.changeAnimation(backIdle);
  },
  idleDown() {
    this.changeAnimation(frontIdle);
  },
  idleRight() {
    this.changeAnimation(rightIdle);
  },
  idleLeft() {
    this.changeAnimation(leftIdle);
  },

  //change anim func
  changeAnimation(newAnim) {
    if (this.anim) this.anim.hide();
    this.anim = newAnim;
    if(!this.hidden){
    this.anim.show();
    }
    this.anim.position(this.x, this.y -30, 0);
  },
  
  
  
  collidesWithGrid() {
    if(this.canCollide){
       for (let i = 0; i < this.w; i++) {
      for (let j = 0; j < this.h; j++) {
        let gridX = floor((this.x + i) / cellWidth);
        let gridY = floor((this.y + j) / cellHeight);
        
        // Check if within bounds
        if (gridX >= 0 && gridX < columns && gridY >= 0 && gridY < rows) {
          let cell = currentLevel.grid.getCellAt(gridX, gridY);
          if (cell.type == "wall" ) {
            if(!collisionSound.isPlaying()){
               collisionSound.play();
            }
            
            return true; 
            }
          
          }
        }
      }
    }
   
    return false; 
  },
  hideAll(){
    this.anim.hide(); 
    this.hidden = true; 
    
  },
  showAll(){
    this.anim.show();
    this.hidden= false; 
  },
  teleport(x, y){
    this.x = x;
    this.y = y; 
  }
 

};


function preload() {

    //music
  bgMusic = loadSound('BackgroundMusic.mp3');
  collisionSound = loadSound("Collision.mp3");
  itemSound = loadSound("ItemSound.mp3");
  doorSound = loadSound("DoorSlide.mp3"); 
  
   //anim image handling
  backIdle = createImg("BackIdle-1.png","");
  frontIdle = createImg("FrontIdle-1.png","");
  rightIdle = createImg("RightIdle-1.png","");
  leftIdle = createImg("LeftIdle-1.png","");
  frontWalk = createImg("FrontWalk-1.png","");
  backWalk = createImg("BackWalk-1.png","");
  rightWalk = createImg("RightWalk-1.png","");
  leftWalk = createImg("LeftWalk-1.png","");
  // Hide all images initially
  backIdle.hide();
  frontIdle.hide();
  rightIdle.hide();
  leftIdle.hide();
  frontWalk.hide();
  backWalk.hide();
  rightWalk.hide();
  leftWalk.hide();
  
  

  
  //background img handling
    background1 = loadImage("BG.png");
  interior1 = loadImage("Interior1.png");
  introBackground = loadImage("IntroBG.png"); 
  
  //object img handling 
  houseImg5 = loadImage("House5.png");
  houseImg4 = loadImage("House4.png");
  houseImg6 = loadImage("House6.png");
  houseImg3 = loadImage("House3.png");
  houseImg2 = loadImage("House2.png");
  houseImg = loadImage("House1.png"); 
  house1 = new visual(houseImg, 65, 191); 
  house2 =  new visual(houseImg2, 43, -90); 
  house3 = new visual(houseImg3, 543, -90); 
  house4 = new visual(houseImg4, 443, 191); 
  house5 = new visual(houseImg5, 493, 511);
  house6 = new visual(houseImg6, 193, 391); 
  
  tsukiSmallImg = loadImage("TsukiSmall.png");
  tsukiSmall = new visual(tsukiSmallImg, 320,90);
  
  itemImg = loadImage("Item.png");
  item = new visual(itemImg, 370, 320); 
  
  signImg = loadImage("Sign.png");
  signObj = new visual(signImg, 360, 0);
  
  mushroomImg = loadImage("Mushrooms.png");
  mushroomObj = new visual(mushroomImg, 680, 480);
  
  //dialog img handling 
  
  dialogImg = loadImage("DialogBox1.png"); 
  akujiImg = loadImage("Akuji.png");
  npcImg = loadImage("Tsuki.png"); 
  
  
    //dialog handling
  let empty = new message("empty", "...", [], null); 
  let finalJob5 = new message("jim", "Have fun then. ", [], empty, npcImg, null, 5, null, null) //reset message 
    let moreTime = new message("jim", "Alright, I'll be here if you change your mind.", [], empty, npcImg, null,null, null, null)
  let yesReset = new choice("Sure, I'll reset.", finalJob5);

  let noReset = new choice("No, I want more time.", moreTime);
  let resetArray = [yesReset, noReset]; 
  let resetQuestion = new message("jim", " Want to reset?", resetArray, null, npcImg, null,null, null )
  
  
  let finalJob4 = new message("jim", "No, that's it. If you want you can reset.", resetArray, null, npcImg, null,null, false, resetQuestion )
  
  let finalJob3 = new message("jim", "Is there.. Something else I should do?", [], finalJob4, akujiImg, null,null,false, resetQuestion)
  
  let finalJob2 = new message("jim", "Up and down is fixed.", [], finalJob3, npcImg, null,null, false, resetQuestion)
  
  
  
  
   finalJob = new message("jim", "This should work. I'll use it to fix up and down.", [], empty, npcImg, null,null, false, finalJob2)
  
  //dialog stuff
  let didYou = new message("jim", "Did you get it yet?", [], empty, npcImg); 
     let getIt = new message("jim","Yes, I will wait here for your return.", [], empty ,npcImg, null, null, false, didYou );
  let whyCant2 = new message("jim","I can't move from this spot. Hence, I will wait here until you get it.", [], empty,npcImg, null, null, false, didYou);
  let whyCant = new message("jim","Why can't you go get it yourself? Don't you know which house it is?", [], whyCant2 ,akujiImg );
    
    
  let upDown = new message("jim","Yes, up and down. It's not working go get an item to fix it.", [], whyCant ,npcImg );

  let firstChoice2 = new choice("Up and Down?", upDown);
  let secondChoice2 = new choice("I see, need me to get it?",  getIt);
  let secondChoiceArray2 = [firstChoice2, secondChoice2]; 
  let secondMessage = new message("jim","Hello, One of these houses has an item to help me fix up and down.", secondChoiceArray2, null, npcImg, null, null, false, didYou);
  firstMessage = new message("jim","Hello", [], secondMessage, akujiImg, null, null,false, didYou); 
  
  let noIntro2 = new message ("dialog", "", [], null,null,introBackground,3); 
  let noIntro = new message ("dialog", "Geez okay.", [], noIntro2,null,introBackground ); 
  let moreIntro = new message("dialog", "Finally, you can walk using WASD, or the arrow keys. There's some spaces that can teleport you at the map edges. That's all.", [], noIntro2,null,introBackground)
  let firstChoice = new choice("Understood, let me play!", noIntro);
  let secondChoice = new choice("Got it, what else is there?", moreIntro);
  let secondChoiceArray = [firstChoice, secondChoice]; 
  let introMessage2 = new message("dialog", "E can also allow you to interact with people close to your character, and pick up items. To choose an option, select using mouse", secondChoiceArray, null, null,introBackground)
   introMessage = new message("dialog","Welcome to a short game demo. In order to continue Dialog, press E. ",[],introMessage2,null,introBackground )
  currentMessage = introMessage; 
  
  itemChange = new message("..", [], null, npcImg, ); 
  
   itemMessage = new message("item","An item, maybe it's useful.", [], empty, akujiImg, null, 2);
  doorLocked = new message("dialog","The house is locked.", [], empty, null);
  
  
  
   let weird = new message("dialog","I feel off.", [], empty, akujiImg, null, 7);
  let best = new message("dialog","Probably for the best.", [], empty, akujiImg, null);
   let yesEat = new choice("Yes, do it now!", weird);
  let noEat = new choice("No, don't.", best);
  let eatArray = [yesEat, noEat]; 
  
  mushroomMessage = new message("dialog","A patch of mushrooms. Should I eat one?", eatArray, empty, akujiImg, null, 2);
  
  let loadNew = new message("dialog","And here it is!", [], empty, null, null, 6);
  let yesBreak = new choice("Yes!", loadNew);
  let noBreak = new choice("No?", empty);
  let breakArray = [yesBreak, noBreak]; 
  doorLocked2 = new message("dialog","The house is locked, but posters on the door read: 'Are you tired of the same paths that go on forever? Want a break? Just say YES! '", breakArray, empty, null);
  
  sign = new message("dialog","Up and down is closed for now.", [], empty, null);
  sign2 =  new message("dialog","I'm unable to go further. Something must be broken and I don't think it's my legs.", [], empty,akujiImg);
  //img list for objects 
  objectList1 = [house1, house2, house3, house4, house5, house6, tsukiSmall, signObj, mushroomObj]; 
  objectList2 = [item]; 
  //levels without grids
  level1 = new level(background1, [], objectList1, 0, 0); 
  level2 = new level(interior1, [], objectList2 , 130, 330 ); 
  //grid objects 
  levelGrid = new Grid(grid);
  levelGrid2 = new Grid(level2Grid); 
  //add grids to levels 
  level1.grid = levelGrid; 
  level2.grid = levelGrid2; 


}

function setup() {
  createCanvas(800, 800);

    //grid creation
  cellWidth = width / columns;
  cellHeight = height / rows;
  player.changeAnimation(frontIdle) 
  
  currentLevel = level1; 
   currentLevel.display();
  
  // Set text properties
  textSize(24);
  textAlign(LEFT, TOP);
}

function draw() {
  //background music 
   if (!bgMusic.isPlaying()) {
    bgMusic.play();
  } 

  //this controls the interact button 
  if(!gameState[5]){
  const nowTime = millis();
  if (keyIsPressed && key === 'e' && canInteract) {
     lastEPressTime = nowTime;
      canInteract = false;
  }

  
  if (nowTime - lastEPressTime > eCooldown) {
      canInteract = true;
  }
 
  if(currentMessage.nextMessage == null && currentMessage.choiceArray.length == 0 && !canInteract && keyIsPressed && key === 'e'){

    gameState.dialog = false; 
  }
  
  let moveX = 0;
  let moveY = 0;
  
    currentLevel.display();
    if(gameState.dialog){
    //hide player
      player.canCollide = false; 
      player.hideAll();
      

      currentMessage.display(); 
     
 
    }
    
     else if(!gameState.dialog){
        
        player.showAll(); 
        playerMovement(moveX, moveY); 
       
        gridCollision(moveX, moveY);
       
       
        player.canCollide = true; 
     }
  }

  if(gameState[5]){
   
    reset(); 
    
  }


 
  
  
}

function mouseClicked() {

  if(currentMessage.choiceArray != null){
    if(currentMessage.choiceArray.length > 0 ){

      for (let i = 0; i < currentMessage.choiceArray.length; i++) {
      let rectValues = currentMessage.choiceArray[i].getRect(); 
      if ( mouseX >  rectValues[0]  && mouseX <  rectValues[0] + rectValues[2] &&
          mouseY >  rectValues[1] && mouseY < rectValues[1]  + rectValues[3] ) {
   
          currentMessage.choiceArray[i].onClick();
        } 
      }
    }
  }

}

function keyPressed() {
  if(keyCode === 69){
      if(gameState[6]){
    //load game 
       window.open("https://little-fifth.itch.io/", "_blank");
    gameState[6] = false;
  }
 
    //in dialog stuff 
 
  if (currentMessage.npcName == "jim"){
    
      if(gameState[2] == true &&  gameState[0] != true){
        //should do the nw message stuff 
        
  
        currentMessage = finalJob; 

        if(cell != null)
        if(cell.dialogText != null ){
             cell.dialogText = finalJob; 
          //firstMessage = finalJob; 
          

      }
    
     
        
     //quick fix for the dialog issue that keeps persisting - uses a 5 by 5 grid to change dialog 
      let playerGridX = Math.floor(player.x / cellWidth);
      let playerGridY = Math.floor(player.y / cellHeight);
      let surroundingCells = [];

      for (let offsetX = -2; offsetX <= 2; offsetX++) {
        for (let offsetY = -2; offsetY <= 2; offsetY++) {
            let cellX = playerGridX + offsetX;
            let cellY = playerGridY + offsetY;

            let cell = currentLevel.grid.getCellAt(cellX, cellY);
            if (cell) {
                surroundingCells.push(cell);
            }
        }
      }

      
      for (let cell of surroundingCells) {
        if (cell.dialogText) {
            cell.dialogText = finalJob;
        }
      }
        
        
        
        
        let temporaryCell = currentLevel.grid.getCellAt(10,0);//also 11
     //(type, dialogText = null, targetLevel = null, playerX = null, playerY = null, visual = null)
        
         temporaryCell.change("teleport", null, null,null, null);
        temporaryCell.teleX = 380; 
        temporaryCell.teleY = 700; 
        temporaryCell = currentLevel.grid.getCellAt(9,0);//also 11
        temporaryCell.change("teleport", null, null,null, null);
        temporaryCell.teleX = 380; 
        temporaryCell.teleY = 700; 
        temporaryCell = currentLevel.grid.getCellAt(9,19);
        temporaryCell.change("teleport", null, null, null, null);
        temporaryCell.teleX = 380; 
        temporaryCell.teleY = 50; 
        temporaryCell = currentLevel.grid.getCellAt(10,19);
         temporaryCell.change("teleport", null, null, null, null);
        temporaryCell.teleX = 380; 
        temporaryCell.teleY = 50; 
        temporaryCell = currentLevel.grid.getCellAt(9,18);
         temporaryCell.change("empty", null, null,null, null);
        temporaryCell = currentLevel.grid.getCellAt(10,18);
         temporaryCell.change("empty", null, null,null, null);
        temporaryCell = currentLevel.grid.getCellAt(10,1);
       
        temporaryCell.change("empty", null, null,null, null);

        temporaryCell = currentLevel.grid.getCellAt(9,1);
         temporaryCell.change("empty", null, null,null, null);
       
     
          temporaryCell.visual = signObj; 
        temporaryCell.visual.setInactive(); 
        
        temporaryCell = currentLevel.grid.getCellAt(9,0);//also 11
        
        gameState[0] = true; 
      }
      
    }
    
   
    if(gameState.dialog){
      if (currentMessage && currentMessage.nextMessage != null && currentMessage.choiceArray.length == 0){
            
        currentMessage.isSeen = true; 
        currentMessage = currentMessage.nextMessage; 
      
      }

      else{ 
        if(cell != null){
           if(cell.dialogText != null){
              if(canInteract){
               
                   //this might be whats causing loading brain rot
               //cell.dialogText = currentMessage; 
                
               
            }
          }
        }
     
    }
    if(currentMessage && currentMessage.choiceArray != null){
      if(currentMessage.choiceArray.length > 0 ){

        for (let i = 0; i < currentMessage.choiceArray.length; i++) {
        let rectValues = currentMessage.choiceArray[i].getRect(); 
        if ( mouseX >  rectValues[0]  && mouseX <  rectValues[0] + rectValues[2] &&
            mouseY >  rectValues[1] && mouseY < rectValues[1]  + rectValues[3] ) {
            
            currentMessage.choiceArray[i].onClick();
          } 
        }
      }
    }

     //this needs a null check to see if the currentMessage choice array is even not null 
     if(currentMessage.nextMessage == null && currentMessage.choiceArray.length == 0){

       gameState.dialog = false; 

     } 
}
    
    else if(!gameState.dialog){
      
      
      
      //inCollision = false; 
    }
     if(inCollision){
      gameState.dialog = true; 
    }
    else {
      gameState.dialog = false; 
    }
    
   
}
   

      
    
    
  
  
}

function keyReleased(){
    if (keyCode === UP_ARROW || keyCode === 87){
      player.idleUp(); 
    }
  if (keyCode === DOWN_ARROW || keyCode === 83){
      player.idleDown(); 
    }
  if (keyCode === RIGHT_ARROW||  keyCode === 68){
      player.idleRight(); 
    }
  if (keyCode === LEFT_ARROW||  keyCode === 65){
      player.idleLeft(); 
    }
    return false; 
}
function reset(){

    window.location.reload();

  
}

function playerMovement(moveX, moveY){

  if(!gameState.dialog){
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      moveY = -player.speed;
      player.up();
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      moveY = player.speed;
      player.down(); 
    }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      moveX = -player.speed;
      player.left();
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      moveX = player.speed;
      player.right(); 
    }

    // Calculate new pixel position
    let newPixelX = player.x + moveX;
    let newPixelY = player.y + moveY;

    // Check for collisions in the new positions
    player.x = newPixelX; // Temporarily set new X position
    if (player.collidesWithGrid()) {
      player.x = newPixelX - moveX; // Revert X if collision
    }

    player.y = newPixelY; // Temporarily set new Y position
    if (player.collidesWithGrid()) {
      player.y = newPixelY - moveY; // Revert Y if collision
    }
  }  
}

function gridCollision(moveX, moveY){
  
  inCollision = false; 
  if(player.canCollide ){
    //get grid position - for less specific calculations 
  let newGridX = Math.floor((player.x + moveX * player.speed) / cellWidth);
  let newGridY = Math.floor((player.y + moveY * player.speed) / cellHeight);
  
  cell = currentLevel.grid.getCellAt(newGridX, newGridY);

  if(cell != null){
    if (cell.type != "wall") {

      if (cell.type == "portal") {
        currentLevel = cell.targetLevel;
        //play sound
        if(!doorSound.isPlaying()){
          doorSound.play(); 
        }

        if(cell.targetLevel.x != 0){
          cell.targetLevel.playerReset(); 
        }
        //player.x = 50; player.y = 50; // Reset player position for new level
      } 
      if(cell.type == "teleport"){
             player.teleport(cell.teleX, cell.teleY);
      }
     
     
        if (cell.type == "dialog" || cell.type == "item") { 
          currentMessage = cell.dialogText;
          inCollision = true; 
       
        }

        if(cell.type == "item" && keyIsDown(69)){
          //play item get 
          if(!itemSound.isPlaying()){
            itemSound.play();
          }
          cell.visual.setInactive(); 
          cell.change("empty", null, null, null, null);
          
        }
      }
    else{
      //is wall play sound
      collisionSound.play();
    }
      
    
  }
    
  }
  

}

class message{
  
  constructor(npcName, messageText, choiceArray, nextMessage, imageVar, backgroundImg, varIndex, isSeen, newMessage ){
    this.npcName = npcName; 
    this.messageText = messageText; 
    this.choiceArray = choiceArray; 
    this.nextMessage = nextMessage; 
    this.imageVar = imageVar; 
    this.bgImg = backgroundImg; 
    this.varIndex = varIndex; 
    this.isSeen = false; 
    this.newMessage = newMessage; 
    this.hasPicked = false; 
    
    
  }

  display(){
      //set Var 
  


      if(this.isSeen == true && this.newMessage != null && this.choiceArray.length == 0 ){

       if(this.newMessage.npcName != null){
          this.npcName = this.newMessage.npcName; 
            }
          else{
          this.npcName = null; 
        }
        if(this.newMessage.messageText != null){
          this.messageText = this.newMessage.messageText;
        }
        else{
          this.messageText = null; 
        }
        if(this.newMessage.choiceArray != null){
           this.choiceArray = this.newMessage.choiceArray;
        }


        if(this.newMessage.nextMessage != null){
          this.nextMessage = this.newMessage.nextMessage; 
        }
        else{
          this.nextMessage = null;
        }


        if(this.newMessage.imageVar != null){
          this.imageVar = this.newMessage.imageVar;
        }
        else{
          this.imageVar = null;
        }

        if(this.newMessage.bgImg != null){
          this.bgImg = this.newMessage.bgImg; 
        }
        else{ 
        this.bgImg = null
        }

        if(this.newMessage.varIndex != null){
          this.varIndex = this.newMessage.varIndex;
        }
        else{
          this.varIndex = null; 
        }


        if(this.newMessage.isSeen != null){
          this.isSeen = this.newMessage.isSeen;
        }


        if(this.newMessage.newMessage != null){
          this.newMessage = this.newMessage.newMessage; 
        }
        else{
          //this.newMessage = null; 
        }

      currentMessage = this; 
        if(cell != null)
        if(cell.dialogText != null ){
             cell.dialogText = currentMessage; 
    

        }
      }
     else if(this.newMessage != null && this.choiceArray.length > 0 && this.hasSeen ){
        
       if(this.newMessage.npcName != null){
          this.npcName = this.newMessage.npcName; 
            }
         
        if(this.newMessage.messageText != null){
          this.messageText = this.newMessage.messageText;
        }
        else{
          this.messageText = null; 
        }
        if(this.newMessage.choiceArray != null){
           this.choiceArray = this.newMessage.choiceArray;
        }


        if(this.newMessage.nextMessage != null){
          this.nextMessage = this.newMessage.nextMessage; 
        }
        else{
          this.nextMessage = null;
        }


        if(this.newMessage.imageVar != null){
          this.imageVar = this.newMessage.imageVar;
        }
        else{
          this.imageVar = null;
        }

        if(this.newMessage.bgImg != null){
          this.bgImg = this.newMessage.bgImg; 
        }
        else{ 
        this.bgImg = null
        }

        if(this.newMessage.varIndex != null){
          this.varIndex = this.newMessage.varIndex;
        }
        else{
          this.varIndex = null; 
        }


        if(this.newMessage.isSeen != null){
          this.isSeen = this.newMessage.isSeen;
        }


        if(this.newMessage.newMessage != null){
          this.newMessage = this.newMessage.newMessage; 
        }
        else{
          //this.newMessage = null; 
        }

      currentMessage = this; 
        if(cell != null)
        if(cell.dialogText != null ){
             cell.dialogText = currentMessage; 


        }
     }

 
    
  
    if(this.bgImg != null){
      image(this.bgImg,0,0); 
    }
    
    if(this.varIndex != null){
      if(gameState != null){
    
        gameState[this.varIndex] = true; 
        

      }      
    }
   
    
    //draw image sprite 
    if(this.imageVar != null){
          image(this.imageVar, 0, 0);

    }
    //draw message box 
    image(dialogImg, 0, 0);
    //display the choices
    if(this.choiceArray != null){
      if (this.choiceArray.length > 0) {
          for (let i = 0; i < this.choiceArray.length; i++) {
             this.choiceArray[i].setYPosition(675 + i * 30); 
            this.choiceArray[i].display(); 
          }
        }
    }
    
    //display the message 
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(this.messageText,40,600, 740, 150);
     if(this.varIndex ==3 ){
      gameState.dialog = false; 
    }
    
    
  }
  
 
}

class choice{
  constructor(choiceText, nextMessage){
    this.choiceText = choiceText; 
    this.nextMessage = nextMessage; 
    this.yPosition = 0; 
    this.xPosition = 40; 
  }
  setYPosition(inputYPosition){
    this.yPosition = inputYPosition; 
  }
  display(){
    //cant define the height and width in the construction as it changes 
    let foundTextWidth = textWidth(this.choiceText);
    let textHeight = textAscent() + textDescent();
    
    fill(121,121,121);
    stroke(180,180,180);
    rect(this.xPosition, this.yPosition, foundTextWidth, textHeight);
    stroke(0);
    fill(255);
    text(this.choiceText,this.xPosition , this.yPosition); 
    
  }
  onClick(){
    //check if the user clicks on the rect 
    
    currentMessage.hasPicked = true; 
    currentMessage = this.nextMessage; 
    
    
  }
  getRect(){
    //this should return the rectangle of the text 
    let foundTextWidth = textWidth(this.choiceText);
    let textHeight = textAscent() + textDescent();
    let rectInfo = [this.xPosition, this.yPosition, foundTextWidth, textHeight]; 
    return rectInfo; 
    
  }

}

class Cell {
  constructor(type, dialogText = null, targetLevel = null, playerX = null, playerY = null, visual = null) {
    this.type = type; // "wall", "dialog", "portal", "empty"
    this.dialogText = dialogText;
    this.targetLevel = targetLevel;
    this.show = true; 
    this.teleX = playerX; 
    this.teleY = playerY; 
    this.visual = visual; 
  }
  change(type, dialogText = null, targetLevel = null, playerX = null, playerY = null, visual = null) 
  {
    this.type = type; // "wall", "dialog", "portal", "empty"
    this.dialogText = dialogText;
    this.targetLevel = targetLevel;
    this.show = true; 
    this.teleX = playerX; 
    this.teleY = playerY; 
    this.visual = visual; 
  }

  isWall() {
    return this.type === "wall";
  }

  isDialog() {
    return this.type === "dialog";
  }

  isPortal() {
    return this.type === "portal";
  }
  isItem() {
    return this.type === "item";
  }
  isTeleport(){
    return this.type === "teleport"; 
  }
  
}

class Grid {
  constructor(layout) {
    this.layout = []; // Initialize an empty array for the layout

    for (let i = 0; i < layout.length; i++) {
      const row = layout[i]; // Get the current row
      const newRow = []; // Initialize a new row array

      for (let j = 0; j < row.length; j++) {
        const cell = row[j]; // Get the current cell
        newRow.push(this.createCell(cell)); // Create a cell and add it to the new row
      }

      this.layout.push(newRow); // Add the new row to the layout
    }
  }

  createCell(type) {
    let cell;
    switch(type) {
      case 1: 
        cell = new Cell("wall");
        break;
      case 2: 
        cell = new Cell("portal", null, level2);
        break;
      case 3: 
        cell = new Cell("portal", null, level1);
        break;
      case 4: 
        cell = new Cell("dialog", firstMessage);
        break;
      case 5: 
        cell = new Cell("item", itemMessage, null, null, null, item);
      break;
      case 6: 
        cell = new Cell("dialog", doorLocked);
        break;
      case 7:
        cell = new Cell("teleport" , null, null, 730, 150);  
        break;
      case 8:
      cell = new Cell("teleport" , null, null, 40, 150);  
      break;
      case 9:
      cell = new Cell("dialog" ,sign);  
      break;
      case 10: 
        cell = new Cell("dialog", doorLocked2);
        break; 
      case 11:
        cell = new Cell("dialog", sign2);
        break; 
        case 12:
        cell = new Cell("dialog", mushroomMessage);
        break;
      default: 
        cell = new Cell("empty");
    }
    return cell;
}
  getCellAt(x, y) {
     
    if (x >= 0 && x < columns && y >= 0 && y < rows) {
      return this.layout[y][x];
    }
    return null;
  }
}

class visual{
  constructor(objectImg, x,y){
    this.img = objectImg; 
    this.x = x; 
    this.y = y; 
    this.active = true; 
  }
  display(){
    if(this.active){
      image(this.img, this.x, this.y);    
    }
   
  }
  setInactive(){
    this.active = false; 
  }
  
  
}

class level{
  constructor(backgroundImg, grid, objectList,x, y){
    this.backgroundImg = backgroundImg; 
    this.grid = grid; 
    this.objectList = objectList; 
    this.x = x;
    this.y = y; 
    
    
  }
  playerReset(){
    player.x = this.x; 
    player.y = this.y; 
  }
   display() {
    image(this.backgroundImg, 0, 0);
    for (const obj of this.objectList) {
      obj.display();
    }
     if(gameState[7]){
       this.renderGrid();
     }
    
  }

  renderGrid() {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        let cell = this.grid.getCellAt(col, row);
        let cellX = col * cellWidth;
        let cellY = row * cellHeight;
        if (cell.isWall()) fill(255, 0, 0, 100);
        else if (cell.isPortal()) fill(255, 255, 0, 100);
        else if (cell.isDialog()) fill(0, 0, 255, 100);
        else if (cell.isItem()) fill(0, 255, 255, 100);
        else if(cell.isTeleport()) fill(0, 255, 255, 100);
        else fill(0, 0, 0, 0);
        rect(cellX, cellY, cellWidth, cellHeight);
      }
    }
  }
   

  
}




