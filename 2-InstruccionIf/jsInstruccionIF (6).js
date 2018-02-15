function Mostrar()
{
//tomo la edad - ¿Hay otra forma de ejecutar multiples IF ademas de escribir muchas veces IF?
var edad;
edad = document.getElementById("edad").value;

if (edad>=18) {
    alert("Usted es mayor de edad");
}

if (edad>=13 && edad<=17) {
    alert("Usted es un adolescente");
}

if (edad<13) {
    alert("Usted es un niño");
}


}//FIN DE LA FUNCIÓN