import React from "react";
import LayoutComponent from "./LayoutComponent";

const LoginComponent = (props) => {
  return (
    <>
      <LayoutComponent>{props.children}</LayoutComponent>
    </>
  );
};

export default LoginComponent;
