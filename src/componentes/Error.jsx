import React from 'react'

const Error = ({children}) => {
    /* Children es una palabra reservada en react y hace referencia a todo lo 
    que le pases a un componente */

    /* La prop children es una prop especial que se pasa a los componentes. 
    Es un objeto que contiene los elementos que envuelve un componente. eje. <p> hola</p> 
    la ventaja de children es que le puedes pasar mas contenido osea (multiples 
        lineas de codigo HTML) mas etiquetas de HTML
    */
  return (
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">{children}</strong>
  </div>
  )
}

/* Forma mas comun de pasar props
const Error = ({mensaje}) => {
  return (
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">{mensaje}</strong>
  </div>
  )
}

*/




export default Error