function Mostrar()
{
  var input, importeFinal;

  input = prompt("Ingrese importe");
 // document.getElementById("importeFinal").value = input;  ESTA LINEA ESTA DE MAS - ANALIZAR DESPUES//
  importeFinal = input * 1.21;
  document.getElementById("importeFinal").value = importeFinal;

}
