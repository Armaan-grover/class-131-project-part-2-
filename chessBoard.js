var chessImage="";

function preload(){
chessImage = loadImage("chessBoard.jpg")
}

function setup(){
canvas= createCanvas(300,300)
canvas.center()
objectDetector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("message").innerHTML = "Status: detecting objects"
}

function modelLoaded() {
    console.log("The model has loaded!")
    objectDetector.detect(video, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        objects = results;
    }
}

function draw(){
image(chessImage,0,0,300,300)
}