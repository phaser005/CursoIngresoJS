//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");
	var numero1=prompt("Ingrese numero 1");
	numero1=parseInt(numero1);
	var numero2=prompt("Ingrese numero 2");
	numero2=parseInt(numero2);
	var resultado;

	if (numero1==numero2) 
	{
		resultado=numero1*numero2;
		resultado=parseInt(resultado);
		document.write("Son iguales, su multiplicacion da: "+ resultado);
	}else if (numero1>numero2) 
		{
			resultado=numero1-numero2;
			document.write("El primero es mayor. Su resta da: "+ resultado);
		}else
		{
			resultado=numero1+numero2;
			document.write("El primero es menor. Su suma da: "+ resultado);
		}

}

