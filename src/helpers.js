export function calcular (cantidad,plazo){
//0 a 1000 = 25%
//1001 a 5000=20%
//5001 a 10000=15%
// 10001  adelante =10%
// 3 a 5
// 6 a 10 
//12 a 15
//24 a 2000
let resultado;
if(cantidad > 0 || cantidad ===1000){
    resultado = cantidad *.25;
 }
else if(cantidad > 1000 || cantidad <=5000 ){
        resultado = cantidad*.20;
      

    }
else if(cantidad > 5001 || cantidad <= 10000){
    resultado = cantidad*.15;
 
}
else if(cantidad > 10001){
    resultado = cantidad*.10;}
else{

    console.log("No existe ese resultado");

}
console.log(resultado);
let resultadoPlazo;

switch(plazo){

    case 3:
        resultadoPlazo =cantidad*.05;
        break;
    case 6:
        resultadoPlazo=cantidad*.10;
        break;
    case 12:
        resultadoPlazo =cantidad*.15;
        break;
    case 24:
        resultadoPlazo =cantidad*.20;
        break;
    default:
     console.error("Hubo un error");
     break;        

}
console.log(resultadoPlazo);
return resultado +resultadoPlazo+ cantidad;
}
