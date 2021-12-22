import React from "react";
import { Button } from "react-bootstrap";
import { ModalPromocion } from "./ModalPromocion";

export const ModalTrigger =() =>{
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button id="buttonTrigger" variant="primary" onClick={() => setModalShow(true)}>
         <p id="textTrigger">Haz click aca si quieres ver nuestros productos</p>
        </Button>
  
        <ModalPromocion
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );

} 