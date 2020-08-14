import React from "react";
import stl from "./Spinner.module.scss";
import spinnerGif from "assets/images/loader.gif";

const Spinner = () => {
  return <div className={stl.loader} style={{ backgroundImage: `url(${spinnerGif})` }}></div>;
};

export default Spinner;
