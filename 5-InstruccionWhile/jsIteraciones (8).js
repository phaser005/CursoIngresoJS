function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;

	var respuesta='si';

	respuesta=prompt("Ingresar numero? si/no?");

	while (respuesta=="si") 
	{
		contador++;
		num=prompt("Ingrese numero");
		num=parseInt(num);
				while (isNaN(num)) 			//con esto nos aseguramos que no estamos ingresando un valo NaN
				{
					num=prompt("Ingrese numero 2");
					num=parseInt(num);
				}
		if (num>0) 
		{
			positivo = positivo +num;
		} else if (num!=0) 
				{
					negativo = negativo *num;		
				}
				
		
			respuesta=prompt("Ingresar otro numero? si/no?");	
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN