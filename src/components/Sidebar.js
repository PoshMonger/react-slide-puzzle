import React from "react";
import Col from "./Grid/Col/Col";
import Row from "./Grid/Row/Row";

const Sidebar = ({ open }) => {
  return (
    <div
      style={{
        width: open ? "200px" : "",
        height: "100vh",
        backgroundColor: "rgba(95, 85, 85, 0.395)",
        padding: "20px",
        boxSizing: "border-box",
        position: "absolute",
        left: open ? 0 : "-200px",
        color: "white",
      }}
    >
      Sidebar
      <Row style={{color: "white", width: "100%", height: "100%"}}>
        <Col flex="1 1 calc(25% -10px)" style={{color: "white"}}>Col</Col>
       <Col flex="1 1 calc(25% -10px)" style={{color: "white"}}>Col</Col>
        <Col flex="1 1 calc(25% -10px)" style={{color: "white"}}>Col</Col>
      </Row>
    </div>
  );
};

export default Sidebar;
