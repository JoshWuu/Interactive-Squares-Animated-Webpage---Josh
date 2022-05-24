let x = 0;
let slider;
let slider1;
let slider2;
let speed = 0.02;
let distances = [];
let maxDistance;
let spacer;
const rows = 20;
const columns = 20;
const fadeSpeed = 1;
let cells = [];
function setup() { 
   createCanvas(windowWidth, windowHeight);

  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 127);
  slider.position(10,30);
  //
  slider1 = createSlider(0, 10, 2);
  slider1.position(10, 10);
  slider2 = createSlider(0, 300, 100);
  slider2.position(10, 50);

  
   for (let r = 0; r < rows; r++) {
    cells[r] = [];
    for (let c = 0; c < columns; c++) {
      cells[r][c] = random(255);
    }
  }
} 

function draw() { 
  colorMode(RGB, 255);
  const cellWidth = width / columns ;
  const cellHeight = height / rows;
  
rectMode(CORNER);
  if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {
    const mouseR = floor(rows * (mouseY / height));
    const mouseC = floor(columns * (mouseX / width));
    cells[mouseR][mouseC] = 255;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      cells[r][c] -= fadeSpeed;
      cells[r][c] = constrain(cells[r][c], 0, 255);

      const y = height * (r / rows);
      const x = width * (c / columns);

      fill(cells[r][c], 0, 128);
      rect(x, y, cellWidth, height);
    }
  }
  fill(0);
  stroke(0);
  text('Spinning Speed', 143, 25);
  text('Object Colour', 143, 45);
 text('Size', 143, 65);
 text("Josh", width/100, height*0.99)
  //end of for loop
  rectMode(CENTER);
spinningRect();
//spinningTriangle();
}



function spinningRect(){

colorMode(HSB, 255);
 	x+= speed * slider1.value();
  translate (width/2, height/2);
  rotate(x);
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
	rect(0, 0, slider2.value(), slider2.value()); 
}
function spinningTriangle(){
 	x+= speed * slider1.value();
  translate (width/2, height/2);
  rotate(x);
    stroke(slider.value(), 255, 255);
    fill(slider.value(), 255, 255, 127);
	triangle(0,0, 0, width/2, 0, slider2.value()); 
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

