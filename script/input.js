//--- MOUSE --//
canvas.onmousedown = function(){
	//nothing here...
}

//--- KEYBOARD --//
//only one input at a time

var input = [];

var KeyCode = {
	Left : 65,
	Right : 68,
	Up : 87,
	Down : 83,
	Space : 32
};

document.body.addEventListener("keydown", function(e) {
	input[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function(e) {
	input[e.keyCode] = false;
});