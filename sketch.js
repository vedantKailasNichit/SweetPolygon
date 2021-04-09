const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let engine, world;
let ground;
let stand;
let stand2;
let polygon_img;
let polygon;
let slingshot;
let mConstraint;
const boxes =[];
const boxes1 =[]
const boxes2 =[];
const boxes3 =[];
const boxes4 =[];
const boxes5 =[];
const boxes6 =[];

const boxes7 =[];
const boxes8 =[]
const boxes9 =[];
const boxes10 =[];
const boxes11 =[];
const boxes12 =[];
const boxes13 = [];

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  const canvas = createCanvas(1366,632);
  canvas.position(0,0)

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(width/2, height-10, 2000, 20);

  //stand1

  for (let i = 0; i < 4; i++) {
		boxes[i] = new Block(500, 400 - i * 70, 30, 60);
	}
  for (let i = 0; i < 3; i++) {
		boxes1[i] = new Block(470, 400 - i * 70, 30, 60);
	}
  for (let i = 0; i < 3; i++) {
		boxes2[i] = new Block(530, 400 - i * 70, 30, 60);
	}
  for (let i = 0; i < 2; i++) {
		boxes3[i] = new Block(440, 400 - i * 70, 30, 60);
	}
  for (let i = 0; i < 2; i++) {
		boxes4[i] = new Block(560, 400 - i * 70, 30, 60);
	}
  for (let i = 0; i < 1; i++) {
		boxes5[i] = new Block(410, 400 - i * 70, 30, 60);
	}
  for (let i = 0; i < 1; i++) {
		boxes6[i] = new Block(590, 400 - i * 70, 30, 60);
	}

  //stand 2
  for (let i = 0; i < 4; i++) {
		boxes7[i] = new Block(1000, 250 - i * 70, 30, 60);
	}
  for (let i = 0; i < 3; i++) {
		boxes8[i] = new Block(970, 250 - i * 70, 30, 60);
	}
  for (let i = 0; i < 2; i++) {
		boxes9[i] = new Block(940, 250 - i * 70, 30, 60);
	}
  for (let i = 0; i < 1; i++) {
		boxes10[i] = new Block(910, 250 - i * 70, 30, 60);
	}
  for (let i = 0; i < 3; i++) {
		boxes11[i] = new Block(1030, 250 - i * 70, 30, 60);
	}
  for (let i = 0; i < 2; i++) {
		boxes12[i] = new Block(1060, 200 - i * 70, 30, 60);
	}
  for (let i = 0; i < 1; i++) {
		boxes13[i] = new Block(1090, 200 - i * 70, 30, 60);
	}
  polygon = new Ploygon(200,200,20);
  slingshot = new SlingShot(200, 200, polygon.body);

  const mouse = Mouse.create(canvas.elt);
	const options = {
	  mouse: mouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

  stand1 = new Stand(500,500,250,10);
  stand2 = new Stand(1000,350,250,10);

}


function keyPressed() {
	if (key == ' ') {
	  World.remove(world, polygon.body);
	  polygon = new Ploygon(100, 200, 20);
	  slingshot.attach(polygon.body);
	}
}

function mouseReleased() {
	setTimeout(() => {
	  slingshot.fly();
	},60);
}

function draw() {
  background(56,44,44); 
  Engine.update(engine);
  
  ground.show();
  stand1.show();
  stand2.show();
  polygon.show();
  slingshot.show();

  for (let box of boxes) {
    fill('#b34e24')
		box.display();
	}
  for (let box of boxes1) {
    fill('#cc5a2a')
		box.display();
	}
  for (let box of boxes2) {
    fill('#cc5a2a')
		box.display();
	}
  for (let box of boxes3) {
    fill('#e6652f');
		box.display();
	}
  for (let box of boxes4) {
    fill('#e6652f')
		box.display();
	}
  for (let box of boxes5) {
    fill('#ff7034')
		box.display();
	}
  for (let box of boxes6) {
    fill('#ff7034')
		box.display();
	}

  //stand 2
  for (let box of boxes7) {
    fill('#00994d')
		box.display();
	}
  for (let box of boxes8) {
    fill('#00b35a')
		box.display();
	}
  for (let box of boxes9) {
    fill('#00cc66')
		box.display();
	}
  for (let box of boxes10) {
    fill('#00e673');
		box.display();
	}
  for (let box of boxes11) {
    fill('#00b35a')
		box.display();
	}
  for (let box of boxes12) {
    fill('#00cc66')
		box.display();
	}
  for (let box of boxes13) {
    fill('#00e673')
		box.display();
	}

}
