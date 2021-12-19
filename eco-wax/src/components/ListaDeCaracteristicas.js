import { ListaDeProductos } from "./ListaDeProductos";

export const Caracteristicas = () =>{
    return (
        <>
        {ListaDeProductos.Caracteristicas.map((element)=>{
            return (
                <ul>
                    <li>
                        {element.Caracteristicas}
                    </li>
                </ul>
            )
        })}
        </>
    )
}