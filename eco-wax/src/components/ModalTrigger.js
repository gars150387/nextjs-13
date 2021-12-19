import React from "react";
import { Button } from "react-bootstrap";
import { ModalPromocion } from "./ModalPromocion";

export const ModalTrigger =() =>{
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
         Haz click aca si quieres ver nuestros productos
        </Button>
  
        <ModalPromocion
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );

} 