//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");
	var importe, max, min;
	dia = 1;
	var contador = 0;

	while (contador<7) 
	{
		importe=prompt("ingrese importe del dia "+dia +".");
		while (importe<0) 
			{
				prompt=("No es un importe valido, vuelva a ingresar.");
			}
		importe=parseInt(importe);

			if (contador==0)				//Inicio del algoritmo para sacar maximos y minimos
			{
				max=importe;
				min=importe;
			}else
			{
				if (importe>max) 
				{
					max=importe;
				}
				if (importe<min) 
				{
					min=importe;
				}

		}								//Fin del algoritmo para sacar maximos y minimos


		dia++;
		contador++;

	}

	alert("El mayor importe fue de: "+max);
	alert("El menor importe fue de: "+min);


}

