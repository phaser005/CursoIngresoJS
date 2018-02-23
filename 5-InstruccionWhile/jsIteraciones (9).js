function Mostrar()
{

	var contador=0;
	var num;
	var min;
	var max;
	// declarar variables
	
	var respuesta='si';

respuesta=prompt("Ingresar numero? aceptar / type:'no'");

	while(respuesta!='no')
	{
		
		num=prompt("Ingrese numero");
		num=parseInt(num);
			
		if (contador==0)				//Inicio del algoritmo para sacar maximos y minimos
		{
			max=num;
			min=num;
		}else
		{
			if (num>max) 
			{
				max=num;
			}
			if (num<min) 
			{
				min=num;
			}

		}								//Fin del algoritmo para sacar maximos y minimos

		contador++;
		respuesta=prompt("Again? Exit - type: 'no'.");
		
	}

document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN