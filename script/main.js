//--- ANIMATION FRAME SETUP --//
//http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
(function () {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
})();


//--- VARIABLE SETUP --//
//Canvas setup
var canvas = document.getElementById("c"),
	ctx = canvas.getContext("2d"),
	width = 10,
	height = 9,
	scale = 64,
	deltaTime,
	now,
	lastUpdate,
	paused = false;

canvas.width = width * scale;
canvas.height = height * scale;
canvas.style.width = width* scale + "px";
canvas.style.height = height* scale + "px";

function init(){
	now = Date.now();
	
	rand = new Random(666);
	
	game = new Game();
	player = new Player(game, 17.7, 60.3);
	
	requestAnimationFrame(update);
}

function update(){
	requestAnimationFrame(update);
	
	if(paused){
		return; //dont run update if game is paused
	}
	
	
	lastUpdate = now;
	now = Date.now();
	deltaTime = (now - lastUpdate) / 1000;
	
	game.move();
	game.draw();
}

//Start the update function
window.addEventListener("load", function () {
	init();
});