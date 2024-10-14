function setup() {
  //create a large square canvas
  createCanvas(800, 800);
}

function draw() {
  //set the fill colour to red
  fill(255, 0, 0);

  //set a thick stroke weight for the black lines
  strokeWeight(12);

  //draw the red rectangle
  rect(100, 50, 600, 600);

  // line bottom
  push();
  strokeWeight(6);
  line(99, 316, 697, 319);
  pop();

  // line middle
  line(102, 498, 698, 501);

  // line middle vertical
  line(386, 151, 390, 496);

  // line top and also yellow line
  push();
  strokeWeight(8);
  line(99, 149, 698, 150);
  pop();
  push();
  strokeWeight(6);
  // yellow line
  stroke(0, 255, 0);
  line(106, 99, 277, 101);
  line(276, 101, 273, 245);
  line(274, 245, 530, 245);
  line(530, 244, 530, 643);
  pop();
  // blue line 

  // rectangle top
  push();
  fill(255, 255, 255);
  strokeWeight(2);
  rect(103, 57, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(0, 0, 255);
  rect(103, 100, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(0, 255, 255);
  rect(148, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(255, 255, 0);
  rect(148, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(40, 255, 60);
  rect(148, 100, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(204, 0, 204);
  rect(192, 56, 45, 45);
  pop();
  push();

  strokeWeight(2);
  fill(0, 0, 102);
  rect(192, 100, 45, 45);
  pop();
}
