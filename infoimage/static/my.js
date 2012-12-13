var workc=0;
var out_evaluatec=0;
var in_evaluatec=new Array(20);
for(var i=0;i<20;i++){in_evaluatec[i]=0;}
function out(){
  /*if(document.getElementById("people").value==""){alert("输入姓名");
    document.getElementById("people").focus()
    return false;
    }*/
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
  var companyText=document.createTextNode("company:");
  var companyDiv = document.createElement("div");

  var positionInput = document.createElement("input");
  var positionLabel = document.createElement("label");
  var positionText=document.createTextNode("position:");
  var positionDiv = document.createElement("div");

  var begintimeInput = document.createElement("input");
  var begintimeLabel = document.createElement("label");
  var begintimeText=document.createTextNode("begintime:");
  var begintimeDiv = document.createElement("div");

  var endtimeInput = document.createElement("input");
  var endtimeLabel = document.createElement("label");
  var endtimeText=document.createTextNode("endtime:");
  var endtimeDiv = document.createElement("div");

  var scoreInput = document.createElement("input");
  var scoreLabel = document.createElement("label");
  var scoreText=document.createTextNode("score:");
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
    var timeText=document.createTextNode("time:");
    var timeInput = document.createElement("input");
    var timeDiv = document.createElement("div");
    //var timeDd = document.createElement("dd");
    var scoreText=document.createTextNode("score:");
    var scoreInput = document.createElement("input");
    //var scoreDd = document.createElement("dd");
	var scoreDiv = document.createElement("div");
	var scoreLabel = document.createElement("label");
	var timeLabel = document.createElement("label");
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
    timeDiv.id="timedd"+temp+in_evaluatec[temp];
    scoreDiv.id="scoredd"+temp+in_evaluatec[temp];
	timeLabel.appendChild(timeText);
    timeDiv.appendChild(timeLabel);
    timeDiv.appendChild(timeInput);
    //timeDd.appendChild(timeDiv);
	scoreLabel.appendChild(scoreText);
    scoreDiv.appendChild(scoreLabel);
    scoreDiv.appendChild(scoreInput);
    TemO.appendChild(timeDiv);
    TemO.appendChild(scoreDiv);
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
  var skillText=document.createTextNode("skillname:");
  var skillInput = document.createElement("input");
  var skillDiv = document.createElement("div");
  var evaluateText=document.createTextNode("evaluate:");
  var evaluateP=document.createElement("p");
  var evaluateDt=document.createElement("dt");
  var timeText=document.createTextNode("time:");
  var timeInput = document.createElement("input");
  var timeDiv = document.createElement("div");
  var timeLabel = document.createElement("label");
  //var timeDd = document.createElement("dd");
  var scoreText=document.createTextNode("score:");
  var scoreInput = document.createElement("input");
  var scoreDiv = document.createElement("div");
  var scoreLabel = document.createElement("label");
  //var scoreDd = document.createElement("dd");
  var evaluateDl = document.createElement("dl");
  var addText=document.createTextNode("add");
  var undoText=document.createTextNode("undo");
  var addButton = document.createElement("button");
  var undoButton = document.createElement("button");
  var addUndo = document.createElement("div");
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
  $(addUndo).css("text-align","center");
  addButton.style.width="80px";
  addButton.setAttribute('class','btn btn-info');
  undoButton.setAttribute('type', 'button');
  undoButton.style.width="80px";
  undoButton.setAttribute('class','btn btn-danger');
  undoButton.id="uevaluatebutton"+out_evaluatec;
  undoButton.style.visibility="hidden";
  undoButton.onclick=function undoevaluate_undoButton(){return undoevaluate(this);};

  studyFieldset.id="studyfieldset"+out_evaluatec;

  skillLabel.appendChild(skillText); 
  skillDiv.appendChild(skillLabel); 
  skillDiv.appendChild(skillInput);
  evaluateP.appendChild(evaluateText);
  evaluateDt.appendChild(evaluateP);
  timeLabel.appendChild(timeText);
  timeDiv.appendChild(timeLabel);
  timeDiv.appendChild(timeInput);
  //timeDd.appendChild(timeDiv);
  scoreLabel.appendChild(scoreText);
  scoreDiv.appendChild(scoreLabel);
  scoreDiv.appendChild(scoreInput);
  evaluateDl.appendChild(evaluateDt);
  evaluateDl.appendChild(timeDiv);
  evaluateDl.appendChild(scoreDiv);
  addButton.appendChild(addText);
  addUndo.appendChild(addButton);
  undoButton.appendChild(undoText);
  addUndo.appendChild(undoButton);
  newB.appendChild(newText);
  newLegend.appendChild(newB);

  studyFieldset.appendChild(newLegend);
  studyFieldset.appendChild(skillDiv);
  studyFieldset.appendChild(evaluateDl);
  studyFieldset.appendChild(addUndo);
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
  in_evaluatec[out_evaluatec]=0;
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
