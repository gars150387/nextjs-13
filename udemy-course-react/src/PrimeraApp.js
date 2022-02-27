import React from 'react';
import PropType from 'prop-types'

export const PrimeraApp = ( {saludos, subtitulo} ) => {

    saludos ="Hola Mundo";
    // subtitulo = 'soy un subtitulo'

    //another way to define a value by default is declaring in the props like this:
    //

    return (
        <>
        <h1>{ saludos }</h1>
        <p>{subtitulo}</p>
    </>
    )
}

PrimeraApp.protoType= {
    saludos: PropType.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}




//this is the way to declare a value of a props by default
// PrimeraApp.defaultProps = {
//     subtitulo: 'soy un subtitulo'
// }


// export const PrimeraApp = ( {saludos} ) => {

//     saludos="Hola Mundo"

//     return (
//         <>
//         <h1>{ saludos }</h1>
//         <p>Mi primera clase</p>
//     </>
//     )
// }

//de esta forma definimos el prototipo que el component requiere, haciendo saber a otros programadores que este componente requiere de un string para poder ser util
// PrimeraApp.prototype= {
//     saludos: PropType.string.isRequired
// }

    //Se puede agregar el valor a la variable directamente desde el props desestructurado como se muestra
    // export const PrimeraApp = ( {saludos = 'Soy Gus'} ) =>

    // console.log(props)


        //si la queremos usar object
    // const saludos{
    //     nombre: 'Gustavo',
    //     edad: 34
    // 
        /* Usar el JSON. stringify se puede usar para imprimir objetos
        el null es otra consideracion que tiene el stringify, 
        el 3 es el espacio que se determina, */
            /* <h1>{ JSON. stringify( saludos, null, 3)}</h1> */
