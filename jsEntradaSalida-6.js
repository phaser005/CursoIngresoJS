/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var n1, n2;
 n1=document.getElementById("numeroUno").value;
 n2=document.getElementById("numeroDos").value;
 n1 = parseInt(n1); //antes de hacer la operacion transformamos los numeros a enteros//
 n2 = parseInt(n2);
 resultado= n1+n2;
 alert("El resultado es: "+resultado);
 
}

