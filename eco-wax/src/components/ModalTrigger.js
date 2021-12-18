import React from "react";
import { Button } from "react-bootstrap";
import { ModalPromocion } from "./ModalPromocion";

export const ModalTrigger =() =>{
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <ModalPromocion
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );

}