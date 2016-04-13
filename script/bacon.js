Bacon = function(g,x,y){ //g = game
	this.x = x;
	this.y = y;
	this.size = 0.75;
	this.type = "bacon";
	
	this.tilesheet = new Image();
	this.tilesheet.src = "assets/bacon.png";
	
	g.entities.push(this);
}

Bacon.prototype.draw = function(p){
		ctx.drawImage(this.tilesheet, (this.x - p.x + (width / 2) - (p.size / 2)) * scale, (this.y - p.y + (height / 2) - (p.size / 2)) * scale, this.size * scale,  scale);
}

function spawnBacon(g){
	
	var bacon = [
		[26.52,50.61],
		[17.81,54.64],
		[22.06,39.91],
		[11.38,33.92],
		[32.53,30.30],
		[ 6.06,28.64],
		[ 7.48,23.00],
		[15.95,12.64],
		[25.05,11.31],
		[31.58,18.27],
		[42.81,33.47]
	];
	
	for(id in bacon){
		new Bacon(g, bacon[id][0], bacon[id][1]);
	}
}