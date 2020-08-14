import React from "react";
import stl from "./List.module.scss";

const List = ({ children }) => {
  return <div className={stl.list}>{children}</div>;
};

export default List;
