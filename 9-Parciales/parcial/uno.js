
function Mostrar()
{
var base;
var altura;
var perimetro;
var area;

base = document.getElementById("laBase").value;
altura = prompt("Ingrese altura");
altura = parseInt(altura);
area = (base * altura)/2;
perimetro = base *3;

prompt("El area es de: "+ area +" metros");
prompt("El perimetro es de: "+ perimetro +" metros");

}