/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato;
	dato = prompt("ingrese nombre");
	document.getElementById("elNombre").value = dato; //el valor de "dato" reemplaza al valor del ID//
}

