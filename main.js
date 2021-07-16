noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,450);
    canvas.position(570,200);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#800000');
    fill('#DAA520')
    stroke('#FFD700')
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML="Width and Height of a square will be "+difference+"px";
    
}

function modelLoaded(){
    console.log('dont worry posenet loaded...');
}

function gotPoses(results){
    
    if(results.length>0){

        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose X ="+noseX+"nose Y ="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("Left wrist ="+leftWristX+"Right Wrist="+rightWristX+"difference="+difference);
        difference=floor(leftWristX-rightWristX);
    }

}
