function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randomNumber;
	randomNumber = (Math.random()* (11 - 1) +1);        //Math.random()  da un numero entre 0 y 1
	randomNumber = parseInt(randomNumber);	  //(Math.random()* (max - min)) +min 
	alert(randomNumber);						// (max - min) +min   hace que el numero este entre los numeros que le pedimos
}//FIN DE LA FUNCIÓN