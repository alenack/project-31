var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var i,j,k,l;
var plinkos, ground, divisions, particles;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(480, 800);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height, width, 40);
	groundLeft = new Ground(5, height/2 , 10, height);
	groundRight = new Ground(width - 5, height/2, 10, height);

	plinkos = [];
	for(i = 20; i < 480; i = i + 65){
	  for(k = 0; k < 6; k ++){
		plinkos.push( new Plinko(i, k*80 + 40) );
	  }
	  
	}
   
	for(i = 40; i < 480; i = i + 65){
	  for(k = 0; k < 6; k ++){
		plinkos.push( new Plinko(i, k*80 + 80) );
	  }
		
	}
  
	divisions = [];
	for (i = 0; i < 10; i ++){
	  divisions.push(new Ground(i* 52 + 5, 660, 10, 240));
	}
	
	particles = [];
	
	
	// particles = new Particle( random(10, 470), 0);
	
    

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  
  for(j = 0; j < plinkos.length; j ++){
    
    plinkos[j].display();
  }
  

  for(l = 0; l < divisions.length; l ++){
     divisions[l].display();
  }

  drawSprites();
  ground.display();
  groundLeft.display();
  groundRight.display();

  
  if(frameCount % 60 == 0){
    particles.push( new Particle( random(10, 470), 0));
    console.log("hi");
  }

  for(i= 0; i < particles.length; i ++){
    particles[i].display();
 }

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
