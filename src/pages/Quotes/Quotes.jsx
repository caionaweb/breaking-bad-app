import React from "react";
import QuoteItem from "components/QuoteItem";
import { BBService } from "services";
import { compose } from "utils";
import { withData, withGeneralLayout, withLoadMore } from "hoc";

const Quotes = ({ data: quotes }) => {
  return (
    <>
      {quotes.map(({ id, ...data }) => (
        <QuoteItem key={id} {...data} />
      ))}
    </>
  );
};

export default compose(withData(BBService.getAllQuotes), withGeneralLayout({ isGrid: false }), withLoadMore)(Quotes);
