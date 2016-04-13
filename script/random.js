Random = function(seed){
	if(seed){
		this.seed = seed;
	} else {
		this.seed = new Date().getTime(); //there is no seed so use current timestamp
	}
	
	this.current = this.seed;
}

Random.prototype.number = function(min, max){
	max = max || 1;
	min = min || 0;
	
	this.current = (this.current * 9301 + 49297) % 233280;
	var rnd = this.current / 233280;
	
	
	return Math.round(min + rnd * (max - min));
}