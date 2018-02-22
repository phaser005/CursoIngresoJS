function Mostrar()
{

var clave;
clave = prompt("ingrese el número clave.");

while (clave != "utn750" && clave!=null) //se repetira a menos que la clave sea "utn750" o distinto a null (boton aceptar)
    {
    if (clave == null)  //con este if agrego otra condicion. Si es null (aprieto cancela en el prompt) tambien finaliza el while
        {              
        break;  // este break finaliza la ejecucion del "while" si la variable es null (aprieto cancelar en el prompt)
        }
    clave = prompt("Error"); // en caso de no cumplirse la condicion el loop muestra prompt de error
    }

}//FIN DE LA FUNCIÓN
