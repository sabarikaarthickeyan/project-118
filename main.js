function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(50,150);

    canvas = createCanvas(600,600);
    canvas.position(700,150);
    background("green");

    posenet = ml5.poseNet(video,modelloded);
    posenet.on('pose',gotposes)   
}
rightwristX=0;
leftwristX=0;
difference=0;
function modelloded(){
    console.log("Model is loaded!!");

}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = floor(leftwristX-rightwristX);
        
        console.log(difference);
    }
}
function draw(){
    background("blue");
    textSize(difference);
    fill("red");
    stroke("yellow");
    text("sabari",80,300);
    
}