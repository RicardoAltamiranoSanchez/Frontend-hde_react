//importamos react y fragment que es para utilizar como un div para como un contenido 
//ya que solo podemos retonar un valor y no vario en el return de react
import React,{ Fragment } from 'react';
//Creamos una funcion
//para enviar datos en la funcion es con props y tambien podemos hacer destrution
// es con corchetes que podemos mostrar los valores como {nombre}
//este de la primera forma de crear un componente de
function Headers({nombre,prueba}) {
    console.log(nombre);
    


 //este tipo de retorno es exclusivo de react
    return(
        <Fragment>  
         <h1>Prueba</h1>
          <h1>{nombre}</h1>
          <h1>{prueba}</h1>

          
         </Fragment>
    )

}
// //segunda forma de crear un componente seria de la misma forma pero con funcion de fecha 
// const Headers = ({nombre}) => {
//     return (<Fragment>

//        <h1>Prueba</h1>
//        <p>{nombre}</p>       
//     </Fragment>
//       );
// }
// export default Headers;
//exportamos nuestra funcion para poderla usar despues 
export default Headers;