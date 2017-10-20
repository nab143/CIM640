var counter = 0;


function setup() {
    createCanvas(400, 400);
    noFill();
}


function draw() {

    //background(255);
    frameRate(60); //can adjust frame rate but slows down the entire canvas/interaction, it max out at 60
    rectMode(CENTER);

    push();
    translate(width / 2, height / 2);
    //rotate(counter++); //change to rotate(45);
	//2.0=200% 0.5=50%
    scale(random(5.0));
    stroke(random(256), random(256), random(256));
    rect(0, 0, 50, 50);


    rect(0, 20, 10,10);
    pop();


    rect(0, 0, 100, 100);




}