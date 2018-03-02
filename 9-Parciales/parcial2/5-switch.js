//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");
	var mes = prompt("Ingrese mes del año en minusculas");
	
	switch (mes) {
		case "enero":
		case "febrero":

			alert("VERANITO!!");	
			break;
	
		default:
			alert("Extraño Enero y Febrero!!");
			break;
	}

}

