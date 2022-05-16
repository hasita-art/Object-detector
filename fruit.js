status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    objectDetector = ml5.objectDetector(cocossd, modelloaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelloaded(){
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}