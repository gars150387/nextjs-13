import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';

//
const divRoot = document.getElementById('root')
// console.log(divRoot)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    divRoot
    )

