function Mostrar()
{

var numero=prompt("Ingrese un numero:");
var contador=numero;

var divisor=numero;

var division=0;

var cantidadDivisores=0;

for(contador=contador; contador>0; contador--)
    {
        division=numero/divisor;
        if (division%1==0) 
        {
            alert("Numeros divisores del numero ingresado: "+division);
            cantidadDivisores++
        }
    divisor--
    }
alert("La cantidad de divisores encontrados es: "+cantidadDivisores);

}//FIN DE LA FUNCIÓN