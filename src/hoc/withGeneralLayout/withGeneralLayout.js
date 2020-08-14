import React from "react";
import stl from "./withGeneralLayout.module.scss";
import ErrorMessage from "components/ErrorMessage";
import Spinner from "components/Spinner";
import Header from "components/Header";
import Footer from "components/Footer";
import classNames from "classnames";

const withGeneralLayout = (config = { isGrid: true }) => (ContentComponent) => (props) => {
  const { isLoading, error, data } = props;

  const contentSectionStyles = classNames("content", { [stl.content_indent]: !config.isGrid });
  const errorElement = error && <ErrorMessage />;
  const loaderElement = isLoading && <Spinner />;

  const hasContent = !(error || isLoading);
  const content = hasContent && <ContentComponent data={data} {...props} />;

  return (
    <section className="wrapper">
      <Header />
      <section className={contentSectionStyles}>
        <section className="container">
          {errorElement}
          {content}
          {loaderElement}
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default withGeneralLayout;
