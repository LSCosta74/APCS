let heading
let button
function setup(){
  createCanvas(windowWidth, windowHeight)
  heading=createElement('h1', 'You Lose!')
  heading.position(width/2.11,height/4)
  button=createButton('Try Again?')
  button.mousePressed(goToLink)
  button.position(width/2.05,height/2.5)
}

function goToLink() {
  window.location.href = 'game.html'
}