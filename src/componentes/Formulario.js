
import React,{useState,Fragment} from 'react';
import {calcular}from '../helpers';

// es useState  te retorna dos valores la primera es una variable  y el segundo valor es una funcion 
//Segunda forma para hacer componentes
//En react los eventos empiezan con un on al inicio
const Formulario = (props) => {
   const {cantidad,guardarCantidad,plazo,guardarPlazo,totalPagar,totalPagarF} = props;
//se utilizo state para hacer el evento de onSubmit lo iniciamos en false 
const [error,guardarError]=useState(false);
//funcion para el evento de de onSubmit 
const leerFormulario=(e)=>{
    e.preventDefault();

    if(cantidad <= 0|| plazo === "")
    
    {
        console.log(e.target.value)
        guardarError(true);
        return;
    }

    guardarError(false);
    const total=calcular(cantidad,plazo);
    totalPagarF(total);

}
//Fragment es para poder encapsular el formulario y poder enviar solo un cosa ya en react solo se puede enviar un solo componente       
//se puede usar una funcion hacer la ejecucion de la funcion o directamente en el onchange  y guardarCantidad(parseInt(e.target.value))        
//Es una funcion en useState primero se indica la varible depues la funcion seria un callback 
// const leerCantidad= (e) => {
//los padres no pueden heredar de los hijos entonces normalemnte se pone en el padre para que todos los hijos lo pueden usar
// console.log(guardarCantidad(parseInt(e.target.value)));
// }
return (
        //Seria como las macro en python separamos codigo para utilizarlo individualmente o reutilizarlo
        //onChange es un evente en reacto se manejo en eventos
        //Esta escuchando lo que suceda en el input
         //onSubmit es un metodo de react de eventeos de agregamos una funcion para el evento de submit  
        <Fragment> 
           
        <form onSubmit={leerFormulario}>
        {cantidad}{plazo}
        

          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                
                      onChange={e=>{ guardarCantidad(parseInt(e.target.value))}}
                  />
                
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={e=>guardarPlazo(parseInt(e.target.value))}
                    
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
         </form>
        {(error) ?<p className="error">Error debe introducir todos los campos</p> : null} 
     
         </Fragment> 
         )
        }
 
export default Formulario;