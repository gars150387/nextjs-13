import React from "react";
import { GifGripItem } from "./GifGripItem";
import { useFecthGifs } from "../hooks/useFetchGifs";


//la funcion GifGrip necesitar pasar category como argumento
export const GifGrid = ({ category }) => {


    //necesitas pasar el argumento dentro de useFetchGifs
    const { data, loading } = useFecthGifs( category );

    //todo este codigo fue trasladado a un nuevo componente de un custome hook
    // useEffect(() => {
        //ya que fetch function fue movida a una carpeta, el useEffect sigue manteniendo la function de getGif, 
        //sin embargo hay que importarla desde a donde se movio, y el GetGif pasa a ser una promesa
        // GetGif( category )
       
        //ademas, quedando getgif como una promesa, adicionamos el .then y traemos a setImages,
        // .then( setImages )

        //como ultimo, nos arroja un warming de dependencia faltante, lo que nos dice que si la category cambia, deseariamos que el codigo
        //se vuelva a ejecutar, para ello, adicionamos a category dentro del array
//    }, [ category ])


    return (
        <div>

            {loading ? <p className="animate__animated animate__shakeX">LOADING ...</p> : data.map(img =>
                <GifGripItem
                    key={img.id}
                    { ...img }
                />

            )}
        </div>
    )
}