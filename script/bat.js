Bat = function(g,x,y){ //g = game
	this.x = x;
	this.y = y;
	this.size = 0.75;
	this.type = "bat";
	
	this.maxspeed = 2; // in units per second
	
	this.velx = 0;
	this.vely = 0;
	
	this.walktime = Date.now();
	this.frame = 0;
	this.time = 0;
	
	this.tilesheet = [];
	for(i = 0; i < 2; i++){
		this.tilesheet.push(new Image());
		this.tilesheet[i].src = "assets/bat/" + i + ".png";
	}
	
	g.entities.push(this);
}

Bat.prototype.draw = function(p){
	this.frame = Math.floor(((Date.now() - this.walktime) / 300) % 2);
	ctx.drawImage(this.tilesheet[this.frame], (this.x - p.x + (width / 2) - (p.size / 2)) * scale, (this.y - p.y + (height / 2) - (p.size / 2)) * scale, this.size * scale,  scale);
}

Bat.prototype.move = function(w){
	if((Date.now() - this.time) / 1000 >= (Math.random() * 0.5) + 1){
		this.time = Date.now();
		
		var angle = (Math.random() * 2 * Math.PI) - Math.PI;
		
		this.velx = Math.cos(angle) * this.maxspeed;
		this.vely = Math.sin(angle) * this.maxspeed;
	}
	
	this.x += this.velx * deltaTime;
	this.y += this.vely * deltaTime;
	
	for(id in w.collision){
		if(checkCollision(this, w.collision[id])){
			if(this.velx != 0){ //collide left or right
				this.x -= this.velx * deltaTime;
				this.velx = 0;
			}
			if(this.vely != 0){ //collide up or down
				this.y -= this.vely * deltaTime;
				this.vely = 0;
			}
		}
	}
}


function spawnBats(g){
	
	var bats = [
		[21.08,45.59],
		[17.85,56.77],
		[20.89,57.90],
		[28.75,52.75],
		[16.00,35.89],
		[20.36,37.55],
		[24.34,32.53],
		[33.86,26.38],
		[35.89,31.63],
		[42.95,32.19],
		[40.25,25.94],
		[35.09,26.13],
		[15.81,10.60],
		[18.42,17.61],
		[21.97,16.09],
		[23.06,11.31],
		[ 6.83,18.98],
		[ 6.10,25.98],
		[ 9.33,31.02],
		[ 5.59,30.63],
		[22.78,20.27],
		[36.42,25.84],
		[24.91,48.44]
	];
	
	for(id in bats){
		new Bat(g, bats[id][0], bats[id][1]);
	}
}