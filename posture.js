let capture;
let posenet;
let singlepose,skeleton;
function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO);
    capture.hide();
    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses);
}
function receivedPoses(poses){
    console.log(poses);
    if(poses.length > 0){
        singlepose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }

}
function modelLoaded(){
    console.log('model has loaded');
}
function draw(){
    image(capture,0,0);
    fill(255,0,0);
    if(singlepose){
        for(let i=0; i<singlepose.keypoints.length; i++){
            ellipse(singlepose.keypoints[i].position.x, singlepose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(3);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
        }
    }

}