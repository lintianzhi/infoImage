var workc=0;
var out_evaluatec=0;
var in_evaluatec=new Array(20);
for(var i=0;i<20;i++){in_evaluatec[i]=0;}
function out(){
var information;
var workarray=new Array();
var evaluatearray=new Array();
var fundamental='"fundamental":{"people":"'+document.getElementById("people").value+'",\
"age":"'+document.getElementById("age").value+'",\
"address":"'+document.getElementById("address").value+'",\
"phone":"'+document.getElementById("phone").value+'",\
"starttime":'+document.getElementById("starttime").value+',\
"endtime":'+document.getElementById("endtime").value+'}';

var work='"works":[';
for(var i=0;i<=workc;i++){
var companytemp="company"+i;
var positiontemp="position"+i;
var begintimetemp="begintime"+i;
var endtimetemp="workendtime"+i;
var scoretemp="score"+i;
workarray[i]='{"company":"'+document.getElementById(companytemp).value+'",\
"position":"'+document.getElementById(positiontemp).value+'",\
"begintime":'+document.getElementById(begintimetemp).value+',\
"endtime":'+document.getElementById(endtimetemp).value+',\
"score":'+document.getElementById(scoretemp).value+'}';
if(i!=workc){work+=workarray[i]+',';}
else{work+=workarray[i]+']';}
}

var wanted='"wanted":{"job":"'+document.getElementById("job").value+'",\
"salary":"'+document.getElementById("salary").value+'",\
"holiday":"'+document.getElementById("holiday").value+'"}';

var study='"studys":[';
for(var i=0;i<=out_evaluatec;i++){
evaluatearray[i]='['
for(var j=0;j<=in_evaluatec[i];j++){
var timetemp="time"+i+j;
var scoretemp="studyscore"+i+j;
if(j!=in_evaluatec[i]){evaluatearray[i]+='{"time":'+document.getElementById(timetemp).value+',\
"score":'+document.getElementById(scoretemp).value+'},';}
else{evaluatearray[i]+='{"time":'+document.getElementById(timetemp).value+',\
"score":'+document.getElementById(scoretemp).value+'}]';}
}
}
for(var i=0;i<=out_evaluatec;i++){
var skilltemp="skillname"+i;
if(i!=out_evaluatec){study+='{"skillname":"'+document.getElementById(skilltemp).value+'","evaluates":'+evaluatearray[i]+'},';}
else{study+='{"skillname":"'+document.getElementById(skilltemp).value+'","evaluates":'+evaluatearray[i]+'}]';}
}

information='{'+fundamental+','+study+','+work+','+wanted+'}';
//alert("before server: "+information);
return information
}
function addwork(){
workc++;
var newFieldset = document.createElement("fieldset"); 
var companyInput = document.createElement("input");
var companyLabel = document.createElement("label");
var companyText=document.createTextNode("company：");
var companyDiv = document.createElement("div");
 
var positionInput = document.createElement("input");
var positionLabel = document.createElement("label");
var positionText=document.createTextNode("position：");
var positionDiv = document.createElement("div");

var begintimeInput = document.createElement("input");
var begintimeLabel = document.createElement("label");
var begintimeText=document.createTextNode("begintime：");
var begintimeDiv = document.createElement("div");

var endtimeInput = document.createElement("input");
var endtimeLabel = document.createElement("label");
var endtimeText=document.createTextNode("endtime：");
var endtimeDiv = document.createElement("div");

var scoreInput = document.createElement("input");
var scoreLabel = document.createElement("label");
var scoreText=document.createTextNode("score：");
var scoreDiv = document.createElement("div");

var TemO=document.getElementById("work"); 

companyInput.type="text";
companyInput.id="company"+workc;

positionInput.type="text";
positionInput.id="position"+workc;

begintimeInput.type="text";
begintimeInput.id="begintime"+workc;

endtimeInput.type="text";
endtimeInput.id="workendtime"+workc;

scoreInput.type="text";
scoreInput.id="score"+workc;

companyLabel.appendChild(companyText);
companyDiv.appendChild(companyLabel);
companyDiv.appendChild(companyInput);

positionLabel.appendChild(positionText);
positionDiv.appendChild(positionLabel);
positionDiv.appendChild(positionInput);

begintimeLabel.appendChild(begintimeText);
begintimeDiv.appendChild(begintimeLabel);
begintimeDiv.appendChild(begintimeInput);

endtimeLabel.appendChild(endtimeText);
endtimeDiv.appendChild(endtimeLabel);
endtimeDiv.appendChild(endtimeInput);

scoreLabel.appendChild(scoreText);
scoreDiv.appendChild(scoreLabel);
scoreDiv.appendChild(scoreInput);

newFieldset.appendChild(companyDiv);
newFieldset.appendChild(positionDiv);
newFieldset.appendChild(begintimeDiv);
newFieldset.appendChild(endtimeDiv);
newFieldset.appendChild(scoreDiv);
TemO.appendChild(newFieldset); 
}
function addevaluate(This){
temp=parseInt(This.parentNode.parentNode.children[1].id);
in_evaluatec[temp]++;
var timeText=document.createTextNode("time： ");
var timeInput = document.createElement("input");
var timeDiv = document.createElement("div");
var timeDd = document.createElement("dd");
var scoreText=document.createTextNode("score：");
var scoreInput = document.createElement("input");
var scoreDd = document.createElement("dd");
var TemO=document.getElementById(This.parentNode.parentNode.children[1].id);
timeInput.type="text";
timeInput.id="time"+temp+in_evaluatec[temp];
scoreInput.type="text";
scoreInput.id="studyscore"+temp+in_evaluatec[temp];
timeDiv.appendChild(timeText);
timeDiv.appendChild(timeInput);
timeDd.appendChild(timeDiv);
scoreDd.appendChild(scoreText);
scoreDd.appendChild(scoreInput);
TemO.appendChild(timeDd);
TemO.appendChild(scoreDd);
}
function addstudy(){
out_evaluatec++;
var skillLabel = document.createElement("label");
var skillText=document.createTextNode("skillname：");
var skillInput = document.createElement("input");
var skillDiv = document.createElement("div");
var evaluateText=document.createTextNode("evaluate：");
var evaluateP=document.createElement("p");
var evaluateDt=document.createElement("dt");
var timeText=document.createTextNode("time： ");
var timeInput = document.createElement("input");
var timeDiv = document.createElement("div");
var timeDd = document.createElement("dd");
var scoreText=document.createTextNode("score：");
var scoreInput = document.createElement("input");
var scoreDd = document.createElement("dd");
var evaluateDl = document.createElement("dl");
var addText=document.createTextNode("add");
var addButton = document.createElement("button");
var addCenter = document.createElement("center");
var studyFieldset = document.createElement("fieldset");
var TemO=document.getElementById("study");
skillInput.type="text";
skillInput.id="skillname"+out_evaluatec;
skillInput.style.width="140px";
evaluateP.style.margin="30px";
timeInput.type="text";
timeInput.id="time"+out_evaluatec+0;
scoreInput.type="text";
scoreInput.id="studyscore"+out_evaluatec+0;
evaluateDl.id=out_evaluatec+"evaluate";
addButton.setAttribute('type', 'button');
addButton.onclick=function addevaluate_addButton(){return addevaluate(this);};
//addButton.setAttribute('onclick', 'addevaluate(this)');

skillLabel.appendChild(skillText); 
skillDiv.appendChild(skillLabel); 
skillDiv.appendChild(skillInput);
evaluateP.appendChild(evaluateText);
evaluateDt.appendChild(evaluateP);
timeDiv.appendChild(timeText);
timeDiv.appendChild(timeInput);
timeDd.appendChild(timeDiv);
scoreDd.appendChild(scoreText);
scoreDd.appendChild(scoreInput);
evaluateDl.appendChild(evaluateDt);
evaluateDl.appendChild(timeDd);
evaluateDl.appendChild(scoreDd);
addButton.appendChild(addText);
addCenter.appendChild(addButton);
studyFieldset.appendChild(skillDiv);
studyFieldset.appendChild(evaluateDl);
studyFieldset.appendChild(addCenter);
TemO.appendChild(studyFieldset);
}
function test(){
	alert("test")
}
		
/*
var workc=0;
var out_evaluatec=0;
var in_evaluatec=new Array(20);
for(var i=0;i<20;i++){in_evaluatec[i]=0;}
function out(){

var information;
var workarray=new Array();
var evaluatearray=new Array();
var fundamental='"fundamental":{"people":"'+document.getElementById("people").value+'",\
"age":"'+document.getElementById("age").value+'",\
"address":"'+document.getElementById("address").value+'",\
"phone":"'+document.getElementById("phone").value+'",\
"starttime":'+document.getElementById("starttime").value+',\
"endtime":'+document.getElementById("endtime").value+'}';

var work='"works":[';
for(var i=0;i<=workc;i++){
var companytemp="company"+i;
var positiontemp="position"+i;
var begintimetemp="begintime"+i;
var endtimetemp="workendtime"+i;
var scoretemp=i+"score";
workarray[i]='{"company":"'+document.getElementById(companytemp).value+'",\
"position":"'+document.getElementById(positiontemp).value+'",\
"begintime":'+document.getElementById(begintimetemp).value+',\
"endtime":'+document.getElementById(endtimetemp).value+',\
"score":'+document.getElementById(scoretemp).value+'}';
if(i!=workc){work+=workarray[i]+',';}
else{work+=workarray[i]+']';}
}

var wanted='"wanted":{"job":"'+document.getElementById("job").value+'",\
"salary":"'+document.getElementById("salary").value+'",\
"holiday":"'+document.getElementById("holiday").value+'"}';

var study='"studys":[';
for(var i=0;i<=out_evaluatec;i++){
evaluatearray[i]='['
for(var j=0;j<=in_evaluatec[i];j++){
var timetemp="time"+i+j;
var scoretemp="studyscore"+i+j;
if(j!=in_evaluatec[i]){evaluatearray[i]+='{"time":'+document.getElementById(timetemp).value+',\
"score":'+document.getElementById(scoretemp).value+'},';}
else{evaluatearray[i]+='{"time":'+document.getElementById(timetemp).value+',\
"score":'+document.getElementById(scoretemp).value+'}]';}
}
}
for(var i=0;i<=out_evaluatec;i++){
var skilltemp="skillname"+i;
if(i!=out_evaluatec){study+='{"skillname":"'+document.getElementById(skilltemp).value+'","evaluates":'+evaluatearray[i]+'},';}
else{study+='{"skillname":"'+document.getElementById(skilltemp).value+'","evaluates":'+evaluatearray[i]+'}]';}
}

information='{'+fundamental+','+study+','+work+','+wanted+'}';
return information;
}
function addwork(){
workc++;
if(workc==1){
var firstText=document.createTextNode("1");
var firstB = document.createElement("b");
var firstLegend = document.createElement("legend");
var undoButton=document.getElementById("uworkbutton"); 
var firstfieldset=document.getElementById("workfieldset");
var firstdiv=document.getElementById("companydiv");
undoButton.style.visibility="visible";
firstLegend.id="firstworklegend";
firstB.appendChild(firstText);
firstLegend.appendChild(firstB);
firstfieldset.insertBefore(firstLegend,firstdiv);
}
var newText=document.createTextNode(workc+1);
var newB = document.createElement("b");
var newLegend = document.createElement("legend");
var newFieldset = document.createElement("fieldset"); 
var companyInput = document.createElement("input");
var companyLabel = document.createElement("label");
var companyText=document.createTextNode("company：");
var companyDiv = document.createElement("div");
 
var positionInput = document.createElement("input");
var positionLabel = document.createElement("label");
var positionText=document.createTextNode("position：");
var positionDiv = document.createElement("div");

var begintimeInput = document.createElement("input");
var begintimeLabel = document.createElement("label");
var begintimeText=document.createTextNode("begintime：");
var begintimeDiv = document.createElement("div");

var endtimeInput = document.createElement("input");
var endtimeLabel = document.createElement("label");
var endtimeText=document.createTextNode("endtime：");
var endtimeDiv = document.createElement("div");

var scoreInput = document.createElement("input");
var scoreLabel = document.createElement("label");
var scoreText=document.createTextNode("score：");
var scoreDiv = document.createElement("div");

var TemO=document.getElementById("work"); 

companyInput.type="text";
companyInput.id="company"+workc;

positionInput.type="text";
positionInput.id="position"+workc;

begintimeInput.type="text";
begintimeInput.id="begintime"+workc;
begintimeInput.onchange=function checktime_begintimeInput(){return checktime(this);};

endtimeInput.type="text";
endtimeInput.id="workendtime"+workc;
endtimeInput.onchange=function checktime_endtimeInput(){return checktime(this);};

scoreInput.type="text";
scoreInput.id=workc+"score";
scoreInput.onchange=function checkscore_scoreInput(){return checkscore(this);};
newFieldset.id="workfieldset"+workc;

companyLabel.appendChild(companyText);
companyDiv.appendChild(companyLabel);
companyDiv.appendChild(companyInput);

positionLabel.appendChild(positionText);
positionDiv.appendChild(positionLabel);
positionDiv.appendChild(positionInput);

begintimeLabel.appendChild(begintimeText);
begintimeDiv.appendChild(begintimeLabel);
begintimeDiv.appendChild(begintimeInput);

endtimeLabel.appendChild(endtimeText);
endtimeDiv.appendChild(endtimeLabel);
endtimeDiv.appendChild(endtimeInput);

scoreLabel.appendChild(scoreText);
scoreDiv.appendChild(scoreLabel);
scoreDiv.appendChild(scoreInput);

newB.appendChild(newText);
newLegend.appendChild(newB);

newFieldset.appendChild(newLegend);
newFieldset.appendChild(companyDiv);
newFieldset.appendChild(positionDiv);
newFieldset.appendChild(begintimeDiv);
newFieldset.appendChild(endtimeDiv);
newFieldset.appendChild(scoreDiv);
TemO.appendChild(newFieldset); 
}
function addevaluate(This){
temp=parseInt(This.parentNode.parentNode.children[2].id);
if(isNaN(temp)){temp=0};
in_evaluatec[temp]++;
var undoid="uevaluatebutton"+temp;
if(in_evaluatec[temp]==1){var undoButton=document.getElementById(undoid); 
undoButton.style.visibility="visible";}
var timeText=document.createTextNode("time： ");
var timeInput = document.createElement("input");
var timeDiv = document.createElement("div");
var timeDd = document.createElement("dd");
var scoreText=document.createTextNode("score：");
var scoreInput = document.createElement("input");
var scoreDd = document.createElement("dd");
var TemO;
if(temp==0){
TemO=document.getElementById("0evaluate");
}
else {TemO=document.getElementById(This.parentNode.parentNode.children[2].id);}
timeInput.type="text";
timeInput.id="time"+temp+in_evaluatec[temp];
timeInput.onchange=function checktime_timeInput(){return checktime(this);};
scoreInput.type="text";
scoreInput.id="studyscore"+temp+in_evaluatec[temp];
scoreInput.onchange=function checkstudynewscore_scoreInput(){return checkscore(this);};
timeDd.id="timedd"+temp+in_evaluatec[temp];
scoreDd.id="scoredd"+temp+in_evaluatec[temp];
timeDiv.appendChild(timeText);
timeDiv.appendChild(timeInput);
timeDd.appendChild(timeDiv);
scoreDd.appendChild(scoreText);
scoreDd.appendChild(scoreInput);
TemO.appendChild(timeDd);
TemO.appendChild(scoreDd);
}
function addstudy(){
out_evaluatec++;
if(out_evaluatec==1){
var firstText=document.createTextNode("1");
var firstB = document.createElement("b");
var firstLegend = document.createElement("legend");
var undoButton=document.getElementById("ustudybutton");
var firstfieldset=document.getElementById("studyfieldset");
var firstdiv=document.getElementById("skillnamediv"); 
undoButton.style.visibility="visible";
firstLegend.id="firststudylegend";
firstB.appendChild(firstText);
firstLegend.appendChild(firstB);
firstfieldset.insertBefore(firstLegend,firstdiv);
}
var newText=document.createTextNode(out_evaluatec+1);
var newB = document.createElement("b");
var newLegend = document.createElement("legend");
var skillLabel = document.createElement("label");
var skillText=document.createTextNode("skillname：");
var skillInput = document.createElement("input");
var skillDiv = document.createElement("div");
var evaluateText=document.createTextNode("evaluate：");
var evaluateP=document.createElement("p");
var evaluateDt=document.createElement("dt");
var timeText=document.createTextNode("time： ");
var timeInput = document.createElement("input");
var timeDiv = document.createElement("div");
var timeDd = document.createElement("dd");
var scoreText=document.createTextNode("score：");
var scoreInput = document.createElement("input");
var scoreDd = document.createElement("dd");
var evaluateDl = document.createElement("dl");
var addText=document.createTextNode("add");
var undoText=document.createTextNode("undo");
var addButton = document.createElement("button");
var undoButton = document.createElement("button");
var addCenter = document.createElement("center");
var undoCenter = document.createElement("center");
var studyFieldset = document.createElement("fieldset");
var TemO=document.getElementById("study");
skillInput.type="text";
skillInput.id="skillname"+out_evaluatec;
skillInput.style.width="140px";
evaluateP.style.margin="30px";
timeInput.type="text";
timeInput.id="time"+out_evaluatec+0;
timeInput.onchange=function checktime_studytimeInput(){return checktime(this);};
scoreInput.type="text";
scoreInput.id="studyscore"+out_evaluatec+0;
scoreInput.onchange=function checkstudyscore_scoreInput(){return checkscore(this);};
evaluateDl.id=out_evaluatec+"evaluate";
addButton.setAttribute('type', 'button');
addButton.onclick=function addevaluate_addButton(){return addevaluate(this);};
//addButton.setAttribute('onclick', 'addevaluate(this)');
addButton.style.width="45px";
undoButton.setAttribute('type', 'button');
undoButton.id="uevaluatebutton"+out_evaluatec;
undoButton.style.visibility="hidden";
undoButton.onclick=function undoevaluate_undoButton(){return undoevaluate(this);};
studyFieldset.id="studyfieldset"+out_evaluatec;

skillLabel.appendChild(skillText); 
skillDiv.appendChild(skillLabel); 
skillDiv.appendChild(skillInput);
evaluateP.appendChild(evaluateText);
evaluateDt.appendChild(evaluateP);
timeDiv.appendChild(timeText);
timeDiv.appendChild(timeInput);
timeDd.appendChild(timeDiv);
scoreDd.appendChild(scoreText);
scoreDd.appendChild(scoreInput);
evaluateDl.appendChild(evaluateDt);
evaluateDl.appendChild(timeDd);
evaluateDl.appendChild(scoreDd);
addButton.appendChild(addText);
addCenter.appendChild(addButton);
undoButton.appendChild(undoText);
undoCenter.appendChild(undoButton);
newB.appendChild(newText);
newLegend.appendChild(newB);

studyFieldset.appendChild(newLegend);
studyFieldset.appendChild(skillDiv);
studyFieldset.appendChild(evaluateDl);
studyFieldset.appendChild(addCenter);
studyFieldset.appendChild(undoCenter);
TemO.appendChild(studyFieldset);
}
function checkscore(This){
var temp=This.value;
if(isNaN(temp)||temp>10||temp<0){
//alert("score为0到10的数字");
This.value="";
This.focus();
}
}
function checktime(This){
var tempint=This.value;
var tempstring=tempint.toString();
var length=tempstring.length;
if(isNaN(tempint)||length!=6){
//alert("time为6位整数");
This.value="";
This.focus();
return false;
}
if(tempstring.indexOf(".")!=-1){//alert("time为6位整数");
This.value="";This.focus();return false;}
}
function undowork(){
var tempid="workfieldset"+workc;
var div=document.getElementById("work");
var fieldset=document.getElementById(tempid);
workc--;
if(workc==0){
var firstfieldset=document.getElementById("workfieldset");
var undoButton=document.getElementById("uworkbutton");
var firstLegend=document.getElementById("firstworklegend");
undoButton.style.visibility="hidden";
firstfieldset.removeChild(firstLegend);
}
div.removeChild(fieldset);
}
function undoevaluate(This){
var temp=parseInt(This.parentNode.parentNode.children[2].id);
if(isNaN(temp))temp=0;
var temptimeid="timedd"+temp+in_evaluatec[temp];
var tempscoreid="scoredd"+temp+in_evaluatec[temp];
var dlid=temp+"evaluate";
var undoid="uevaluatebutton"+temp;
var dl=document.getElementById(dlid);
var time=document.getElementById(temptimeid);
var score=document.getElementById(tempscoreid);
in_evaluatec[temp]--;
if(in_evaluatec[temp]==0){var undoButton=document.getElementById(undoid); 
undoButton.style.visibility="hidden";}
dl.removeChild(time);
dl.removeChild(score);
}
function undostudy(){
var tempid="studyfieldset"+out_evaluatec;
var div=document.getElementById("study");
var fieldset=document.getElementById(tempid);
out_evaluatec--;
if(out_evaluatec==0){
var firstfieldset=document.getElementById("studyfieldset");
var firstLegend=document.getElementById("firststudylegend");
var undoButton=document.getElementById("ustudybutton"); 
undoButton.style.visibility="hidden";
firstfieldset.removeChild(firstLegend);
}
div.removeChild(fieldset);
}
*/



function drawResume(resume){
var json = eval("("+resume+")");

//{"describes": [{"y": 3, "x": 0.83, "text": "c"}, {"y": 4, "x": 2.0, "text": "java"}, {"y": -5, "x": 0.83, "text": "typewriter,Microsoft"}, {"y": -5, "x": 1.83, "text": "programer,Microsoft"}], "histograms": [{"x2":1 , "y": -2, "x1": 0.83, "color": [218, 126, 58]}, {"x2": 2.42, "y": -2, "x1": 1.83, "color": [202, 21, 230]}], "lines": [{"y": [3, 4], "x": [0.83, 1.0], "color": [246, 206, 200]}, {"y": [3, 4], "x": [1.83, 2.0], "color": [137, 156, 12]}], "axis": {"yp": 10, "xp": 6, "xn": 0, "starttime": 2010, "yn": 10}}


var canvas = document.getElementById("screen"); 
var ctx = canvas.getContext("2d"); 
var xn1=1100/json.axis.xp;
var yn1=400/(json.axis.yp+json.axis.yn);
ctx.beginPath(); 
ctx.lineWidth=5;
ctx.moveTo(50, 250); 
ctx.lineTo(1150,250); 
ctx.lineTo(1145,245);
ctx.moveTo(50, 450); 
ctx.lineTo(50,50);
ctx.lineTo(52,52);
ctx.stroke(); 
ctx.closePath();




for(var i=0;i<=json.axis.xp;i++){
ctx.fillText(i+1*json.axis.starttime, 40+i*xn1,248 )
}


for(var j=1;j<=json.axis.yp;j++){
ctx.fillText(j,38,250-yn1*j)
}

for(var j=1;j<=json.axis.yn;j++){
ctx.fillText(j,38,250+yn1*j)
}




 for(var i=0;i<json.lines.length;i++){
ctx.beginPath();
ctx.lineWidth=3;
ctx.moveTo(50+xn1*(json.lines[i].x[0]),250-yn1*json.lines[i].y[0]);
for(var j=1;j<json.lines[i].x.length;j++){
ctx.lineTo(50+xn1*(json.lines[i].x[j]),250-json.lines[i].y[j]*yn1);
var color=json.lines[i].color[0].toString(16)+json.lines[i].color[0].toString(16)+json.lines[i].color[0].toString(16);
ctx.strokeStyle = color;
ctx.stroke(); 
}ctx.closePath();

}

ctx.beginPath();
for(var i=0;i<json.histograms.length;i++)

{var color=json.histograms[i].color[0].toString(16)+json.histograms[i].color[0].toString(16)+json.histograms[i].color[0].toString(16); 
     ctx.fillStyle=color;

  ctx.fillRect(50+xn1*(json.histograms[i].x1),253,xn1*(json.histograms[i].x2-json.histograms[i].x1),-3-yn1*(json.histograms[i].y));

   }
 ctx.closePath();
 
for(var j=0;j<json.describes.length;j++){
ctx.fillStyle="000000";
ctx.fillText(json.describes[j].text,50+xn1*json.describes[j].x,250-yn1*json.describes[j].y);
;
}
 

}


