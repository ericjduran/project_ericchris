function setup() {
    //create canvas and background
    createCanvas(1280, 1080);
    colorMode(HSB);
    background(255, 204, 100);
  
}

function draw() {
    //color and shape of smiley face
    fill(50, 230, 100);
    ellipse(656, 546, 555, 555);
    
    //eyes and nose location
    fill(255, 204, 0);
    ellipse(520, 446, 55, 55);
    ellipse(750, 446, 55, 55);
    ellipse(640, 500, 55, 55);
    
    
    //the hair and mouth location
    rect(580, 120, 155, 155);
    rect(580, 50, 155, 155);
    rect(570, 580, 155, 155);
    //chris drove and eric wrote
  
}