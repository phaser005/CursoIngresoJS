//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 7-iteraciones");
	var nota=0;
	var sexo;
	var promedio;
	var min;
	var acumulador=0;
	var contador=1;
	var cantVaronesAprobados=0;

	while (contador<7) 
	{
		alert("Ingreso Nº "+contador);
		sexo=prompt("Ingrese sexo ('f' o 'm')");
			while (sexo!="f" && sexo!="m") 
			{
				sexo=prompt("error, ingrese 'f' o 'm' ");
			}

		nota=prompt("Ingrese la nota del 0 al 10");
		nota=parseInt(nota);
			while (isNaN(nota) ) 
			{
				nota=prompt("error, ingrese un numero valido");
			}
			while ((nota<0 || nota>10)) 
			{
				nota=prompt("error, ingrese una nota entre 0 y 10");
			}

		if (contador==1) 
		{
			min=nota;	
		}else if (nota<min) 
		{
			min=nota;	
		}

		if (sexo=="m" && nota>=6) 
		{
			cantVaronesAprobados++;
		}

		acumulador=acumulador+nota;
		contador++


	}

	promedio=acumulador/6;
	alert("El promedio es de: "+promedio);
	alert("La nota minima fue de: "+min);
	alert("La cantidad de varones aprobados es de: "+cantVaronesAprobados);

}

