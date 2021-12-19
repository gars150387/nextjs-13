import React from 'react'
import { ListaDeProductos } from './ListaDeProductos'
import { Card, Button } from 'react-bootstrap'
// import {Caracteristicas} from './ListaDeCaracteristicas'
// import '../images/pic1/jpeg'
// import '../images/pic2/jpeg'
// import '../images/pic3/jpeg'
// import '../images/pic4/jpeg'

export const Producto = () => {
    let index = 0
    return (
        <>
            {ListaDeProductos.map((item) => {
                return (
                    <Card key={item.id} style={{ width: "43%", borderRadius: "10px", margin: "auto", marginTop: "20px" }}>
                        {/* <Card.Img variant="top" src={`./${item.img}.jpeg`} /> */}
                        <Card.Body>
                            <Card.Title><h2 className='bg-dark w-100' style={{ height: "75px", color: "white", position: "relative" }}>{item.nombre}</h2></Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <h4>
                                Descripcion:
                            </h4>
                            <p>
                                {item.caracteristica > index && <div>{item.caracteristica[index]}</div>}
                            </p>
                            <h5>
                                {item.presentacion}
                            </h5>
                            <Card.Text>
                                <h4>
                                    Obsequio:
                                </h4>
                                <p>{item.obsequio}</p>
                                <h4>
                                    Precio: {item.precio}
                                </h4>
                            </Card.Text>
                            <Button variant="success">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}