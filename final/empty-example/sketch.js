	var canvas;
	var slider;
	var submitButton;
	var lineObjs = [];
	var particles = [];

	function setup() {
		resetSketch();
		var button = createButton('Reset');
		button.position(23, 600);
		button.mousePressed(resetSketch);
		
		colorMode(HSB, 255);
		slider = createSlider(0, 255,127);
		slider.position(140, 600);
		
		var myCanvas = createCanvas(500, 400);
		myCanvas.parent('constellation');
		myCanvas.position(10, 10);
	
		background(0);
		
		submitButton = createButton('Save as PNG');
		submitButton.position(340, 600);
		submitButton.mouseClicked(function(){
			saveCanvas(myCanvas, constellation.png)
		});
		
		img = createImg("assets/space2.jpg");
		canvas = createCanvas(400, 400);
	
		img.position(25, 180);
  		img.size(400, 400);
  		canvas.position(25, 180);
	}


function resetSketch() {
		
		var myCanvas = createCanvas(500, 400);
		myCanvas.parent('constellation');
		myCanvas.position(10, 10);
	
		background(0);
	
		
		img = createImg("assets/space2.jpg");
		canvas = createCanvas(400, 400);
	
		img.position(25, 180);
  		img.size(400, 400);
  		canvas.position(25, 180);
		
	}


	function draw() {
		noStroke();
		fill(255);
		rect(0, 0, width, 40);
		fill(0);
		text("Use the mouse to draw your own constellation.", 10, 15);
		text("Move the slider left and right to change the colors of the stars.", 10, 30);
		noFill();
		stroke(255);
		strokeWeight(10);
		rect(0, 0, width, height);
	}

	function mouseDragged() {
		strokeWeight(3);
		stroke(255);
		line(mouseX, mouseY, pmouseX, pmouseY);
		
	}

	function mouseReleased() {
		stroke(slider.value(), 255, 255);
  		fill(slider.value(), 255, 255, 127);
		ellipse(mouseX, mouseY, 3, 3);
	}

	function mouseClicked(){
		if (submitButton === mouseClicked){
			save('myCanvas.png');
			return false;
		}
  		
	}


	






