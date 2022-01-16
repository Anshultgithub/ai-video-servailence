function setup(){
    c1 = createCanvas(480, 500)
    c1.center()
}
function start(){
    myModel = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML = "detecting objects"
}
status = ""
function modelLoaded(){
    console.log("my model has loaded")
    status = true
    v1.loop()
    v1.volume(0)
}
v1 = ""
function preload(){
v1 = createVideo("video.mp4")
v1.hide()
}
objects = []
function gotResult(error, results){
if(error){
    console.log(error)
}
else{console.log(results);
objects = results
}
}
function draw(){
    image(v1, 0, 0, 480, 500)
if(status != ""){
myModel.detect(v1, gotResult)
for(i = 0; i < objects.length; i++){
    document.getElementById("status").innerHTML = "objects detected"
document.getElementById("number").innerHTML = objects.length
fill("red")
per = floor(objects[i].confidence * 100)
text(objects[i].label + "  " + per + "%", objects[i].x, objects[i].y)
noFill()
stroke("blue")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
}

}










}