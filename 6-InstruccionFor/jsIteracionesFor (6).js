function Mostrar()
{
var numero=1
var numerosPares=0
var cantidadPares=0
var repeticiones=1
repeticiones=prompt("Ingrese el numero de repeticiones:");
numero=parseInt(numero);

for (repeticiones=repeticiones; repeticiones>0; repeticiones--)
    {   
            if (numero%2==0 && numero!=0) 
            {
                cantidadPares++
                alert(numero);
            }
        numero++
    }

alert("La cantidad de numeros pares contados es: " +cantidadPares);
}//FIN DE LA FUNCIÓN