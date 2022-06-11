import React from 'react'

import '../images/ecowax-product4.jpg'

export const ProductFour = () => {
  return (
    <div className='card-container'>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Lavado ecológico MOTOS</h5>
              <p className="card-text">Es un Producto Biodegradable que funciona como lavado en Seco para tu Moto, Limpia y brilla la pintura, accesorios y cojineria de la moto sin utilizar agua. Su Formula innovadora contiene filtros UV5, protege de rayos solares evitando el desgaste.</p>
              <p className="card-text"><small className="text-muted">Contenido: 500ml</small></p>
            </div>
            <div className='price-div'>
              <h3>29.900 COP</h3>
              <button>Adquire el producto</button>
            </div>
          </div>
          <div id='div-img-product' className="col-md-4">
            <img src={require("../images/ecowax-product4.jpg")} className="img-fluid rounded" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
