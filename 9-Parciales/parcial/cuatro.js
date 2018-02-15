function Mostrar()
{
var num1, num2, resultado;
num1 = prompt("Ingrese numero 1");
num2 = prompt("Ingrese numero 2");

    num1=parseInt(num1);
    num2=parseInt(num2);

    if (num1 == num2) {
        resultado = num1 * num2;
        document.write(resultado);
    } else {
        if (num1 > num2) {
            resultado= num1 - num2;
            document.write(resultado);
        } else {
            resultado= num1 + num2;
            document.write(resultado);
        }
    }


//    if (num1 == num2) {                       Otra forma de escribir el codigo if-else-if-else+
//        resultado = num1 * num2;
//        document.write(resultado);
//    } else if (num1 > num2) {
//            resultado= num1 - num2;
//            document.write(resultado);
//        } else {
//            resultado= num1 + num2;
//            document.write(resultado);
//        }
    
}
