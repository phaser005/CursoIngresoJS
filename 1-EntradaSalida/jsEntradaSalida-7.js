/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var n1, n2;
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    resultado= n1+n2;
    alert("El resultado es: "+resultado);
}

function restar()
{
	n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    resultado= n1-n2;
    alert("El resultado es: "+resultado);
}

function multiplicar()
{ 
	n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    resultado= n1*n2;
    alert("El resultado es: "+resultado);
}

function dividir()
{
	n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    resultado= n1/n2;
    alert("El resultado es: "+resultado);
}

