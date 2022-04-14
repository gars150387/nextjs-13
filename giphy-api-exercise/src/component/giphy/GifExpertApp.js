import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrip';

export const GifExportApp = () => {

    // export const categories

    const [categories, setCategories] = useState([])

    // const handleApp = () => {
    //     setCategories([...categories, ((categories.length) + 1)])
    // }

    return (
        <>
            <h2>GifExportApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <h2>
                { categories }
            </h2>

            {/* <button onClick={handleApp} >Agregar</button> */}
            {categories.map(category =>
                <GifGrid key={ category } category={category} />
            )}
        </>
    )

}