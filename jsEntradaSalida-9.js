/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo, resultado;
    sueldo = document.getElementById("sueldo").value; //tomamos valor por ID//
    sueldo = parseInt(sueldo); //transformamos el valor del ID a entero//
    resultado = sueldo*1.1; //Buscamos su aumento del 10%//
    document.getElementById("resultado").value= resultado;
}
