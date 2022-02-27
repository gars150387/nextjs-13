import React from 'react';

export const PrimeraApp = (props) => {

    const saludos = "Hola Mundo"
    //si la queremos usar object
    // {
    //     nombre: 'Gustavo',
    //     edad: 34
    // }

    return (
        <>
        {/* Usar el JSON. stringify se puede usar para imprimir objetos
        el null es otra consideracion que tiene el stringify, 
        el 3 es el espacio que se determina, */}
            {/* <h1>{ JSON. stringify( saludos, null, 3)}</h1> */}
            <h1>{ saludos }</h1>
            <p>Mi primera clase</p>
        </>
    )
}