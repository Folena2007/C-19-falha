var player, space, inimigo, gameover, dinheiro, ouro, explosao, anel;
var playerimg, spaceimg, inimigoimg, gameoverimg, dinheiroimg, ouroimg, explosaoimg, anelimg;
var dinheiroG, ouroG, inimigoG, anelG ;
var treasureCollection = 0;
var PLAY=1;
var END=0;
var gameState=1;


function preload(){
playerimg = loadImage("milenionfalcon.png");
spaceimg = loadImage("space.jpg");
inimigoimg = loadImage("cacaimperial.png");
gameoverimg = loadImage("gameover.png");
dinheiroimg = loadImage("money.png");
ouroimg = loadImage("ouro.jpg");
explosaoimg = loadImage("explosao.png");
anelimg = loadImage("anel.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);

 space=createSprite(width/2,200);
 space.addImage(spaceImg);
 space.velocityY = 4;

 player = createSprite(width/2,height-20,20,20);
 player.addAnimation("player",playerImg);
 player.scale=0.08;

 dinheiroG=new Group();
 ouroG=new Group();
 inimigoG=new Group();
 anelG=new Group();
}


function draw() {

    if(gameState===PLAY){
    background(0);
    player.x = World.mouseX;
        
    edges= createEdgeSprites();
    player.collide(edges);
        
      if(path.y > height ){
           path.y = height/2;
         }
        
          createMoney();
          createanel();
          createOuro();
          createInimigo();
      
          if (dinheiroG.isTouching(player)) {
            dinheiroG.destroyEach();
            treasureCollection=treasureCollection + 50;
          }
          else if (anelG.isTouching(player)) {
            anelG.destroyEach();
            treasureCollection=treasureCollection + 100;
            
          }else if(ouroG.isTouching(player)) {
            ouroG.destroyEach();
            treasureCollection= treasureCollection + 150;
            
          }else{
            if(inimigoG.isTouching(player)) {
              gameState=END;
              
              player.addAnimation("player",gameoverImg);
              player.x=width/2;
              player.y=height/2;
              player.scale=0.6;
              
              dinheiroG.destroyEach();
              anelG.destroyEach();
              ouroG.destroyEach();
              inimigoG.destroyEach();
              
              dinheiroG.setVelocityYEach(0);
              anelG.setVelocityYEach(0);
              ouroG.setVelocityYEach(0);
              inimigoG.setVelocityYEach(0);
           
          }
        }
        
        drawSprites();
        textSize(20);
        fill(255);
        text("Tesouro: "+ treasureCollection,width-150,30);
        }
      
      }
      
      function createMoney() {
        if (World.frameCount % 200 == 0) {
         dinheiro = createSprite(Math.round(random(50, width-50),40, 10, 10));
        dinheiro.addImage(dinheiroImg);
        dinheiro.scale=0.12;
        dinheiro.velocityY = 5;
        dinheiro.lifetime = 200;
        dinheiroG.add(dinheiro);
        }
      }
      
      function createanel() {
        if (World.frameCount % 320 == 0) {
         anel = createSprite(Math.round(random(50, width-50),40, 10, 10));
        anel.addImage(anelImg);
        anel.scale=0.03;
        anel.velocityY = 5;
        anel.lifetime = 200;
        anelG.add(anel);
      }
      }
      
      function createOuro() {
        if (World.frameCount % 410 == 0) {
         ouro = createSprite(Math.round(random(50, width-50),40, 10, 10));
        ouro.addImage(ouroImg);
        ouro.scale=0.13;
        ouro.velocityY = 5;
        ouro.lifetime = 200;
        ouroG.add(ouro);
        }
      }
      
      function createInimigo(){
        if (World.frameCount % 530 == 0) {
         inimigo = createSprite(Math.round(random(50, width-50),40, 10, 10));
        inimigo.addImage(inimigoImg);
        inimigo.scale=0.1;
        inimigo.velocityY = 4;
        inimigo.lifetime = 200;
        inimigoG.add(inimigo);
        }
    }
