function Mostrar()
{
var nombre;
var sexo;
var peso;
var temperaturaHabitat;
var contador=0;
var start="start";
var temperaturasPares=0;
var temperaturasImpares=0;
var temperaturasPositivas=0;
var temperaturasNegativas=0;

peso=parseInt(peso);


nombre=prompt("Ingrese el nombre del animal");
peso=prompt("Ingrese el peso del animal")
    while (peso<=0 || isNaN(peso)) 
        {
        peso=prompt("Error, ingrese nuevamente:");
        }

temperaturaHabitat=prompt("Ingrese la temperatura de su habitat");
temperaturaHabitat=parseInt(temperaturaHabitat);
    while (temperaturaHabitat<-40 || temperaturaHabitat>40 || isNaN(temperaturaHabitat))
        {
            temperaturaHabitat=prompt("Error, temperatura extrema, ingrese nuevamente");
            temperaturaHabitat=parseInt(temperaturaHabitat);
        }

sexo=prompt("Ingrese el sexo del animal (f) o (m)");
        while (sexo!="f" && sexo!="m") 
            {
                sexo=prompt("Error, no es un sexo valido. Ingrese nuevamente:");
            } //alert("Nice"); SIN ERRORES HASTA ACA


            
    if (temperaturaHabitat%2==0 && temperaturaHabitat!=0) 
        {
        temperaturasPares++;
        }else{
                temperaturasImpares++;
             }

    if (temperaturaHabitat>0) 
        {
            temperaturasPositivas++;
        }else if (temperaturaHabitat<0) 
            {
                temperaturasNegativas++;
            }
            

contador++;
alert("temperaturas pares" +temperaturasPares);
alert("temperaturas impares" +temperaturasImpares);
alert("cantidad de temperaturas positivas" +temperaturasPositivas);
alert("cantidad de temperaturas negativas" +temperaturasNegativas);
}

//Ingresar un NOMBRE (animal) e ingresar PESO del animal (mayor a cero y un numero)
//Ingresar la TEMPERATURA del habitat (Entre -40 y +40 grados)
//Ingresar el SEXO del animal (femenino o masculino)
//
//Informar el NOMBRE DEL ANIMAL MAS PESADO
//Informar el NOMBRE DEL ANIMAL CUYO HABITAT ES EL MAS FRIO
//Informar LA CANTIDAD DE TEMPERATURAS PARES E IMPARES
//informar LA CANTIDAD DE TEMPERATURAS POSITIVAS Y NEGATIVAS
//informar EL SEXO DEL ANIMAL CUYO HABITAT TIENE TEMPERATURA 0 (cero)




