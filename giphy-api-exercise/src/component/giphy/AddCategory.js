import React, { useState } from "react";
import { Button } from 'react-bootstrap'
// import { PropType} from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(category => [inputValue])
        }


    }

    return (
        <div className="Add">
            
            <input onChange={ handleInputValue } type='text'></input>
            <Button onClick={ handleSubmit } variant="Success" size="lg" active>
                Search
            </Button>{' '}
        </div>
    )
}

// AddCategory.propType={
//     setCategories: PropType.func.isRequired
// }