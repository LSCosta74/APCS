let button;

function setup() {
    createCanvas(windowWidth, windowHeight);
      button = createButton('START BANANA GAME');
      button.position(width/2, height/2)
      button.mousePressed(goToLink)
      background(220);
}

function goToLink() {
    window.location.href = 'game.html'; 
}