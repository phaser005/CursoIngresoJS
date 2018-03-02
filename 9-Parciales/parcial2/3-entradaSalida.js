//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");
	var largo = document.getElementById("largo").value;
	var ancho = document.getElementById("ancho").value;
	var metrosAlambre = (largo*ancho)*6;
	alert("Se necesitan "+ metrosAlambre +" metros de alambre");
}

