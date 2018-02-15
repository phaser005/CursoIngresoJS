function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randomNumber;
	randomNumber = (Math.random()*10);
	randomNumber = parseInt(randomNumber);
	
	if (randomNumber==9 || randomNumber==10) {
		alert("Excelente! Tiene usted un: " +randomNumber);
	} else 
		if (randomNumber>4) {
			alert("Aprobo con: " +randomNumber);
		} else {
			alert(randomNumber +" Vamos, la proxima se puede");
		
	}
	


}//FIN DE LA FUNCIÓN