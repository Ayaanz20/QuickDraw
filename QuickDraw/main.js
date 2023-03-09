

function preload(){
classifier=ml5.imageClassifier('DoodleNet');
 }
 function draw(){

 }
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background('white');
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function updateCanvas(){
    background('white');


}
