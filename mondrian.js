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
  line(106, 246, 530, 245);
  line(530, 244, 530, 643);
  pop();

  // blue line
  push();
  stroke(0, 128, 255);
  strokeWeight(6);
  line(199, 648, 200, 395);
  line(201, 397, 629, 400);
  line(630, 399, 629, 57);
  pop();

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

  push();
  strokeWeight(2);
  fill(0, 0, 102);
  rect(237, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(102, 102, 0);
  rect(192, 100, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(255, 128, 0);
  rect(237, 100, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(123, 45, 67);
  rect(283, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(255, 128, 0);
  rect(283, 100, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(200, 100, 50);
  rect(328, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(150, 75, 25);
  rect(374, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(255, 0, 0);
  rect(420, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(0, 0, 255);
  rect(465, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(50, 150, 200);
  rect(510, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(255, 128, 0);
  rect(555, 56, 45, 45);
  pop();

  push();
  strokeWeight(2);
  fill(0, 0, 0);
  rect(600, 56, 25, 45);
  pop();

  push();
  strokeWeight(2);
  fill(30, 30, 30);
  rect(328, 100, 45, 45);

  push();
  strokeWeight(2);
  fill(67, 0, 130);
  rect(375, 100, 45, 45);

  push();
  strokeWeight(2);
  fill(67, 255, 130);
  rect(421, 100, 45, 45);

  push();
  strokeWeight(2);
  fill(67, 255, 255);
  rect(466, 100, 45, 45);

  push();
  strokeWeight(2);
  fill(67, 100, 255);
  rect(510, 100, 45, 45);

  push();
  strokeWeight(2);
  fill(255, 100, 255);
  rect(556, 100, 45, 45);

  push();
  strokeWeight(2);
  fill(0, 0, 0);
  rect(600, 100, 25, 45);

  // color rectangle middle bottom
  push();
  strokeWeight(2);
  fill(0, 204, 204);
  rect(272, 249, 110, 65);
  pop();

  // color rectangle middle top
  push();
  strokeWeight(2);
  fill(0, 204, 204);
  rect(390, 154, 142, 87);
  pop();

  //color middle rectangle right
  push();
  fill(0, 0, 0);
  rect(633, 154, 62, 162);
  pop();

  //color bottom rectangle middle
  push();
  strokeWeight(12);
  fill(245, 245, 245);
  rect(200, 390, 330, 260);
  pop();

  // color rectengle bottom left
  push();
  noStroke();
  fill(0, 204, 204);
  rect(107, 502, 88, 141);
  pop();

  push();
  strokeWeight(2);
  fill(245, 245, 245);
  rect(107, 152, 274, 89);
  pop();
}
