function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	respuesta=prompt("Ingresar numero? si/no?");
	
	while (respuesta=="si") 
	{
		contador++;
		num=prompt("Ingrese numero");
		num=parseInt(num);
			while (isNaN(num)) 			//con esto nos aseguramos que no estamos ingresando un valo NaN
				{
					num=prompt("Ingrese numero");
					num=parseInt(num);
				}
		acumulador=acumulador + num;
		respuesta=prompt("Ingresar otro numero? si/no?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN