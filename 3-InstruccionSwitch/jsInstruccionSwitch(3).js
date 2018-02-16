function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
//Introducir "default" antes de "case" o despues de este no interfiere con la ejecucion del codigo
//El default funciona como un "else" en el IF
switch (mesDelAño) {
    case "Febrero":
        alert("Este mes no tiene más de 29 días.");
        break;

    default:
        alert("Este mes tiene 30 o más días");
        break;
}
	


}//FIN DE LA FUNCIÓN