window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
var TIMER_TICK = 1000;
var timer = null;
var min = 0.5; // 0.5 minute
var second = min*10; 
var x = document.getElementById('clock');
timer = setInterval(timeCount,1000);
	
function timeCount(){
var allbox = document.querySelectorAll("#squares-layer div");
		if (allbox.length == 0 && second >= 0){
			alert("YOU WIN");
			clearInterval(timer);
			clearScreen();
		}else if(allbox.length > 0 && second == 0){
			alert("YOU LOSE");
			clearInterval(timer);
			clearScreen();
		}else(second -= 1)
		x.innerText = second;
 	}
}

function addBox(){

	var numbox = document.getElementById("numbox").value;
	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square "+ colorDrop;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer div");
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}




