//Asi importamos desde react con import y un string 
import Headers from './componentes/Headers';
import Formulario from './componentes/Formulario';

//importamos react y fragment que es para utilizar como un div para como un contenido 
//ya que solo podemos retonar un valor y no vario en el return de react
import React,{ Fragment ,useState} from 'react';
function App() {
  
  const [cantidad,guardarCantidad]=useState(0);  
  const [plazo,guardarPlazo]=useState(0);
  return (
    //para utiliza el componente es con esa sintaxis < Headers/> como si fuera un xml se puede reutilizar el codigo
    <Fragment>
       <Headers
       //podemos iniciar variables dentro de la funcion pero se van en enviar como props en la funcion principal  de
       //para mostrar el valor de la variable solo es con corchetes y su valor depediendo si y usas destroction
       nombre='HDE'
       prueba={cantidad}
       />
       
       <div className="contendio">

                <Formulario
                  cantidad={cantidad}
                  guardarCantidad={guardarCantidad}
                  plazo={plazo}
                  guardarPlazo={guardarPlazo}
                />         

       </div>
       </Fragment>

  );
}
//para poner las clases en una etiqueta de html en react se pone className 
export default App;
//Creamos una app react cvon este comando npx create-react-app hde
//debemos tener node
//en el index importamos esqueletor y normalize para el diseño de la pagina
//https://cdnjs.com/libraries/normalize
//para iniciar proyecto ponemos npm start donde esta la carpeta en el cmde 