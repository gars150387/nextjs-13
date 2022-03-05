import React, { useState } from "react";
import { PropType} from 'prop-types'

export const AddCategory = ({ setCategories }) =>{

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( category => [...category, inputValue])
        }

        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>
                Add category
            </h2>
            <input onChange={ handleInputValue } type='text' className="mb-4"></input>
        </form>
    )
}

// AddCategory.propType={
//     setCategories: PropType.func.isRequired
// }