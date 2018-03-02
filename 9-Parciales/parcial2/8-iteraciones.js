//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 8-iteraciones");
	var numero; 
	var min, max;
	var start="start";
	var contador=0
	var suma=0;
	var promedio;
	var cantPares=0;
	

		while (start!="stop") 
		{
			numero=prompt("Ingrese un numero positivo");
			parseInt(numero);
			while (numero<=0) 
			{
				numero=prompt("Error - Ingrese un numero positivo");
			}
			
			
		
			if (contador==0) 
			{
				min=numero;
				max=numero;
			}else if (numero>max) 
				{
				max=numero;
				}
				if (numero<min) 
				{
				min=numero;
				}
	
			if (numero%2==0 && numero!=0) 
			{
				cantPares++;
			}
			
			numero=parseInt(numero);
			suma=suma+ numero;
			start = prompt("Again? Yes: Accept // No: type 'stop'");
			contador++;
		}

	
	promedio=suma/contador;

document.write("La cantidad de numeros pares es de: "+cantPares + "<br/>");
document.write("El promedio de los numeros ingresados es de: "+promedio + "<br/>");
document.write("La suma de todos los numeros es: "+suma + "<br/>");
document.write("El numero maximo es: "+max + "<br/>");
document.write("El numero minimo es: "+min + "<br/>");

}

