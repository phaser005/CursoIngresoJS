function Mostrar()
{
var largo, ancho, metrosAlambre;
largo = document.getElementById("alrgo").value;
ancho = document.getElementById("ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
metrosAlambre = ((largo+ancho)*2)*3; //[(lado + lado)*2] *3//
alert("Se necesitan " +metrosAlambre +" metros para cubrir el perimetro con alambre.");
}
