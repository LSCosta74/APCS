let heading
let button
function setup(){
  createCanvas(windowWidth, windowHeight)
  heading=createElement('h1', 'You Lose')
  heading.position(width/2.1,height/4)
  button=createButton('Try Again?')
  button.pressed(goToLink)
}

function goToLink()