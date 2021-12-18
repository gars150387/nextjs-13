import React from "react";

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