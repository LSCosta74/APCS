let bananaImg;
let heading;
let button;
function setup() {
    
    createCanvas(windowWidth, windowHeight)
    bananaImg = createImg('Banana Img.png', 'banana image')
    bananaImg.size(200,100)
    heading = createElement('h2', 'Click The Banana!');
    heading.position(width/3,height/4)
    frameRate(3)
    button = createButton('Back To Main Page');
    button.position(width / 16, height / 16)
    button.mousePressed(goToLink)
     
    
}

function draw() {
    bananaImg.position(random(width),random(height))
    bananaImg.mousePressed(youWon)
    background(220);
}

function youWon() {
    heading.html('You Won!')
    bananaImg.remove()
}


function goToLink() {
  window.location.href = 'main.html'; // Same tab
}