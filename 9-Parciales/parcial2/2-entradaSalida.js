//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");
	var importe=prompt("Ingrese importe");
	var importeFinal = importe *1.21;
	document.getElementById("importe").value = importeFinal;
}

