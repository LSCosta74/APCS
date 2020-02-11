let json;
let joke;
let punchline;
const apiURL = 'https://official-joke-api.appspot.com/random_joke'

function preload(){
  json = loadJSON(apiURL);
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  joke = json.setup;
  punchline = json.punchline;
  

  document.getElementById('joke').innerHTML = joke;
  document.getElementById('punchline').innerHTML = punchline;
}
