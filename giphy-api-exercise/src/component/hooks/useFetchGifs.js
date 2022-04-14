//custome hook*********************************

//usar la palabra use al principio de un titulo de carpeta, es un buen habito para indicarle a los operadores,
// que dicha carpeta es un hooks

//los use son que funciones
import { useEffect, useState } from 'react';
import { GetGif } from '../helpers/GetGif';



// pasamos la category como un argumento nuevamente
export const useFecthGifs = (category) => {

    //los custome hooks tambien pueden tener un estado, en este caso, el estado es un object con un boolean como variable
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //vamos a traer el hook de useEffect del anterior componente para establecerlo aca,
    //y por ende, reducir las lineas de codigo y tener un codigo mas limpio
    //**importante resaltar, useEffect no puede ser una funcion async**
    useEffect(() => {
        //ya que fetch function fue movida a una carpeta, el useEffect sigue manteniendo la function de getGif, 
        //sin embargo hay que importarla desde a donde se movio, y el GetGif pasa a ser una promesa
        GetGif(category)

            //ademas, quedando getgif como una promesa, adicionamos el .then y traemos a setImages,
            .then(img => {
        //setTimeout es implementado en este caso para poder establecer un tiempo de carga y poder ver el cambio
                setTimeout(() => {
                    //se establace el setState con el object antes declarado, y asignandole a la variable data, el valor de img 
                    setState({
                        data: img,
                        loading: false
                    }, 9000);

                })
            });

        //como ultimo, nos arroja un warming de dependencia faltante, lo que nos dice que si la category cambia, deseariamos que el codigo
        //se vuelva a ejecutar, para ello, adicionamos a category dentro del array
    }, [category])


    //recuerda que toda funcion debe retornar algo, en este caso, retornamos el state.
    return state

}