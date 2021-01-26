import React, { useState } from "react";
import { Container, Row, Image } from "react-bootstrap";
import logo from "./LinkedIn-Logo.wine.png";

const FullPageLoader = () => {
  const [className, setClassName] = useState("d-block");
  const [classNameLoading, setClassNameLoading] = useState("LoadingAnimated");
  const [classNameShape, setClassNameShape] = useState("shape");

  setTimeout(() => {
    setClassName("LoadingPage");
  }, 2000);
  setTimeout(() => {
    setClassNameLoading("scale-out-center");
    setClassNameShape("scale-out-center");
  }, 1500);
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        paddingTop: "50px",
        zIndex: "99999999999",
        backgroundColor: "rgb(243, 242, 239)",
        overflow: "hidden",
      }}
      className={className}
    >
      <Container>
        <Row className="justify-content-center align-content-center mt-5">
          <div className="m-auto">
            <Image src={logo} fluid style={{ height: "220px", marginBottom: "-50px" }} />
            <div className={classNameLoading}>
              <span className={classNameShape}></span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FullPageLoader;
