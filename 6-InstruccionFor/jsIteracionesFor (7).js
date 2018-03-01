function Mostrar()
{

var numero=prompt("Ingrese un numero:");
var contador=numero;
contador=parseInt(contador);
var divisor=numero;
divisor=parseInt(divisor);
var division=0;
division=parseInt(division);
var cantidadDivisores=0;

for(contador=contador; contador>0; contador--)
    {
        division=numero/divisor;
        if (division%1==0) 
        {
            alert(division);
            cantidadDivisores++
        }
    divisor--
    }
alert(cantidadDivisores);

}//FIN DE LA FUNCIÓN