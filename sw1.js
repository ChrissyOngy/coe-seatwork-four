function drawTriangle(x){
	var y = "#", z = "";
	for(var j = 1; j<=x; j++){
		for(var i = x; i<=x; i++ ){
			z += y;
		}
		console.log(z);
	}
}
