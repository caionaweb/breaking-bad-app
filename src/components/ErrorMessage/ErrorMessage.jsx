import React from "react";
import stl from "./ErrorMessage.module.scss";
import notFound from "assets/images/404.png";

const ERRORS = {
  code404: {
    head: "404, ooooops!",
    subhead: "Stay out of my territory",
    title: "Not found page error",
    img: notFound,
  },
  codeDefault: {
    head: "the universe is random.",
    subhead: "it's not inevitable. it's simple chaos",
    title: "image of some error",
    img: notFound,
  },
};

const ErrorMessage = ({ code = "Default" }) => {
  const getContent = () => {
    const { title, head, subhead, img } = ERRORS[`code${code}`];
    return (
      <div className={stl.message}>
        <img className={stl.message__image} src={img} alt={title} />
        <div className={stl.message__head}>{head}</div>
        <div className={stl.message__subhead}>{subhead}</div>
      </div>
    );
  };

  return getContent();
};

export default ErrorMessage;
