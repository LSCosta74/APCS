let slider
let satSlider
let brightSlider


 function setup() {
   createCanvas(600, 120); 
   colorMode(HSB);
   slider = createSlider(0, 360, 100, 1)
   satSlider = createSlider(0,100,100,1)
   brightSlider = createSlider(0,100,100,1)
   textInput = createInput("hello")
   h1 = createElement("h1", textInput.value())
 }
  function draw() {
    background(slider.value(), satSlider.value(), brightSlider.value());
    textSize(80);
    text(textInput.value(), 210, 100);
    h1.html(textInput.value())
 }