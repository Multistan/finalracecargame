var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database;
var form, player, game;
var gameState, playerCount;
var car1, car2, cars
var allPlayers;
var fuelImage, powerCoinImage;
var fuels,powerCoins
 var lifeImage
 var obstacle1, obstacle2
 var obstacle1Image, obstacle2Image
var blast, blastImage
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png")
  car2_img = loadImage("./assets/car2.png")
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png")
  obstacle1Image = loadImage("./assets/obstacle1.png")
  obstacle2Image = loadImage("./assets/obstacle2.png")
  blastImage = loadImage("./assets/blast (1).png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  console.log(canvas)
  console.log(width)
  console.log(height)
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState()


}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.updateState(1)
  }

  if (gameState === 1) {
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
