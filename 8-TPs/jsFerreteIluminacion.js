/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  cantidad bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  cantidad bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  cantidad bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  cantidad bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad, marca, pDescuento;
    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
        pDescuento = parseInt(pDescuento);

if (cantidad>=6) {
    pDescuento = (35*cantidad)*0.5
    document.getElementById("precioDescuento").value = pDescuento;
    if (pDescuento>120) {
        pDescuento = pDescuento*1.10;
        alert("IIBB Usted pago :" + pDescuento);
    }
}

if (cantidad==5) {
    switch (marca) {
        case "ArgentinaLuz":
            pDescuento = (35* cantidad)*0.60;
            document.getElementById("precioDescuento").value = pDescuento;
            break;
    
        default:
            pDescuento = (35*cantidad)*0.7;
            document.getElementById("precioDescuento").value = pDescuento;  
            break;
    }
}

if (cantidad==4) {
    switch (marca) {
        case "ArgentinaLuz":
        case "FelipeLamparas":
            pDescuento = (35*cantidad)*0.75;
            document.getElementById("precioDescuento").value = pDescuento;    
            break;
    
        default:
            pDescuento = (35*cantidad)*0.8;
            document.getElementById("precioDescuento").value = pDescuento;
            break;
    }
}

if (cantidad == 3) {
    switch (marca) {
        case "ArgentinaLuz":
            pDescuento = (35*cantidad)*0.75;
            document.getElementById("precioDescuento").value = pDescuento; 
            break;
        
        case "FelipeLamparas":
            pDescuento = (35*cantidad)*0.9;
            document.getElementById("precioDescuento").value = pDescuento; 
            break;
    
        default:
            pDescuento = (35*cantidad)*0.95;
            document.getElementById("precioDescuento").value = pDescuento;
            break;
    }
}

}
