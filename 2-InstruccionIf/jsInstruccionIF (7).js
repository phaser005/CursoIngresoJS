function Mostrar()
{
//tomo la edad  
var edad, estado;
edad = document.getElementById("edad").value;
estado = document.getElementById("estadoCivil").value;

if (edad<18 && estado!="Soltero") {
    alert("Es muy pequeño para NO ser soltero.");
}



}//FIN DE LA FUNCIÓN