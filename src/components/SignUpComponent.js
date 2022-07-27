import React from "react";
import LayoutComponent from "./LayoutComponent";

const SignUpComponent = (props) => {
  return (
    <>
      <LayoutComponent>{props.children}</LayoutComponent>
    </>
  );
};

export default SignUpComponent;
