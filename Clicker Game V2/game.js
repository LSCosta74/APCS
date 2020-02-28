// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  bananaImg = createImg('Banana Img.png', 'banana Image')
  bananaImg.size(200, 100)

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  difficultySlider=createSlider(1, 5, 2, 0.5)
  difficultyLabel.position(width/20,height/8)
  difficultySlider.position(width/20,height/6)

//Creates Score Display
scoreDisplay = createElement('h4', 'SCORE: ' + score)
scoreDisplay.position(width/20,height/10.2)

bananaImg.mousePressed(increaseScore)
}

function draw() {
  // Adjust frameRate according to slider
  frameRate(difficultySlider.value())
  
  // Randomly Position Banana
  bananaImg.position(random(width), random(height))
  
}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
score = score+1
scoreDisplay.html('SCORE: ' + score)
}

function decreaseLives() {
lives= lives-1
livesDisplay.html('LIVES: ' + lives)
}

function checkWin() {
if(score===winningNum){
window.location.href('win.html')
}

}

function checkLose() {
if(lives===0){
  window.location.href('lose.html')
}
}
