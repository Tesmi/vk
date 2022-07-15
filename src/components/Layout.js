import React from "react";
import Header from "./Header";

import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <Header contactUsRef={props.contactUsRef} />
      <div className={classes.container}>{props.children}</div>
    </>
  );
};

export default Layout;
