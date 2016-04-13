Game = function(){
	this.entities = [];
	this.world = new World();
	
	this.gui = {};
	this.gui.timer = Date.now();
	this.gui.points = 0;
	
	
}

Game.prototype.draw = function(){
	//clear screen
	ctx.clearRect(0, 0, width * scale,height * scale);
	
	//first draw tiles
	this.world.draw(this.player);
	
	//then draw entities
	for(id in this.entities){
		
		this.entities[id].draw(this.player);
	}
	
	//last draw player
	this.player.draw();
	
	//draw gui
	ctx.fillStyle = "white";
	ctx.font = '24px Calibri';
	ctx.textBaseline = 'top';
	ctx.textAlign = 'left';
	ctx.fillText('Time: ' + Math.floor((Date.now() - this.gui.timer) / 1000), 10, 10);
	
	ctx.textAlign = 'right';
	ctx.fillText('Point: ' + this.gui.points, width * scale - 10, 10);
	
	
}

Game.prototype.move = function(){
	player.move(this.world);
	
	for(i in this.entities){
		if(this.entities[i].type == "bat"){
			this.entities[i].move(this.world);
		}
		
		//player be dead?s
		if(checkCollision(this.player, this.entities[i])){
			if(this.entities[i].type == "bat"){
				paused = true;
				//alert('You died!');
				location.reload();
			} else {
				this.gui.points += 10;
				this.entities.splice(i, 1);
				if(this.gui.points >= 100){
					paused = true;
					alert('You won!');
				}
			}
			
		}
		
	}
}