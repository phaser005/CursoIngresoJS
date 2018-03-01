function Mostrar()
{

var numero = prompt("Introduzca un numero: ");
numero=parseInt(numero);

    if(numero==1)
        {
            alert("El numero ingresado no es primo.");
        }else if(numero==2)
        {
             alert("El numero ingresado es primo.");
        }

    for (i=2; i<numero; i++)
        {

            if (numero % i == 0) 
            {
                alert("El numero ingresado no es primo.");
                break;
            }else
            {
                 alert("El numero ingresado es primo.");
                break;
            }

        }



}//FIN DE LA FUNCIÓN