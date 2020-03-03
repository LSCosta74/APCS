let Btn
let header
function setup(){
  createCanvas(windowWidth,windowHeight)
  background('grey')
  header = createElement('h1', 'Welcome to the Banana Game')
  header.position(width/2.9, height/4)
  Btn = createButton('START')
  Btn.mousePressed(gotolink)
  Btn.position(width/2.05, height/2.5)
}

function gotolink(){
    window.location.href = 'game.html'
}