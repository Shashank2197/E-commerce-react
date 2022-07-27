import React from "react";
import NavComponent from "./NavComponent";

const LayoutComponent = (props) => {
  return (
    <>
      <NavComponent />
      {props.children}
    </>
  );
};

export default LayoutComponent;
