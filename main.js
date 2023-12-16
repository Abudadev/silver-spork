var timer2 = 0;
var rannum;


function preload(){
 friend = ml5.imageClassifier("DoodleNet");
}

function setup(){
 canvas = createCanvas(250,250);
 canvas.center();
 background("white");
 canvas.mouseReleased(canvasClassify);
 synth = window.speechSynthesis;
}

function draw(){
 strokeWeight("5");
 stroke("black");

 if(mouseIsPressed){
  line(pmouseX,pmouseY,mouseX,mouseY);
 }
}

function clearCanvas(){
    background("white")
}

function timer(){
    timer2 = timer2 + 1;
 document.getElementById("time").innerHTML = timer2;

 setTimeout(function(){
    timer();
 }, 50);

 if(timer2 == 500){
    timer2 = 0;
    WTD();
 }
}

function WTD(){
    rannum = Math.random();

    if(rannum > 0.1){
     document.getElementById("wtd").innerHTML = "river";
    }

    if(rannum > 0.2){
        document.getElementById("wtd").innerHTML = "grass";
    }

    if(rannum > 0.3){
        document.getElementById("wtd").innerHTML = "rain";
    }

    if(rannum > 0.4){
        document.getElementById("wtd").innerHTML = "beach";
    }

    if(rannum > 0.5){
        document.getElementById("wtd").innerHTML = "cookie";
    }

    if(rannum > 0.6){
        document.getElementById("wtd").innerHTML = "peas";
    }

    if(rannum > 0.7){
        document.getElementById("wtd").innerHTML = "strawberry";
    }

    if(rannum > 0.8){
        document.getElementById("wtd").innerHTML = "cactus";
    }

    if(rannum > 0.9){
        document.getElementById("wtd").innerHTML = "stitches";
    }
}

function canvasClassify(){
 friend.classify(canvas,gotresults)
}

function gotresults(error,results){
 if(error){
  console.error(error);
}

else{
    console.log(results);
    document.getElementById("label").innerHTML = "Label:" + results[0].label;
    document.getElementById("confidence").innerHTML = "Confidence:" + Math.round(results[0].confidence * 100) + "%";

     check = document.getElementById("wtd").value;

     if(results[0].label == check && results[0].confidence > 0.5){
      points = points + 1;
     document.getElementById("points1").innerHTML = points;
    }
}
}
