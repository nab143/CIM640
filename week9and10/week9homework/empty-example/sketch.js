var centerX = 0;
var centerY = 0;

var value = 192;
var value2 = ("red");

var hRedColor, hGreenColor, hBlueColor;

var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var hitZoneX = 20;
var hitZoneY = 20;

var hitZone2X = 380;
var hitZone2Y = 360;

var hitZone3X = 500;
var hitZone3Y = 500;

var hitZone4X = 100;
var hitZone4Y = 450;

var hitZone5X = 500;
var hitZone5Y = 50;

var hitZone6X = 330;
var hitZone6Y = 100;

function preload() {
    bgImage = loadImage("assets/space.jpg");
    bgImage2 = loadImage("assets/bikiniBottom.jpg");
    theSun = loadImage("assets/theSun.png");
	moon = loadImage("assets/moon.png");
	ufo = loadImage("assets/ufo.png");
	squidward = loadImage("assets/squidward.png");
	spongebob = loadImage("assets/spongebob.png");
	patrick = loadImage("assets/patrick.png");
}

function setup() {
    createCanvas(700, 600);
    centerX = width / 2;
    centerY = height / 2;

    bgColor = color("yellow");

    hRedColor = createSlider(0, 255, 0);
    hGreenColor = createSlider(0, 255, 0);
    hBlueColor = createSlider(0, 255, 0);

    bgChange = createButton("Bikini Bottom");
    bgChange.position(340, 550);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("space");
    bgChange2.position(100, 550);
    bgChange2.mousePressed(changeBgFunction2);

    currentBgImage = bgImage;
}

function draw() {
    background(bgColor);

    image(currentBgImage, 0, 0, 800, 600);

	stroke(0);

	//head
	strokeWeight(2);
	fill(value);
	rect(200, 200, 100, 100, 20, 20, 0, 0);

	//left ear
	strokeWeight(1);
	fill("gray")
	rect(189, 220, 10, 20);
	//left ear bolt
	strokeWeight(1);
	fill("gray")
	rect(184, 225, 5, 10);

	//right ear
	strokeWeight(1);
	fill("gray")
	rect(300, 220, 10, 20);
	//right ear bolt
	strokeWeight(1);
	fill("gray")
	rect(310, 225, 5, 10);

	//left eye white
	strokeWeight(1);
	fill("white")
	rect(210, 210, 30, 30);
	//left eye black
	strokeWeight(1);
	fill("black")
	rect(217.5, 217.5, 15, 15);
	//left eye red
	var leftEyeWiggle = map(mouseX, 0, width, -2, 2);
	strokeWeight(1);
	fill("red")
	rect(221 + leftEyeWiggle, 221, 8, 8);

	//right eye white
	strokeWeight(1);
	fill("white")
	rect(260, 210, 30, 30);
	//right eye black
	strokeWeight(1);
	fill("black")
	rect(267.5, 217.5, 15, 15);
	//right eye red
	var rightEyeWiggle = map(mouseX, 0, width, -2, 2);
	strokeWeight(1);
	fill("red")
	rect(271 + rightEyeWiggle, 221, 8, 8);

	//mouth main
	strokeWeight(1);
	fill("white")
	rect(210, 270, 80, 20, 10, 10, 10, 10);
	//mouth line
	strokeWeight(2);
	stroke("rgb(0,255,0)");
	line(212, 280, 240, 280);

	line(240, 280, 243, 283);
	line(243, 283, 246, 280);
	line(246, 280, 249, 283);
	line(249, 283, 252, 280);
	line(252, 280, 255, 283);
	line(255, 283, 258, 280);
	line(257, 280, 261, 283);
	line(260, 283, 264, 280);
	line(264, 280, 289, 280);


	//antenna triangle
	strokeWeight(2);
	fill("gray");
	stroke("black")
	triangle(245, 200, 250, 180, 255, 200);
	//antenna circle
	strokeWeight(2);
	fill(value2);
	stroke("black")
	ellipse(250, 180, 10, 10);
	//antenna waves
	noFill();
	stroke("white")
	arc(250,175,17,17, 135.5, 24.7);
	noFill();
	arc(250,170,25,25, 135.5, 24.7);
	noFill();
	arc(250,165,33,33, 135.5, 24.7);

	stroke("black");

	//neck 1
	strokeWeight(2);
	fill("gray")
	rect(235, 300, 30, 10);
	//neck 2
	strokeWeight(2);
	fill("gray")
	rect(230, 310, 40, 10);
	//neck 3
	strokeWeight(2);
	fill("gray")
	rect(225, 320, 50, 10);

	//body
	strokeWeight(2);
	stroke(129,129,129);
	fill(hRedColor.value(),hGreenColor.value(),hBlueColor.value());
	rect(210, 330, 80, 103, 5, 5);
	//body monitor
	strokeWeight(2);
	fill("white")
	rect(225, 345, 50, 33, 5, 5, 5, 5);
	//monitor scribble
	stroke("rgb(0,255,0)");
	line(232, 365, 227, 360);
	stroke("rgb(0,255,0)");
	line(237, 360, 232, 365);
	stroke("rgb(0,255,0)");
	line(242, 365, 237, 360);
	stroke("rgb(0,255,0)");
	line(247, 360, 242, 365);
	stroke("rgb(0,255,0)");
	line(252, 365, 247, 360);
	stroke("rgb(0,255,0)");
	line(257, 360, 252, 365);
	stroke("rgb(0,255,0)");
	line(262, 365, 257, 360);
	stroke("rgb(0,255,0)");
	line(267, 360, 262, 365);
	stroke("rgb(0,255,0)");
	line(272, 365, 267, 360);

	//bolts
	strokeWeight(1);
	stroke("black")
	fill(value2);
	ellipse(220, 425, 7, 7);
	ellipse(220, 340, 7, 7);
	ellipse(280, 425, 7, 7);
	ellipse(280, 340, 7, 7);

	//left arm
	fill("gray");
	rect(175, 355, 25, 7);
	rect(175, 362, 25, 7);
	rect(175, 369, 25, 7);
	rect(175, 376, 25, 7);
	rect(175, 383, 25, 7);
	rect(175, 390, 25, 7);
	rect(175, 397, 25, 7);
	rect(175, 404, 25, 7);
	//hand
	rect(170, 411, 34, 20, 5, 5, 5, 5);
	//fingers
	rect(174, 431, 5, 10, 0, 0, 10, 10);
	rect(184.5, 431, 5, 10, 0, 0, 10, 10);
	rect(195, 431, 5, 10, 0, 0, 10, 10);

	//right arm
	rect(296, 355, 25, 7);
	rect(296, 362, 25, 7);
	rect(296, 369, 25, 7);
	rect(296, 376, 25, 7);
	rect(296, 383, 25, 7);
	rect(296, 390, 25, 7);
	rect(296, 397, 25, 7);
	rect(296, 404, 25, 7);
	//hand
	rect(292, 411, 34, 20, 5, 5, 5, 5);
	//fingers
	rect(296, 431, 5, 10, 0, 0, 10, 10);
	rect(306.5, 431, 5, 10, 0, 0, 10, 10);
	rect(317, 431, 5, 10, 0, 0, 10, 10);

	//left leg
	rect(215, 432, 28, 10);
	rect(215, 442, 28, 10);
	rect(215, 452, 28, 10);
	rect(215, 462, 28, 10);
	rect(215, 472, 28, 10);
	rect(215, 482, 28, 10);
	rect(215, 492, 28, 10);
	rect(215, 502, 28, 10);

	//right leg
	rect(256, 432, 28, 10);
	rect(256, 442, 28, 10);
	rect(256, 452, 28, 10);
	rect(256, 462, 28, 10);
	rect(256, 472, 28, 10);
	rect(256, 482, 28, 10);
	rect(256, 492, 28, 10);
	rect(256, 502, 28, 10);

	//body color
	//left shoulder
	fill(hRedColor.value(),hGreenColor.value(),hBlueColor.value());
	stroke(129, 129, 129);
	rect(169, 340, 40, 15, 15, 0, 0 ,0);
	//right shoulder
	rect(290, 340, 40, 15, 0, 15, 0, 0);
	//left foot
	rect(208, 512 , 40, 20, 10, 10, 0, 0);
	//right foot
	rect(250, 512 , 40, 20, 10, 10, 0, 0);

    var hitZoneDist = dist(hitZoneX,hitZoneY,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist <= 5){
       console.log("the Sun");
        image(theSun,0,0);
       }

    strokeWeight(3);
	stroke("white");
	fill("yellow");
    ellipse(hitZoneX,hitZoneY, 10,10);

	var hitZoneDist2 = dist(hitZone2X,hitZone2Y,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist2 <= 5){
       console.log("Squidward");
        image(squidward,350,310);
       }

    strokeWeight(3);
	stroke("white");
	fill("yellow");
    ellipse(hitZone3X,hitZone3Y, 10,10);

	var hitZoneDist3 = dist(hitZone3X,hitZone3Y,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist3 <= 5){
       console.log("Spongebob");
        image(spongebob,450,350);
       }

    strokeWeight(3);
	stroke("white");
	fill("yellow");
    ellipse(hitZone4X,hitZone4Y, 10,10);

	var hitZoneDist4 = dist(hitZone4X,hitZone4Y,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist4 <= 5){
       console.log("Patrick");
        image(patrick,0,270);
       }

    strokeWeight(3);
	stroke("white");
	fill("yellow");
    ellipse(hitZone2X,hitZone2Y, 10,10);

	var hitZoneDist5 = dist(hitZone5X,hitZone5Y,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist5 <= 5){
       console.log("the Moon");
        image(moon,530,0);
       }

    strokeWeight(3);
	stroke("white");
	fill("yellow");
    ellipse(hitZone5X,hitZone5Y, 10,10);

	var hitZoneDist6 = dist(hitZone6X,hitZone6Y,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist6 <= 5){
       console.log("UFO");
        image(ufo,345,70);
       }

    strokeWeight(3);
	stroke("white");
	fill("yellow");
    ellipse(hitZone6X,hitZone6Y, 10,10);

}



function mousePressed() {
    if (value == 192) {
		value = ("red");
	} else {
	value = 192;
	}
}

function mouseReleased() {
	if (value2 == ("red")) {
		value2 = ("blue");
	} else {
		value2 = ("red");
	}
}

function changeBgFunction() {
    currentBgImage = bgImage2;
    console.log("loading bgimage2");
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}
