function Mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");

while (sexo!="f" && sexo!="m") //otra forma seria while ((sexo!="f" && sexo!="m") && sexo!=null)
    {
        if (sexo==null) 
        {
            break;
        }

    alert("Ingrese nuevamente");
    sexo = prompt("ingrese f ó m .");
    }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN