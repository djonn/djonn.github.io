Player = function(g,x,y){ //g = game
	this.x = x;
	this.y = y;
	this.size = 0.75;
	
	this.maxspeed = 3; // in units per second
	this.acceleration = 80;
	this.friction = 0.7;
	
	this.velx = 0;
	this.vely = 0;
	
	this.isWalking = false;
	this.walktime = 0;
	this.frame = 0;
	
	this.tilesheet = [];
	for(i = 0; i < 3; i++){
		this.tilesheet.push(new Image());
		this.tilesheet[i].src = "assets/player/" + i + ".png";
	}
	
	g.player = this;
}

Player.prototype.draw = function(){
	//ctx.fillStyle = '#333';
	//ctx.fillRect((width - this.size) / 2 * scale, (height - this.size) / 2 * scale, this.size * scale,  this.size * scale);
	if(this.velx == 0 && this.vely == 0){
		ctx.drawImage(this.tilesheet[0], (width - this.size) / 2 * scale, (((height - this.size) / 2) - (1 - this.size)) * scale, this.size * scale,  scale);
	} else {
		this.frame = Math.round(((Date.now() - this.walktime) / 400) % 2);
		ctx.drawImage(this.tilesheet[this.frame], (width - this.size) / 2 * scale, (((height - this.size) / 2) - (1 - this.size)) * scale, this.size * scale,  scale);
	}
	
}

//--- INPUT --//
Player.prototype.move = function(w){
	if(input[KeyCode.Left]){
		if(this.velx > -this.maxspeed){
			this.velx += -this.acceleration * deltaTime;
			if(!this.isWalking){
				this.walktime = Date.now();
				this.isWalking = true;
			}
		}
	}
	
	if(input[KeyCode.Right]){
		if(this.velx < this.maxspeed){
			this.velx += this.acceleration * deltaTime;
			if(!this.isWalking){
				this.walktime = Date.now();
				this.isWalking = true;
			}
		}
	}
	
	if(input[KeyCode.Up]){
		if(this.vely > -this.maxspeed){
			this.vely += -this.acceleration * deltaTime;
			if(!this.isWalking){
				this.walktime = Date.now();
				this.isWalking = true;
			}
		}
	}
	
	if(input[KeyCode.Down]){
		if(this.vely < this.maxspeed){
			this.vely += this.acceleration * deltaTime;
			if(!this.isWalking){
				this.walktime = Date.now();
				this.isWalking = true;
			}
		}
	}
	
	this.velx *= this.friction;
	this.vely *= this.friction;
	
	if((this.velx < 0.1 && this.velx > 0) || (this.velx > -0.1 && this.velx < 0)){
		this.velx = 0;
	}
	if((this.vely < 0.1 && this.vely > 0) || (this.vely > -0.1 && this.vely < 0)){
		this.vely = 0;
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
	
	if(this.velx == 0 && this.vely == 0){
		this.isWalking = false;
	}
	
}