function Mostrar()
{
	var num;
	var contador=0;
	var acumulador=0;

while (contador<5) 
	{
	contador++;						//hace que el proceso se repita 5 veces ya que el contador funciona como limite
	num=prompt("Ingrese numero");
	num=parseInt(num);
		while (isNaN(num)) 			//con esto nos aseguramos que no estamos ingresando un valo NaN
		{
			num=prompt("Ingrese numero");
			num=parseInt(num);
		}
	acumulador=acumulador + num;	//esta variable acumula los numeros que ingresamos dentro de la varia acumulador
									//tambien se puede usar acumulador+=num;


	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN