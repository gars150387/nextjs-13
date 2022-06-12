import React from 'react'

import '../images/ecowax-product3.jpeg'
import '../styles/products.scss'

export const ProductOne = () => {
  return (
    <div className='card-container'>
      <div className="card mb-3">
        <div className="row g-0">
          <div id='div-img-product' className="col-md-4">
            <img src={require("../images/ecowax-product3.jpeg")} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Restaurador de partes negras</h5>
              <p className="card-text">Es un producto ideal para hidratar y restaurar plásticos negros que se van desgastando a través de los rayos solares y el clima. Funciona en el tablero, partes plásticas externas, cojineria de cuero y llantas. da Brillo y protección. no contiene Silicona</p>
              <p className="card-text"><small className="text-muted">Contenido: 300ml</small></p>
            </div>
            <div className='price-div'>
              <h3>23.900 COP</h3>
              <button> Adquire el producto</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
