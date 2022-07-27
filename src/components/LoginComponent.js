import React from "react";
import Layout from "./LayoutComponent";

const LoginComponent = (props) => {
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
};

export default LoginComponent;
