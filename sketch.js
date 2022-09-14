var path,boy, leftBoundary,rightBoundary;
var pathImge,boyImge;
var i;

function preload(){
  //loadImage de path (camino)
  pathImge = loadImage("path.png");
  //loadAnimation de boy (niño)
  boyImge = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5,png");
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path = createSprite(0, 170, 10, 10);
 path.addImage("camino",pathImge);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

//crear sprite de boy (niño)
boy = createSprite(200,300,20,50);
//agregar animación para boy
boy.addAnimation("surfer boy", boyImge);
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.X = MOouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
