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
    var cantidad, marca, pDescuento, pBruto;
    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    pBruto = cantidad *35;
    

if (cantidad>=6) {
    pDescuento = pBruto*0.5
    if (pDescuento>120) {
        pDescuento = pDescuento*1.10;
        alert("IIBB Usted pago :" + pDescuento);
    }
}

if (cantidad==5) {
    switch (marca) {
        case "ArgentinaLuz":
            pDescuento = (35* cantidad)*0.60;

            break;
    
        default:
            pDescuento = pBruto*0.7;
            break;
    }
}

if (cantidad==4) {
    switch (marca) {
        case "ArgentinaLuz":
        case "FelipeLamparas":
            pDescuento = pBruto*0.75;
            break;
    
        default:
            pDescuento = pBruto*0.8;
            break;
    }
}

if (cantidad == 3) {
    switch (marca) {
        case "ArgentinaLuz":
            pDescuento = pBruto*0.75;
            break;
        
        case "FelipeLamparas":
            pDescuento = pBruto*0.9;
            break;
    
        default:
            pDescuento = pBruto*0.95;
            break;
    }
}

if (cantidad>0 && cantidad<3) {
    pDescuento = (35* cantidad)*1;
        
}
document.getElementById("precioDescuento").value = pDescuento;
}

//OTRA FORMA DE RESOLVER ESTE TP
//{
//var cant, marca, desc, importe, impFinal;
//    cant = parseInt(cant);
//    impote = cant*35;
//
//if (cant > 6) {
//        desc = importe *0.5;
///    
//} else if (cant == 5 && marca =="ArgentinaLuz") {
//        desc = impote *0.4;
//} else if (cant == 5) {
//        desc = importe *0.5;
//
//} else if (cant == 4) {
//        if (maca =="ArgentinaLuz" || marca == "FelipeLamparas") {
//                desc = importe *0.25;
//        } else {
//               desc = impote *0.2; 
//        }
// } else if (cant == 3) {
//         switch (marca) {
//             case "ArgentinaLuz":
//                 desc = importe *0.15;
//                 break;
//             case "FelipeLamparas":
//                 desc = importe *0.1;
//             default:
//                 desc = importe *0.05
//         }
// }{

// impFinal = importe - desc;
// if (impFinal > 120) {
//     impFinal = impFinal *1.1;
//         alert ("blabla");
// } else {
//     alert ("...");
// }
//
// }
//}