function preload(){
 
}
function setup(){
 video= createCapture(VIDEO);
 video.size(550,500);
 canvas= createCanvas(550,500);
 canvas.position(560,150)
 posenet= ml5.poseNet(video, modeloaded);
 posenet.on("pose",gotposes);
}
function draw(){
 background("palevioletred");
 textSize(difference);
 fill("skyblue");
 stroke("black");
 text("AARII",40,300)
}
function modeloaded(){
    console.log("model is loaded");
}
function gotposes(results){
   if (results.length>0){
    console.log(results);
    lw_x= results[0].pose.leftWrist.x;
    rw_x= results[0].pose.rightWrist.x;
    difference= lw_x-rw_x;
   }
}