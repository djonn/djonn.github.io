//--- MOUSE --//
canvas.onmousedown = function(){
	//nothing here...
}

//--- KEYBOARD --//
//only one input at a time

var input = null;

var KeyCode = {
	Left : 65,
	Right : 68,
	Up : 87,
	Down : 83,
	Space : 32
};

document.body.addEventListener("keydown", function(e) {
	if(!input){
		input = e.keyCode;
	}
});
 
document.body.addEventListener("keyup", function(e) {
	input = null;
});