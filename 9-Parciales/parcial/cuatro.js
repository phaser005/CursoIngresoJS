function Mostrar()
{
var num1, num2, resultado;
num1 = prompt("Ingrese numero 1");
num2 = prompt("Ingrese numero 2");

    if (num1 == num2) {
        resultado = num1 + num2;
        //alert("Numeros 1 y 2 concatenados: "+resultado);
    } else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 > num2) {
            resultado= num1 * num2;
                if (resultado%2==0 && resultado!=0) 
                    {
                    alert("El resultado: " +resultado + " es par");
                    }else{
                      //  alert("Numeros 1 y 2 multiplicados: "+resultado);
                        }
        } else {
            resultado = num1 - num2;
           // alert("Numeros 1 y 2 restados: "+resultado);
        }
    }

 
}

//ingresar 2 num por prompt
//si son iguales se muestran contatenados
//si el primero es mayor que el segundo los multiplico
//si el primero es menor que el segundo los resto
//si en la multiplicacion da un numero par, mostramos si es PAR con ALERT o DOCUMENT.WRITE
//RESOLVER DE NUEVO USANDO SOLO UN ALERT!!
