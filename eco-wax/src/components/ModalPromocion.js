import React from "react";
import {Modal, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

export const ModalPromocion =(props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Quieres ver nuestras Promociones?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Queremos ofrecerte los mejores Paquetes!</h4>
          <p>
          <br/>
            Si quieres ver nuestras promociones, por favor haz click en el boton de "Vamos",
            <br/>
            caso contratio, solo debes hacer click en "No, Gracias!""
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>No, Gracias!</Button>
          <Link to='/inicio'>
          <Button>Vamos</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  
