import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

export const GifExportApp = () =>{

    // export const categories

    const [ categories, setCategories] = useState([1,2,3,4,5,6])

    const handleApp =()=>{
        setCategories([...categories, ((categories.length)+1)])
    }

    return (
        <>
        <h2>GifExportApp</h2>
        <hr />

        <button onClick={ handleApp } >Agregar</button>
        {categories.map(category =>{
            return (
                <>
                <ul>
                    <li key={category}>
                        {category}
                    </li>
                </ul>
                </>
            )
        })}
        </>
    )
    
}