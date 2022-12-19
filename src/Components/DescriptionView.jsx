import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import BarChart from "react-bar-chart";
import Figure from "react-bootstrap/Figure";
import ModalForProducts from "./Modal/ModalForProducts";

function DesCriptionView({ props }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let conatiner = {
    display: "grid",
    gridTemplatecolumns: "auto auto",
    gridTemplaterows: "auto auto"
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        {"Description"}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h2>{props.brand}</h2>
          <main className={conatiner}>
            {props.images.length > 0 &&
              props.images.map((images) => {
                return (
                  <Figure>
                    <Figure.Image
                      width={175}
                      height={180}
                      alt="171x180"
                      src={images}
                    />
                  </Figure>
                );
              })}
          </main>
          <footer>{props.description}</footer>
          <Button variant="outline-primary" onclick={() => setModalShow(true)}>
            GetDetails
          </Button>
          <ModalForProducts show={setModalShow} data={props} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DesCriptionView;
