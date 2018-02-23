function Mostrar()
{

	var contador=0;
	var numero;
	var negativos=0;
	var positivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
	
		if (numero<0) 
		{
			negativos=negativos+numero;
			cantidadNegativos++;

		}else if(numero>0)
				{
				positivos=positivos+numero;
				cantidadPositivos++;



				}else if (numero==0) 
						{
							cantidadCeros++;
						}

		if (numero %2==0 && numero!=0) //cero no es par, hay que excluirlo
		{
			cantidadPares++;
		}




	diferencia=positivos+negativos;
	contador++;
	respuesta=prompt("Again? type: 'no' to exit.");

	}//while "no"

promedioNegativos=negativos/cantidadNegativos;
promedioPositivos=positivos/cantidadPositivos;	//escribir la funcion de promedio fuera del while nos ahora MEMORIA RAM

document.write("La suma de negativos es: " +negativos+"<br/>");
document.write("La suma de positivos es: " +positivos+"<br/>");
document.write("La cantidad de positivos es: " +cantidadPositivos+"<br/>");
document.write("La cantidad de negativos es: " +cantidadNegativos+"<br/>");
document.write("La cantidad de ceros es: " +cantidadCeros+"<br/>");
document.write("La cantidad de numeros pares es: " +cantidadPares+"<br/>");
document.write("El promedio de los positivos es: " +promedioPositivos+"<br/>");
document.write("El promedio de los negativos es: " +promedioNegativos+"<br/>");
document.write("La diferencia entre negativos y positivos es: " +diferencia+"<br/>");

}//FIN DE LA FUNCIÓN