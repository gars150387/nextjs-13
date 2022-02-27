import React from 'react';
import ReactDOM from 'react-dom';

const saludos = 'Hola Mundo';
console.log(saludos);



const divRoot = document.querySelector('#root')
console.log(divRoot)


ReactDOM.render( saludos, divRoot)

