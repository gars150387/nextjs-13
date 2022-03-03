import React, { useState } from "react";

export const AddCategory = () =>{

    const [value, setValue] = useState('')

    return (
        <div>
            <h2>
                Add category
            </h2>
            <input value={ value } onChange={ (e) => {setValue(e.target.value)}} placeholder="Search" type={'text'} className="mb-4"></input>
        </div>
    )
}