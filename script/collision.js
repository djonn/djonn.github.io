function checkCollision(a, b){
	if( a.x < (b.x + b.size)  && (a.x + a.size)  > b.x && a.y < (b.y + b.size) && (a.y + a.size) > b.y) {
		return true; //collision
	}
	return false;
}