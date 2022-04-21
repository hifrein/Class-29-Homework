const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;

var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20, "Blue", true);
  leftWall = new Base(30, height / 2 + 50, 600, 100, "Green", true);
  rightWall = new Base(width - 30, height / 2 + 50, 600, 100, "Green", true);

  //Bridge not base
  /*bridge = new Base(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);*/

  bridge = new Bridge(15, { x: width / 2 - 360, y: height / 2 });
  jointPoint = new Base(width - 325, height / 2 + 10, 10, 200, "Magenta", true);

  //THERE IS NOTHING!!!!!! (No variable assignment)
  /* = new Base(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);*/

  //Not making use of the base class
  /*bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);*/

  
  Matter.Composite.add(bridge.body, jointPoint);

  //Missing bridge.body
  //Matter.Composite.add(jointPoint);
  
  //Reversed
  //Matter.Composite.add(jointPoint, bridge.body);
  
  //Missing jointPoint
  //Matter.Composite.add(bridge.body);


  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  bridge.show();
  leftWall.show();
  rightWall.show();

  for (var stone of stones) {
    stone.show();
  }
}
