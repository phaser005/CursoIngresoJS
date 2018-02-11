function Mostrar()
{
  var input, final;
  input = prompt("Ingrese un valor:"); //tomamos el valor desde un prompt//
  input = parseInt(input);
  final = input * 1.21;
  document.getElementById("importeFinal").value = final; //sobreescribimos el valor del ID por el valor introducido anteriormente//

}
