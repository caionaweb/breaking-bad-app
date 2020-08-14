import React from "react";
import stl from "./Error.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import ErrorMessage from "components/ErrorMessage";

const Error = (props) => {
  return (
    <section className="wrapper">
      <Header />
      <section className="content">
        <section className="container">
          <ErrorMessage {...props} />
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Error;
