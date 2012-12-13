



function drawResume(resume){
var json = eval("("+resume+")");


$("#show").fadeIn();
$("#pe").html($("#people").val());
$("#ag").html($("#age").val());
$("#ad").html($("#address").val());
$("#ph").html($("#phone").val());
$("#jo").html($("#job").val());
$("#sa").html($("#salary").val());
$("#ho").html($("#holiday").val());
//var json = {"describes": [{"y": 5, "x": 1, "text": "武术"},{"y": 2, "x": 3, "text": "武术"},{"y": 3, "x": 0.83, "text": "c"}, {"y": 4, "x": 2.0, "text": "java"}, {"y": -5, "x": 0.83, "text": "typewriter,Microsoft"}, {"y": -5, "x": 1.83, "text": "programer,Microsoft"}], "histograms": [{"x2":1 , "y": -2, "x1": 0.83, "color": [192, 80, 77]}, {"x2": 2.42, "y": -2, "x1": 1.83, "color": [192, 80, 77]}], "lines": [{"y": [5,2,2,5], "x": [1, 3,4,5], "color": [0, 0, 0]},{"y": [3, 4], "x": [0.83, 1.0], "color": [246, 20, 2]}, {"y": [3, 4], "x": [1.83, 2.0], "color": [137, 156, 12]}], "axis": {"yp": 10, "xp": 6, "xn": 0, "starttime": 2010, "yn": 10}}


var canvas = document.getElementById("screen"); 
var ctx = canvas.getContext("2d"); 
var xn1=1100/json.axis.xp;
var yn1=400/(json.axis.yp+json.axis.yn);
ctx.beginPath(); 
ctx.lineWidth=18;
ctx.strokeStyle ="#000";
ctx.moveTo(50, 250); 
ctx.lineTo(1150,250); 
ctx.lineTo(1145,245);
ctx.stroke(); 
ctx.lineWidth=5;
ctx.moveTo(50, 450); 
ctx.lineTo(50,50);
ctx.lineTo(52,52);
ctx.stroke(); 
ctx.closePath();

for(var i=0;i<=json.axis.xp;i++){
ctx.fillStyle="fff";
ctx.font= "12pt Calibri";
ctx.fillText(i+1*json.axis.starttime, 45+i*xn1,255 )
}


for(var j=1;j<=json.axis.yp;j++){
ctx.fillStyle="000";
ctx.fillText(j,38,250-yn1*j)
}

for(var j=1;j<=json.axis.yn;j++){
ctx.fillStyle="000";
ctx.fillText(j,38,250+yn1*j)
}

 for(var i=0;i<json.lines.length;i++){
var color='rgba('+json.lines[i].color[0]+','+json.lines[i].color[1]+','+json.lines[i].color[2]+',0.5)';
ctx.beginPath();
ctx.lineWidth=3;
var cs= 50+xn1*(json.lines[i].x[0]);
ctx.moveTo(50+xn1*(json.lines[i].x[0]),240);
ctx.lineTo(50+xn1*(json.lines[i].x[0]),250-yn1*json.lines[i].y[0]);
ctx.strokeStyle = color;
ctx.stroke(); 
for(var j=1;j<json.lines[i].x.length;j++){
ctx.lineTo(50+xn1*(json.lines[i].x[j]),250-json.lines[i].y[j]*yn1);
ctx.strokeStyle = color;
ctx.stroke(); 
}
ctx.lineTo(50+xn1*(json.lines[i].x[j-1]),240);
ctx.strokeStyle = color;
ctx.stroke(); 
ctx.lineTo(cs,240);
ctx.strokeStyle = color;
ctx.stroke(); 
ctx.fillStyle=color;
ctx.fill();
ctx.closePath();

}

ctx.beginPath();
for(var i=0;i<json.histograms.length;i++)

{var color='rgb('+json.histograms[i].color[0]+','+json.histograms[i].color[1]+','+json.histograms[i].color[2]+')';
     ctx.fillStyle=color;

  ctx.fillRect(50+xn1*(json.histograms[i].x1),260,xn1*(json.histograms[i].x2-json.histograms[i].x1),-3-yn1*(json.histograms[i].y));

   }
 ctx.closePath();
 
for(var j=0;j<json.describes.length;j++){
ctx.fillStyle="000000";
ctx.fillText(json.describes[j].text,50+xn1*json.describes[j].x,230-yn1*json.describes[j].y);
;
}
 

}


