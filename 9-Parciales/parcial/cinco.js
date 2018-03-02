function Mostrar()
{
 var numeroUno;
 var numeroDos;
 var numeroTres;
 var numeroMayor;

numeroUno= prompt("Ingrese el primer numero");
numeroDos= prompt("Ingrese el segundo numero");
numeroTres= prompt("Ingrese el tercer numero");

numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);
numeroTres= parseInt(numeroTres);

if (numeroUno>numeroDos && numeroUno>numeroTres) 
    {
        numeroMayor=numeroUno+" Primer numero ingresado";
    }else if (numeroDos>numeroTres && numeroDos>numeroUno) 
        {
            numeroMayor=numeroDos+" Segundo numero ingresado";
        }else if (numeroTres>numeroUno && numeroTres>numeroDos) 
            {
                numeroMayor=numeroTres+" Tercer numero ingresado";
            }else {
                numeroMayor=numeroUno+" Los 3 numeros ingresados son iguales"
            }


    alert("El mayor numero ingresado es: "+numeroMayor);
}


//Ingresar 3 numeros
//mostrar cual es el mayor con UN SOLO mensaje