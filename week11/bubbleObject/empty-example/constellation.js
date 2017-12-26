function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
	
  background(0);

//	translate(-width/2,-height/2,0); //moves our drawing origin to the top left cornerz
  
	
  var radius = width * 1.5;

  orbitControl();
	
	normalMaterial();
	
  translate(0, 0, -600);
  for(var i = 0; i <= 12; i++){
    for(var j = 0; j <= 12; j++){
      push();
      var a = j/12 * PI;
      var b = i/12 * PI;
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(2 * a) * radius * sin(b));    
      if(j%2 === 0){
		rotateX(frameCount * 0.01);
  		rotateY(frameCount * 0.01);
  		torus(5, 5);  
        sphere(3);
      }else{
        rotateX(frameCount * 0.01);
  		rotateY(frameCount * 0.01);
  		sphere(5);
      }
      pop();
		
    }
  }
}


