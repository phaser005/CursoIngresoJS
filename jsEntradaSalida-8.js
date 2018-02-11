/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var n1, n2;
    n1=document.getElementById("numeroDividendo").value;
    n2=document.getElementById("numeroDivisor").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    resultado= n1%n2; //con el % sacamos el resto de la operacion de division entre n1 y n2//
    alert("El resto es : "+resultado);
}
