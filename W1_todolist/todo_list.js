/*
JavaScript of todo list
*/
var myNodelist = document.getElementsByTagName("LI");
var i;
var taskNum = 2;
var remainTask = 2;
document.getElementById('remain').innerHTML = remainTask + " tasks left";

//add a 'x' and 'v' to all todo tasks	
for(i=0;i<myNodelist.length;i++){
	var span_close = document.createElement("SPAN");
	var txt_close = document.createTextNode("\u00D7");
	span_close.className = "close";
	span_close.appendChild(txt_close);
	myNodelist[i].appendChild(span_close);
	var span_check = document.createElement("SPAN");
	var txt_check = document.createTextNode("\u2714");
	span_check.className = "check";
	span_check.appendChild(txt_check);
	myNodelist[i].appendChild(span_check);
}
			
//if you press 'x' than the task will be delete on the list
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
		taskNum = taskNum-1;
		if(div.classList.toggle('checked')){
			console.log(div);
			remainTask = remainTask-1;
			document.getElementById('remain').innerHTML = remainTask + " tasks left";
		}
	}

}

//to check the list
var list = document.querySelector('ul');
list.addEventListener('click', check_task, false);
function check_task(ev){
	if(ev.target.tagName === 'LI'){
		if(ev.target.classList.toggle('checked')){
			remainTask = remainTask-1;
		}	//add the class
		else{
			remainTask = remainTask+1;
		}
		document.getElementById('remain').innerHTML = remainTask + " tasks left";
	}
}

var inputTask = document.getElementsByTagName("INPUT");
inputTask[0].addEventListener('keydown', newElement, false);
//Set the check all button
var checkAll = document.getElementById("checkAll");
checkAll.onclick = function(){
	if(remainTask===0){
		checkAll.classList.add('checked_all');
	}
	if(checkAll.classList.toggle('checked_all')){
		for(i=0;i<myNodelist.length;i++){
			myNodelist[i].classList.add('checked');
		}
		remainTask = 0;
		document.getElementById('remain').innerHTML = remainTask + " tasks left";
	}
	else{
		for(i=0;i<myNodelist.length;i++){
			myNodelist[i].classList.remove('checked');
		}
		remainTask = taskNum;
		document.getElementById('remain').innerHTML = remainTask + " tasks left";
	}
}


// Create a new list item when pressing "Enter"
function newElement(ev){
	if(ev.key === "Enter"){
		var li = document.createElement("li");
		var inputValue = document.getElementById("myInput").value;
		var t = document.createTextNode(inputValue);
		li.appendChild(t);
		if(inputValue === ''){
			alert("You must write something!");
		}
		else{
			taskNum = taskNum+1;
			remainTask = remainTask+1;
			document.getElementById("myUL").appendChild(li);
			document.getElementById('remain').innerHTML = remainTask + " tasks left";
		}
		document.getElementById("myInput").value = "";
		var span_close = document.createElement("SPAN");
		var txt_close = document.createTextNode("\u00D7");
		span_close.className = "close";
		span_close.appendChild(txt_close);
		li.appendChild(span_close);
		var span_check = document.createElement("SPAN");
		var txt_check = document.createTextNode("\u2714");
		span_check.className = "check";
		span_check.appendChild(txt_check);
		li.appendChild(span_check);
		for(i=0;i<close.length;i++){
			close[i].onclick = function(){
				var div = this.parentElement;
				div.style.display = "none";
				taskNum = taskNum-1;
				if(div.classList.toggle('checked')){
					remainTask = remainTask-1;
					document.getElementById('remain').innerHTML = remainTask + " tasks left";
				}
			}
		}
	}
}

