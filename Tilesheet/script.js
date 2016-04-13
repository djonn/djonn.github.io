var canvas = document.getElementById("c"),
	ctx = canvas.getContext("2d"),
	scale = 32,
	width = 20,
	height = 18;

canvas.width = width * scale;
canvas.height = height * scale;
canvas.style.width = width* scale + "px";
canvas.style.height = height* scale + "px";

var img = new Image();
img.src = "../assets/floortiles.png";

ctx.drawImage(img, scale, scale);