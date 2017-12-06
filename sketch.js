var img;
var song;
var amp;
var fft;
var band;
var g;
function preload(){
  img = loadImage("images/starry.png")
  song = loadSound("songs/edub.mp3");
  
}

function setup() {
  createCanvas(screen.width, screen.height);
  background(0);
  amp = new p5.Amplitude();
  amp.setInput(song);
  fft = new p5.FFT(0,16);
  band = (width / 16);
  song.loop();
  g= width;
  scene1= 0;
}
function keyPressed(){
    if(keyCode == LEFT_ARROW){
      scene1 = 1;
    } else{
      scene1 = 0;
  }
}

function draw() {
  
  imageMode(CENTER);
  //translate(width/12, height/12);
  //background(0);
  var rms = amp.getLevel();
  var qrs = rms*100;
  var srs = 0;
  var speed = 100;
  if(scene1 == 1){
    translate(width/12, height/12);
  if(qrs < 2){
    crs = 0;
    srs = 0;
  
  }
  if(qrs > 4){
    crs = 4;
    srs = 0;
    //speed = 2;
  
  }
  if (qrs > 8){
    crs = 4;
    srs = 4;
   // speed = 10;
   
  }
  if (qrs > 12){
    crs = 20;
    srs = 20;
  }

  if (qrs > 15){
    crs = 30;
    srs = 30;
    //speed = 50;
  }
  if (qrs > 40){
    crs = 30;
    srs = 30;
   // speed = 100;
 
  }
 
  console.log(qrs);
  for(var i = 0; i < speed ; i++){
   
    var x = random(width);
    var y = random(height);
    var c = img.get(x,y);
    
    fill(c);
    noStroke();
    
    rect(x,y,srs,srs);
    ellipse(x,y,crs,crs);
     }
  }
else{
  fill(0);
  rect(0,0,screen.width,screen.height);
}

}