var sonic, sonicr
var backgroundd, backimg
var ground
var spike, spikeimg

function preload(){
sonicr = loadAnimation("run 1.png", "run 2.png", "run 3.png", "run 4.png")
backimg = loadImage("srep brain.jpg")
}

function setup() {
 createCanvas(600, 400);

 sonic = createSprite(50, 300, 60, 150)
 sonic.addAnimation("sonicr", sonicr)
 sonic.scale = 2

 backgroundd = createSprite(300,200)
 backgroundd.addImage("backimg", backimg)
 backgroundd.scale = 0.5
 
 ground = createSprite(300, 350, 2000, 20)


 spikeimg = loadImage("spikes.png")
}

function draw() {
 background(180);

 if(backgroundd.x < 100){
   backgroundd.x = 500
 }

sonic.depth = backgroundd.depth + 1
sonic.velocityY = 15
sonic.collide(ground)

if(keyDown("space")){
    sonic.velocityY = sonic.velocityY - 30
}

ground.visible = false

 backgroundd.velocityX = -20
 drawSprites()

}
