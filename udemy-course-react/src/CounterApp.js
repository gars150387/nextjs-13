import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const CounterApp = ({value = 0}) =>{

    const [counter, setCounter] = useState( 0 )

    const handleApp = () =>{
        setCounter( counter + 1)
    }
    
    const substractApp = () =>{
        setCounter( counter - 1)
    }

    const resetApp = () =>{
        setCounter(value)
    }
    
    
    return(
        <>
        <h1>CounterApp</h1>
        <h2> { counter }</h2>
        {console.log(counter)}
        <button onClick={ handleApp } >+1</button>
        <button onClick={ resetApp }>RESET</button>
        {/* {console.log(resetApp)} */}
        <button onClick={ substractApp }>-1</button>
        </>
    )
}

CounterApp.propType= {
    value: PropTypes.number.isRequired
}

// CounterApp.defaultProps= {
//     value: 0
// }