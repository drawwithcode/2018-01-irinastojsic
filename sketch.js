function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255, 236, 190);
}

function draw() {

  createCanvas(500,500);
  background(255, 236, 190);


  colorMode(RGB);
stroke(3,3,3);
strokeWeight(2);
fill(177,177,177);
rect(width/2,height/2, 175,114);


strokeWeight(2);
line(295,height/2+20,305,height/2+20);
line(365,height/2+20,375,height/2+20);
noFill();
arc(340, 320, 20,20, QUARTER_PI, PI);

strokeWeight(3);
fill(3,3,3);
ellipse(width/2+50,height/2+50,40,40);
ellipse(width/2+120,height/2+50,40,40);

noStroke();
fill(250,250,250);
ellipse(width/2+45,height/2+45,15,15);
ellipse(width/2+60,height/2+45,10,10);
ellipse(width/2+125,height/2+45,15,15);
ellipse(width/2+110,height/2+45,10,10);



fill(255, 144, 204);
ellipse(width/2+28,height/2+85,20,20);
ellipse(width/2+142,height/2+85,20,20);


strokeWeight(7);
stroke(250,250,250);
line(270,height/2+6,420,height/2+6);
line(height/2+170,250,height/2+170,330);
stroke(131, 129, 129);
line(height/2+4,248,height/2+4,360);
line(254,width/2+109,420,width/2+109);

noFill();
stroke(254, 244, 8);
strokeWeight(5);
ellipse(width/2+85,height/2-28,30,30);

strokeWeight(2);
stroke(3,3,3);
line(height/2+85,225,height/2+85,250);

strokeWeight(1);
fill(243,24,53);
ellipse(width/2+85,height/2-28,10,10);

strokeWeight(2);
stroke(3,3,3);
fill(177,177,177);
rect(width/2-15,height/2+40, 15,30);
rect(width/2+175,height/2+40, 15,30);

strokeWeight(2);
stroke(250,250,250);
line(height/2-13,317,height/2-13,294);
line(height/2+188,317,height/2+188,294);
stroke(3,3,3);
line(235,height/2+55,225,height/2+55);
line(450,height/2+55,440,height/2+55);
fill(243, 24, 53);
ellipse(width/2-30,height/2+55,10,10);
ellipse(width/2+203,height/2+55,10,10);


stroke(3,3,3);
strokeWeight(2);
fill(35, 168, 226);
rect(width/2, height/2-5, 175,7);

stroke(3,3,3);
strokeWeight(2);
fill(177,177,177);
rect(width/2+45,height/2+114, 83,72);

strokeWeight(3);
stroke(131, 129, 129);
line(298,width/2+116,373,width/2+116);
line(298,width/2+183,373,width/2+183);
line(height/2+47,375,height/2+47,432);
stroke(250,250,250);
line(height/2+125,375,height/2+125,432);

stroke(3,3,3);
strokeWeight(2);
fill(177,177,177);
rect(width/2+59,height/2+186, 23,15);
rect(width/2+93,height/2+186, 23,15);
fill(35,168,226);
rect(width/2+59,height/2+201, 23,5);
rect(width/2+93,height/2+201, 23,5);

stroke(3,3,3);
strokeWeight(2);
fill(34, 221, 4);
rect(width/2+59,height/2+122,55,55);

noFill();
strokeWeight(3);
stroke(34, 188, 17);
rect(width/2+61,height/2+125,49,49);

push();
translate(width/2+85,height/2+148);
rotate(frameCount/7);
rectMode(CENTER);
fill(254, 244, 8);
rect(0,0,25,25);
pop();









}
